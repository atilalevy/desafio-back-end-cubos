import api from '../api/api';

interface Consultation {
    nome: string,
    especie: string,
    raca: string,
    urgente: boolean,
    atendimento: string,
    status: string
}

class ConsultationService {

    async getAll(){

        let result = await api.get('/consultations')
            .then((response) => {
                return response.data
                
            })
            .catch((err) => {
                return err
            })
        
            return result;
    }

    async getOne(id: string){

        let result = await api.get('/consultations/', {
            params: {
                id: id
            }
        })
            .then((response) => {
                return response.data
            })
            .catch((err) => {
                return err
            })
        
        return result;

    }

    async getDoctorConsultation(doctorId: string){

        let doctorSpecialty = await api.get(`/doctors/${doctorId}`).then((response) => response.data.especialidade);

        let result = await api.get('/consultations', {
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

                return consultation; 
                
            })
            .catch((err) => {
                return err;
            });

        return result;
    }

    async create(consultation: Consultation){

        let result = await api.post('/consultations', consultation)
            .then((response) => {
                return response.data
            })
            .catch((err) => {
                return err
            });

        return result;    
    }

    async update(id: string, status: string){

        let result = await api.patch(`/consultations/${id}`, status)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                return err;
            });
        
        return result;
    }

}

export default new ConsultationService();