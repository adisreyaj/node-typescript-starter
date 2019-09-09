import express from 'express';
import { App } from './app';

const appInstance: App = new App();
const app: express.Application = appInstance.app;

// Setting up the port for the server
const PORT = parseInt(process.env.PORT, 10) || 3000;

// Firing up the server
app.listen(PORT, () => {
  console.log(`Server is running ❤️ at localhost :${PORT}`);
});
