import React from 'react'

export const SearchScreen = () => {




const handleSearch = () => {

}







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
                value={searchText} 
                /> 

             <button 
             className='btn btn-outline-primary mt-1'
             type='submit'>
                 Search ... 
             </button>



            </form>

           </div>

           </div> 


        </>
    )
}
