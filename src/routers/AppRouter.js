import React from 'react' 
import {Routes,Route, BrowserRouter} from "react-router-dom";
import { DcScreen } from '../components/Dc/DcScreen';
import { LoginScreen } from '../components/Login/LoginScreen';
import { MarvelScreen } from '../components/Marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
  
  

export const AppRouter = () => {
    return (
        < BrowserRouter>
            <h1>Welcome to React router!</h1>
           <Routes> 
              <Route path = "/" element={<MarvelScreen />} /> 
              <Route path = "/marvel" element = {<MarvelScreen/>} /> 
              <Route path = "/dc" element = {<DcScreen/>} /> 
              <Route path = "/search" element = {<SearchScreen/>} /> 
              <Route path = "/login" element = {<LoginScreen/>} /> 



               </Routes> 
        </ BrowserRouter>
    )
}
