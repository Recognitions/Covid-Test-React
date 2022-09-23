import api from './Axios'

async function del(id){
    const get = await api.get(`/patient/delete/${id}`)
}

export default del