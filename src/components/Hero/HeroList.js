import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroById'

export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher); 
    return (
        <>
            <h1>Hero List-{publisher} </h1> 

            <ul>
                {
                    heroes.map(hero=>(
                        <li key={hero.id}>
                            {hero.superhero} 
                        </li> 
                    ))
                }
             
            </ul>
        </>
    )
}
