import { Request, Response } from 'express';
import { ProfileService } from '../service/ProfileService';

class ProfileController {
    async index(request: Request, response: Response){
        const profileService = new ProfileService();
        try {
            const ong_id = request.headers.authorization;
            const incidents = await profileService.index(ong_id);
            return response.json(incidents)
        } catch (error) {
            return response.status(400).json(error)
        };
    };
};

export { ProfileController };