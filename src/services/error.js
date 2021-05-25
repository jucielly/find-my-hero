class ErrorService {
    static getErrorMessage(error) { 

        if(error.response){
            return error.response.data.message
        }else if (error.request){
            return 'Você está offline tente novamente'
        }else{
            return 'Ops, ocorreu um erro :0'
        }
    }

}

export default ErrorService;