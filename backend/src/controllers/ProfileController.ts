import { Request, Response } from 'express';
import { ProfileService } from '../service/ProfileService';

class ProfileController {
    async index(request: Request, response: Response){
        const profileService = new ProfileService();
        try {
            const ong_id = "ddb3e475-eb5f-4f05-a6b9-dcfcdad3ad0e";
            const incidents = await profileService.index(ong_id);
            return response.json(incidents)
        } catch (error) {
            return response.status(400).json(error)
        };
    };
};

export { ProfileController };