FROM golang:1.16-alpine

WORKDIR /app

ENV GO111MODULE=off

RUN apk update && apk add --no-cache git

COPY . .

RUN go get

EXPOSE 8080

CMD ["go", "app/main.go"]