import { useMemo } from 'react';

import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCards } from './HeroCards';

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher),[publisher]);   
     
    return (
        <div className='row rows-cols-3 row-cols-md-3 g-3 animate__animated animate__backInDown'>

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
