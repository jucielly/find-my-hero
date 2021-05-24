import api from './api'




export const addnewUser = async (user) => {
    const reponse = await api.post('/users', user).then(res => {
        console.log('data', res.data)
    }).catch(err => console.log(err))
}

