FROM golang:1.16-alpine

WORKDIR /app

RUN apk update && apk add --no-cache git

COPY . .

RUN go get

EXPOSE 8080

CMD ["go", "app/main.go"]