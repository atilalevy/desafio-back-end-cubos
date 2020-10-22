import { Request, Response } from 'express';
import DoctorService from '../services/DoctorService';

class DoctorController {

    async getAll(req: Request, res: Response) {

        let result = await DoctorService.getAll();

        res.json(result);
        return
    };
    
    async getOne(req: Request, res: Response){

        let id = req.query.id as string

        let result = await DoctorService.getOne(id);

        res.json(result);
        return

    }

    async create(req: Request, res: Response){
        
        let doctor = req.body;

        let result = await DoctorService.create(doctor);

        res.json(result);
        return

    }     

    async update(req: Request, res: Response){

        let doctor = req.body
        let id = req.query.id as string;

        let result = await DoctorService.update(doctor, id);
        
        res.json(result);
        return
    }

    async delete(req: Request, res: Response){

        const id = req.query.id as string;

        let result = await DoctorService.delete(id);

        res.json(result);
        return
    }
};

export default new DoctorController();