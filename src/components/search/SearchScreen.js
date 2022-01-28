import React from 'react' 
import { useNavigate,useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCards } from '../Hero/HeroCards';
import {useForm} from "../hooks/useForm"

;


export const SearchScreen = () => {

   const navigate = useNavigate (); 

   const location = useLocation();  

   console.log(location); 


    const [formValues,handleInputChange] = useForm ({
        searchText:'', 
    })
   
    const {searchText} = formValues;  
    const heroesFileted= getHeroesByName ('ALGO');

const handleSearch = (e) => {  
    e.preventDefault(); 
    navigate (`?q=${searchText}`) 
}
    return (
        <>
            <h1>Search </h1> 
           <hr/> 
           <div className='row'> 

           <div className='col-5'> 
           </div> 

            <form onSubmit={handleSearch}> 
                <input
                type='text' 
                placeholder='Search for a hero' 
                className='form-control' 
                autoComplete='off' 
                defaultValue={searchText}  
                onChange={handleInputChange} 
                /> 

             <button 
             className='btn btn-outline-primary mt-1'
             type='submit'>
                 Search ... 
             </button>



            </form>

           </div>
           
           <div className='col-7'>
               <h4>Results</h4> 
               <hr/> 
                
                {
                    heroesFileted.map(hero=> (
                        <HeroCards
                        key={hero.id}
                        {...hero} 
                         
                        /> 
                    ))
                }



              </div>  
           


        </>
    )
}
