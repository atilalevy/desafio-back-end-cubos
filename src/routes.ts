import { Router } from 'express';
import DoctorController from './controllers/DoctorController';

const routes = Router();

//doctors route
routes.get('/doctors', DoctorController.getOne)
routes.get('/doctors', DoctorController.getAll)
routes.post('/doctors', DoctorController.create)
routes.delete('/doctors', DoctorController.delete)
routes.patch('/doctors', DoctorController.update)

export default routes;