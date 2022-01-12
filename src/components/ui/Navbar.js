import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
 
    const handleLogout = () => { 
        // todo por hacer /*/  
        console.log('logout') 
    }



    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
        
                    className={({isActive}) => {
                        console.log(isActive)
                        return'nav-item nav-link'
                    } 
                    }
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   <span className='Nav-item nav-link text-info'>
                      Ismenia  
                       </span> 
                    <button
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}