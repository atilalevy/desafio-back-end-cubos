import api from '../api/api';

interface Doctor {
    nome: string,
    especialidade: string
};

class DoctorService {

    async getAll(){

        let result = await api.get('/doctors')
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                return err;
            });
        
            return result;
    }

    async getOne(id: string){

        let result = await api.get('/doctors', {
                params: {
                    id: id
                }
            })
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                return err;
            });
        
            return result;
    }

    async create(doctor: Doctor){
        let result = await api.post('/doctors', doctor)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                return err;
            });

        return result;    
    };

    async update(doctor: Doctor, id: string) {

        let result = await api.patch(`/doctors/${id}`, doctor)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                return err;
            })
        
        return result;    

    };

    async delete(id: string){

        let result = await api.delete(`/doctors/${id}`)
            .then((response) => {
                return response.data
            })
            .catch((err) => {
                return err
            });
        
            return result;
    }

};

export default new DoctorService();