import React, { useEffect, useState } from 'react'
import ProfileForm from '../components/molecules/ProfileForm'
import UserService from '../services/user'
import ErrorService from '../services/error'


const EditProfileContainer = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [user, setUser] = useState()


    const handleSubmit = (data) => {
        setLoading(true)
        UserService.editUser(data).then
    }

    useEffect(() => {
        UserService.getUser().then(response => {
            setUser(response.data)
        })
    }, [])

    return (
        <ProfileForm onSubmit={handleSubmit} loading={loading} error={error} initialValues={user} />
    )
}

export default EditProfileContainer;