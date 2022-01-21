import React from 'react'
import { useParams } from 'react-router-dom'

export const HeroScreen = () => {

    const{heroeId}= useParams(); 
    console.log(heroeId)
    
    return (
        <>
            <h1>HeroScreen</h1> 

            
        </>
    )
}
