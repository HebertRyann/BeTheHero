import { Response, Request } from 'express';
import { OngService } from '../service/OngService';

class SessionController {
    async create(request: Request, response: Response) {
        const ongService = new OngService();
        try {
            const { name } = request.body;
            const ong = await ongService.findOng(name);
            return response.json(ong);
        } catch (error) {
            return response.status(400).json(error)
        }
    };
}

export { SessionController };