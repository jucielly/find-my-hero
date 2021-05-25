import React, { useState } from 'react'
import RegisterForm from '../components/organisms/RegisterForm'
import UserService from '../services/user'
import ErrorService from '../services/error'
import { useHistory } from 'react-router-dom'


const RegisterFormContainer = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
  
    const { push } = useHistory()

    

    const handleSubmit = (data) => {
        setLoading(true)
        UserService.addnewUser(data).then(() => {
            push('/', { accountCreated: true })
        }).catch((err) => {
            const message = ErrorService.getErrorMessage(err)
            setError(message)
            setLoading(false)
        })

    }


    return (
        <>
            
            <RegisterForm onSubmit={handleSubmit} loading={loading} error={error} />
        </>

    )
}

export default RegisterFormContainer