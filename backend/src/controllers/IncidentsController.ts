import { Request, Response } from 'express';
import { IncidentsService } from '../service/IncidentsService';
import { v4 } from 'uuid';

class IncidentsController {
    async index (request: Request, response: Response) {
        const incidentsService = new IncidentsService();
        
        try {
            const incidents = await incidentsService.index()

            return response.json(incidents);
        } catch (error) {
            console.log('incidents controller error')
            return response.status(400).json(error);
        }
        
    };

    async create(request: Request, response: Response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;
        console.log(ong_id)
        
        try {
            const incidentsService = new IncidentsService();
            const incident = await incidentsService.create({
                description,
                id: v4(),
                ong_id,
                title,
                value
            })       
            return response.json(incident);
        } catch (error) {
            return response.status(400).json(error);
        }
    };

    async delete(request: Request, response: Response) {
        try {
            const incidentsService = new IncidentsService();
            const { id } = request.params;
            await incidentsService.delete(id);
            return response.status(204).json({
                message: "Incident removed with success"
            });
        } catch (error) {
            return response.status(400).json({
                message: error.message
            });
        }
    };
}

export { IncidentsController };