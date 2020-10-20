import { Request, Response } from 'express';
import api from '../api/api';

interface Doctor {
    nome: string,
    especialidade: string
}

class DoctorController {

    getAll(req: Request, res: Response) {

        api.get('/doctors')
            .then((response) => {
                res.json(response.data)
                return
            })
            .catch((err) => {
                res.json(err)
                return
            })
    };
    
    getOne(req: Request, res: Response){

        api.get('/doctors', {
            params: {
                id: req.query.id
            }
        })
        .then((response) => {
            res.json(response.data)
            return
        })
        .catch((err) => {
            res.json(err)
            return
        })
    }

    create(req: Request, res: Response){
        
        const doctor = req.body;

        api.post('/doctors', doctor)
            .then((response) => {
                res.send(response.data)
                return
            })
            .catch((err) => {
                console.log(err)
                return
            })
    }     

    update(req: Request, res: Response){

        const doctor = req.body
        const id = req.query.id

        api.patch(`/doctors/${id}`, doctor)
        .then((response) => {
            res.send(response.data)
            return
        })
        .catch((err) => {
            res.send(err)
            return
        })
    }

    delete(req: Request, res: Response){

        const id = req.query.id

        api.delete(`/doctors/${id}`)
        .then((response) => {
            res.json(response.data)
            return
        })
        .catch((err) => {
            res.json(err)
            return
        })

    }
};

export default new DoctorController();