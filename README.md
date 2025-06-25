# Docker Practice Backend

This project demonstrates a simple **Node.js** backend written in TypeScript. It exposes a few REST endpoints that use both **MongoDB** (via Mongoose) and **PostgreSQL** (via Prisma).

The repository includes a `Dockerfile` and a `docker-compose.yaml` to run the service together with MongoDB and PostgreSQL containers. It can also be executed directly with Node locally.

## Features

- Express based API server
- MongoDB integration using Mongoose
- PostgreSQL integration using Prisma ORM
- Dockerfile for containerisation
- Docker Compose configuration for local development with MongoDB and PostgreSQL

## Endpoints

| Method | Endpoint           | Description                                  |
|-------|-------------------|----------------------------------------------|
| `GET` | `/`               | Health check route                           |
| `GET` | `/mongo-register` | Registers a sample user in MongoDB           |
| `GET` | `/mongo-data`     | Retrieves all users stored in MongoDB        |
| `GET` | `/prisma-register`| Registers a sample user in PostgreSQL        |
| `GET` | `/prisma-data`    | Retrieves all users stored in PostgreSQL     |

## Running locally

1. Install dependencies
   ```bash
   npm install
   ```
2. Create an `.env` file with the following values (adjust if required):
   ```ini
   PORT=3000
   MONGOSE_URL=mongodb://localhost:27017/my-data
   DATABASE_URL=postgres://myuser:mypass@localhost:5432/mydatabase
   ```
3. Build and start the server
   ```bash
   npm run dev
   ```

## Using Docker Compose

To launch the server together with MongoDB and PostgreSQL containers, run:

```bash
docker-compose up --build
```

When started via compose, the application will be available on `http://localhost:3000`.

## NPM Scripts

- `npm run build` – Compile the TypeScript source
- `npm start` – Start the compiled JavaScript from `dist/`
- `npm run dev` – Build then start the server
- `npm run docker-dev` – Used within the Docker container to run migrations, build and start
- `npm test` – Currently prints a placeholder message

## License

This project is provided under the ISC license.

