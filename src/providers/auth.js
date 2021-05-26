import React, { createContext, useContext, useEffect, useState } from 'react';
import UserService from '../services/user'
import api from '../services/api'
import { useHistory } from 'react-router-dom'
import ErrorService from '../services/error'

const LOCAL_STORAGE_KEY = 'user'

const authContext = createContext({
    user: {},
    isLoggedIn: false,
    login: () => { throw new Error('context não pode ser usado fora do provider') },
    logout: () => { throw new Error('context não pode ser usado fora do provider') }

})

export const useAuth = () => useContext(authContext)

const AuthProvider = ({ children }) => {
    const { push } = useHistory()
    const [ready, setReady] = useState(false)
    const [user, setUser] = useState()
    const [loggedIn, setIsLoggedIn] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const setToken = (token) => api.defaults.headers['Authorization'] = `Bearer ${token}`

    const login = (email, password) => {
        setLoading(true)
        setError('')
        UserService.login(email, password).then(response => {
            const { user, token } = response.data
            setUser(user)
            setIsLoggedIn(true)
            setToken(token)
            push('/home')
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ user, token }))
        }).catch(error => {
            const message = ErrorService.getErrorMessage(error)
            setError(message)
        }).finally(() => setLoading(false))
    }
    const logout = () => {
        setIsLoggedIn(false)
        setUser(null)
        localStorage.removeItem(LOCAL_STORAGE_KEY)
        api.defaults.headers['Authorization'] = undefined
    }

    useEffect(() => {
        const stringfiedCredentials = localStorage.getItem(LOCAL_STORAGE_KEY) || '{}';
        const credentials = JSON.parse(stringfiedCredentials);
        if (credentials.user) {
            setUser(credentials.user)
            setIsLoggedIn(true)
            console.log('oi')
            setToken(credentials.token)
        }
        setReady(true)
    }, [])
    return (
        <authContext.Provider value={{
            user,
            loggedIn,
            login,
            logout,
            loading,
            error
        }}>
            {ready ? children : null}
        </authContext.Provider>
    )
}

export default AuthProvider