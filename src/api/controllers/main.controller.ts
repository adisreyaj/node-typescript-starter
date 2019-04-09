import { Request, Response } from 'express';
export class MainController {
	public static async getHealthInfo(req: Request, res: Response) {
		res
			.json({
				status: 'up'
			})
			.status(200);
	}
}
