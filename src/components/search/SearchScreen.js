import React from 'react' 
import queryString from 'query-string';

import { useNavigate,useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCards } from '../Hero/HeroCards';
import {useForm} from '../hooks/UseForm';
;


;

export const SearchScreen = () => {
    const navigate = useNavigate();
       const location = useLocation();
   
       const { q = '' } = queryString.parse(location.search);
       
       const [ formValues, handleInputChange ] = useForm({
           searchText: q,
       });
   
       const { searchText } = formValues;
   
       const heroesFileted = getHeroesByName(q)
   
   
       const handleSearch = (e) => {
           e.preventDefault();
           navigate(`?q=${ searchText }`)
       }
     return (
       <>
         <h1>Search </h1>
         <hr />
         {
             (q === '')
             ? <div className='alert alert-info'>Search for a hero</div>
             :(heroesFileted.length === 0) 
             && <div className='alert alert-danger'>No results : {q}</div>
         }
         <div className="row">
           <div className="col-5"></div>
   
           <form onSubmit={handleSearch}>
             <input
               type="text"
               placeholder="Search for a hero"
               className="form-control"
               name="searchText"
               autoComplete="off"
               defaultValue={searchText}
               onChange={handleInputChange}
             />
   
             <button className="btn btn-outline-primary mt-1" type="submit">
               Search ...
             </button>
           </form>
         </div>
   
         <div className="col-7">
           <h4>Results</h4>
           <hr />
   
   
                       {
                           heroesFileted.map(hero => (
                               <HeroCards
                                   key={ hero.id }
                                   { ...hero }
                               />
                           ))
                       }
         </div>
       </>
     );
   };