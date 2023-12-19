FROM node:21-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . .
EXPOSE 3000
CMD npm run dev