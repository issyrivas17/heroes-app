import { heroes } from "../data/heroes"



export const getHeroById= (id = '') => {
    console.log('getHeroById callme')
    return heroes.find(hero => hero.id === id)  
}