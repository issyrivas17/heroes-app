import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroById'
import { HeroCards } from './HeroCards';

export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher); 
    return (
        <div className='row rows-cols-3 row-cols-md-3 g-3'>

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
