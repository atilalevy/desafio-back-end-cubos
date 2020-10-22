import { Request, Response } from 'express';
import api from '../api/api';

interface Consultation {
    nome: string,
    especie: string,
    raca: string,
    urgente: boolean,
    atendimento: string,
    status: string
}

class ConsultationController {

    getAll(req: Request, res: Response) {

        api.get('/consultations')
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

        api.get('/consultations', {
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

    async getDoctorConsultation(req: Request, res: Response) {

        let doctorId = req.query.id

        let doctorSpecialty = await api.get(`/doctors/${doctorId}`).then((response) => response.data.especialidade);

        api.get('/consultations', {
            params: {
                atendimento: doctorSpecialty
            }
        })
        .then((response) => {

            let consultations = response.data.filter((item: any) => {
                return item.status == "pendente";
            });

            let consultation = consultations.find((item: any) => {
                if (item.urgente == true) {
                    return item;
                } else {
                   return item[0];
                }
            });

            res.json(consultation); 
            return
        })
        .catch((err) => {
            res.json(err)
            return
        });

    };

    create(req: Request, res: Response){
        
        let consultation: Consultation = req.body;

            api.post('/consultations', consultation)
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

        const status = req.body
        const id = req.query.id

        api.patch(`/consultations/${id}`, status)
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

        api.delete(`/consultations/${id}`)
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

export default new ConsultationController();