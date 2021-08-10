import express from 'express';

import { OngController } from './controllers/OngController';
import { IncidentsController } from './controllers/IncidentsController';
import { ProfileController } from './controllers/ProfileController';
import { SessionController } from './controllers/SessionController';

const routes = express.Router();

const sessionController = new SessionController();
const ongController = new OngController();
const profileController = new ProfileController();
const incidentsController = new IncidentsController();

routes.post('/session', sessionController.create)

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);


routes.post('/incidents', incidentsController.create);
routes.get('/incidents', incidentsController.index);
routes.delete('/incidents/:id', incidentsController.delete);

export default routes;