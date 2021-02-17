FROM node:15-alpine

WORKDIR /build
COPY package.json /build/
COPY package-lock.json /build/
RUN npm install
COPY . /build/

RUN npm run build

FROM nginx:1.19-alpine

COPY --from=0 /build/dist/dashboard-migracion-sips-fe /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf


