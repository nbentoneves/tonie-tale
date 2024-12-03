FROM node:18-alpine AS base

# 1. Install dependencies only when needed
FROM base AS builder

ENV NEXT_TELEMETRY_DISABLED=1 YARN_VERSION=4.2.2

WORKDIR /app

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk update && apk upgrade && apk add --no-cache libc6-compat \
    && corepack enable && corepack prepare yarn@${YARN_VERSION}

# Install dependencies based on the preferred package manager
COPY . .
COPY next.config.mjs .env.production tsconfig.json tsconfig.paths.json ./
COPY tailwind.config.ts postcss.config.mjs ./
COPY .yarn ./.yarn
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN \
  if [ -f yarn.lock ]; then yarn --immutable; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi

RUN yarn build

FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs \
    && adduser -S nextjs -u 1001

COPY ./heroku-exec.sh /app/.profile.d/heroku-exec.sh

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ARG PORT=3000
ENV PORT=$PORT

CMD HOSTNAME='0.0.0.0' node server.js