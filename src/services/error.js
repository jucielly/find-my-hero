class ErrorService {
  static getErrorMessage(error) {
    if (error.response) {
      return error.response.data.message;
    }
    if (error.request) {
      return 'Você está offline tente novamente';
    }
    return 'Ops, ocorreu um erro :0';
  }
}

export default ErrorService;
