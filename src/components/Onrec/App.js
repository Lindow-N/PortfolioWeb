import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import ScrollToTop from './containers/Router/GoTop';



import Accueil from "./components/Accueil/Accueil";
import PrestationsTarifs from "./components/PrestationsTarifs/PrestationsTarifs";
import Présentation from "./components/Présentation/Présentation";
import Réalisation from "./components/Réalisation/Réalisation";
import Contact from "./components/Contact/Contact";





function App () {
 

  const isAuthenticated = localStorage.getItem('admin');
 


    return (
    
      
      <BrowserRouter>
      <ScrollToTop>
      <Route exact  path="/Onrec" component={Accueil}></Route>
      <Route exact  path="/PrestationsTarifs" component={PrestationsTarifs}></Route>
      <Route exact  path="/Présentation" component={Présentation}></Route>
      <Route exact  path="/Réalisation" component={Réalisation}></Route>
      <Route exact  path="/Contact" component={Contact}></Route>
      </ScrollToTop>
      
      </BrowserRouter>
     
    
    )
  }


export default App