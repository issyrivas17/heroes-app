import {Routes,Route} from "react-router-dom";

import { Navbar } from "../components/ui/Navbar" 
import { DcScreen } from '../components/Dc/DcScreen';

import { MarvelScreen } from '../components/Marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroScreen } from "../components/Hero/HeroScreen";

export const DashboardRoutes = () => {
    return (
        <div className= "container">
            <Navbar/> 
            <Routes> 
             <Route path = "/" element={<MarvelScreen />} /> 
            <Route path = "/dc" element = {<DcScreen/>} /> 
            <Route path = "/search" element = {<SearchScreen/>} /> 
            <Route path = "/marvel" element = {<MarvelScreen/>} /> 
            <Route path = "/hero/:heroId" element = {<HeroScreen/>} /> 
               </Routes> 
        </div> 
    )
}

