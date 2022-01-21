import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

    const {heroId} = useParams(); 
     
    const hero= getHeroById (heroId); 

    if (!hero) {
        return <Navigate to = '/' /> 
    } 

   const imagePath = `/assest/heroes/${hero.id}.jpg`;



    return (
        <div className='row mt-5'> 
        <div className='col-4'> 
        <img 
        src={imagePath} 
         alt ={hero.superhero} 
         className='img-thumbnail' 
        
        />   
           </div>   
          <d 
        </div>
    )
}
