FROM node:alpine

WORKDIR /app
COPY package* .
COPY tsconfig* .

RUN npm install
COPY . .
RUN npx prisma generate
EXPOSE 3000
CMD [ "npm","run","docker-dev" ]