## Docker
### Build docker image

```cmd
docker build -t mymarketinfo-app .
```

### Execute docker image
```cmd
docker run -p 9000:80 -d mymarketinfo-app
```