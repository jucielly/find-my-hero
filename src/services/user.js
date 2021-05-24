import api from './api'


class UserService {
    static addnewUser(user) {
        return api.post('/users', user).then(res => {
            console.log('data', res.data)
        })
    }
}



export default UserService;