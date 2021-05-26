import api from './api';

class UserService {
  static addnewUser(user) {
    return api.post('/users', user);
  }

  static login(email, password) {
    return api.post('/users/login', {
      email,
      password,
    });
  }

  static getUser() {
    return api.get('/users/current');
  }

  static editUser(user, currentPassword) {
    return api.patch('/users/current', {
      user,
      currentPassword,
    });
  }
}

export default UserService;
