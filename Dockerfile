FROM node:18-alpine AS builder

WORKDIR /src/

COPY . ./

RUN npm install

RUN npm run build

FROM node:18-alpine

WORKDIR /srv/

COPY --from=builder /src/build ./build 

RUN npm install -g serve

EXPOSE 80

CMD ["serve", "-s", "/srv/build", "-l", "80"]