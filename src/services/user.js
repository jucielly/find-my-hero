import api from './api'


class UserService {
    static addnewUser(user) {
        return api.post('/users', user)
    }

    static login(email, password) {
        return api.post("/users/login", {
            email,
            password
        })


    }
}



export default UserService;