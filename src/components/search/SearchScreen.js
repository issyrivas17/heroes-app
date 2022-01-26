import React from 'react'

export const SearchScreen = () => {
    return (
        <>
            <h1>Search </h1> 
           <hr/> 
           <div className='row'> 
           <div className='col-5'> 
           <h4>Form</h4>
            <hr/> 

            <form> 
                <input
                type= 'text' 
                placeholder='Search for a hero' 
                className='form-control' 
                autoComplete='off' 
                /> 

             <button 
             className='btn btn-outline-primary'
             
             
             type='submit'>
                 Search ... 
             </button>



            </form>

           </div>

           </div> 


        </>
    )
}
