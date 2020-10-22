import { Request, Response } from 'express';
import api from '../api/api';
import ConsultationService from '../services/ConsultationService';

interface Consultation {
    nome: string,
    especie: string,
    raca: string,
    urgente: boolean,
    atendimento: string,
    status: string
}

class ConsultationController {

    async getAll(req: Request, res: Response) {

        let result = await ConsultationService.getAll();

        res.json(result);
        return
        
    };
    
    async getOne(req: Request, res: Response){

        let id = req.query.id as string;

        let result = await ConsultationService.getOne(id);

        res.json(result);
        return
    }

    async getDoctorConsultation(req: Request, res: Response) {

        let doctorId = req.query.id as string;

        let result = await ConsultationService.getDoctorConsultation(doctorId);

        res.json(result);
        return
    };

    async create(req: Request, res: Response){
        
        let consultation = req.body;

        let result = await ConsultationService.create(consultation);

        res.json(result);
        return
    }     

    async update(req: Request, res: Response){

        let status = req.body.status as string;
        let id = req.query.id as string;

        let result = await ConsultationService.update(id, status);

        res.json(result);
        return
    }

};

export default new ConsultationController();