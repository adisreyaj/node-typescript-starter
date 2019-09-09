import * as bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import { MainRoute } from './api/routes/main.route';
import { LoggerStream } from './config/logger';

export class App {
  public app: express.Application;
  public route: any;
  constructor() {
    this.app = express();
    this.configureServer();
    this.setupRoutes();
    this.setupLogging();
  }

  // Configure the server options
  private configureServer() {
    dotenv.config();
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      }),
    );
  }
  // Setup the Routes
  private setupRoutes() {
    this.route = new MainRoute();
    MainRoute.register(this.app);
  }

  private setupLogging() {
    this.app.use(morgan('combined', { stream: new LoggerStream() }));
  }
}
