import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroById'
import { HeroCards } from './HeroCards';

export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher); 
    return (
        <div className="card-columns">

                {
                    heroes.map(hero=>(
                        <HeroCards
                        key={hero.id}
                         {...hero} 
                        />
                
                        
                    ))
                }
        </div>
    )
}
