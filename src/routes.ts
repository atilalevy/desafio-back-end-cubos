import { Router } from 'express';
import DoctorController from './controllers/DoctorController';
import ConsultationsController from './controllers/ConsultationController';

const routes = Router();

// doctors route
routes.get('/doctors', DoctorController.getOne);
routes.get('/doctors', DoctorController.getAll);
routes.post('/doctors', DoctorController.create);
routes.delete('/doctors', DoctorController.delete);
routes.patch('/doctors', DoctorController.update);

// consultations route
routes.get('/consultations', ConsultationsController.getOne);
routes.get('/consultations', ConsultationsController.getAll);
routes.get('/consultations/doctor', ConsultationsController.getDoctorConsultation);
routes.post('/consultations', ConsultationsController.create);
routes.patch('/consultations', ConsultationsController.update);

export default routes;