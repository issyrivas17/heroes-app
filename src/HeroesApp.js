import React from 'react'
import { AuthContext } from './auth/authContext'
import { AppRouter } from './routers/AppRouter' 



export const HeroesApp = () => {
    return (
        <> 
        <AuthContext.Provider value={{
            hola: 'mundo',
            name: 'Hola soy ismenia'
        }}> 
        <AppRouter/> 
        </AuthContext.Provider>
      
        </>
    )
} 


