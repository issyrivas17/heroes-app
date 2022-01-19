import React from 'react'

export const HeroCards = ({
    id,
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
        <div>
            {superhero} {id}
        </div>
    )
}
