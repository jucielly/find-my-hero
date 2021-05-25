import React, { useEffect, useState } from 'react'
import ProfileForm from '../components/organisms/ProfileForm'
import UserService from '../services/user'
import ErrorService from '../services/error'
import Alert from '../components/molecules/Alert'


const EditProfileContainer = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [user, setUser] = useState()
    const [alert, setAlert] = useState(false)

    const handleAlertClose = () => setAlert(false)

    const handleSubmit = ({ name, email, currentPassword, password }) => {
        setError('')
        setLoading(true)
        UserService.editUser({ name, email, password }, currentPassword).then(response => {
            setAlert(true)
        }).catch((error) => {
            const message = ErrorService.getErrorMessage(error)
            setError(message)
        }).finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        UserService.getUser().then(response => {
            setUser(response.data)
        })
    }, [])

    return (
        <>
            <Alert open={alert} color='success' timeout={4000} message="Alterações salvas" onClose={handleAlertClose} />
            <ProfileForm onSubmit={handleSubmit} loading={loading} error={error} initialValues={user} />
        </>
    )
}

export default EditProfileContainer;