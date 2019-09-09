# Typescript Node Starter Template

![Node-Typescript-Starter](https://sreyaj.com/wp-content/uploads/2019/04/node-ts.jpg)

Create a Node server using the most favoured language Typescript. Get started with this simple Node-Typescript boilerplate code. It has all the basic setup done including testing which is powered by Jest.

The starter has logging setup out of the box.

The setup uses a highly scalable and maintainable folder structure so it fits for all the needs.

There are many Node-TS starters out there, but i wanted to have the most basic setup which has all the necessary things.

Typescript ❤️️ Node

## Features

1. Highly scalable folder structure.
1. Bare minimum setup done.
1. Test configurations added.
1. Works out of the box.
1. Logging with Winston and Morgan
1. .env file for configurations

## How to get started

1. Clone the repository.

```bash
git clone https://github.com/adisreyaj/node-typescript-starter.git
```

2. Install the packages

```bash
npm install
```

3. Rename `.env.example` to `.env`

4. Run the server

```bash
npm run start
```

5. Done. Check the status of the server

```
http://localhost:3000/api/v1/health
```

You will be able to see this response:

```json
{
  "status": "up"
}
```

This means you are good to go.

### Running Test

The project use **Jest** as the test runner and also uses **chai** and **supertest**

```bash
npm run test
```

**Enjoy**
