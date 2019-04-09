import * as bodyParser from 'body-parser';
import express from 'express';
import { MainRoute } from './api/routes/main.route';

export class App {
	public app: express.Application;
	public route: any;
	constructor() {
		this.app = express();
		this.configureServer();
		this.setupRoutes();
	}

	// Configure the server options
	private configureServer() {
		this.app.use(bodyParser.json());
		this.app.use(
			bodyParser.urlencoded({
				extended: true
			})
		);
	}
	// Setup the Routes
	private setupRoutes() {
		this.route = new MainRoute();
		MainRoute.register(this.app);
	}
}
