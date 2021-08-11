import { Request, Response } from 'express';
import { OngService } from '../service/OngService';
import { v4 } from 'uuid';


class OngController {
    async index (request: Request, response: Response) {
        const ongService = new OngService();

        const ongs = await ongService.index();
        
        return response.json(ongs);
    };

    async create(request: Request, response: Response){
        const ongService = new OngService();
        try {
            const { name, email, whatsapp, city, uf, password } = request.body;

            const ong = await ongService.create({
                id: v4(),
                name, 
                email,
                password, 
                whatsapp, 
                city, 
                uf
            });

            delete ong.password

            return response.json({ ong });
        } catch (error) {
            return response.status(400).json(error.message);
        }
    };
}

export { OngController };