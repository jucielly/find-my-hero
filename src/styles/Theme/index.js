import React from 'react'
import { ThemeProvider } from 'styled-components'



const theme = {
    colors: {
        primary: '#202020',
        secondary: '#F30000',
        terciary: '#333333',
        fontColor: '#ccc',
        defaultWhite: '#fff',
        success: '#659B5E',
        danger: '#E33D2F',
    }
}


const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme