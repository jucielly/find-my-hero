import React, { createContext, useContext, useEffect, useState } from 'react';
import UserService from '../services/user'
import api from '../services/api'
import { useHistory } from 'react-router-dom'

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
    const [user, setUser] = useState()
    const [loggedIn, setIsLoggedIn] = useState(false)

    const setToken = (token) => api.defaults.headers['Authorization'] = `Bearer ${token}`

    const login = (email, password) => {
        UserService.login(email, password).then(response => {
            const { user, token } = response.data
            setUser(user)
            setIsLoggedIn(true)
            setToken(token)
            push('/home')
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ user, token }))
        }).catch(console.error)
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
            setToken(credentials.token)
        }

    }, [])
    return (
        <authContext.Provider value={{
            user,
            loggedIn,
            login,
            logout
        }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider