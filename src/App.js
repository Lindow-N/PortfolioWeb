import React from 'react';
import Accueil from "./components/Accueil/Accueil";
import {NavLink,BrowserRouter,Route} from 'react-router-dom';
import Onrec from "../src/components/Onrec/index";
import Tinder from "../src/components/Tinder/index";
import ScrollToTop from './GoTop';
import Er from './components/404/App';
import Tesla from "./components/Tesla/App";



import AccueilO from "./components/Onrec/components/Accueil/Accueil";
import PrestationsTarifs from "./components/Onrec/components/PrestationsTarifs/PrestationsTarifs";
import Présentation from "./components/Onrec/components/Présentation/Présentation";
import Réalisation from "./components/Onrec/components/Réalisation/Réalisation";
import Contact from "./components/Onrec/components/Contact/Contact";

function App() {
  
return (


<BrowserRouter>
     <ScrollToTop>
      <Route  path="/" component={Accueil}></Route>
      <Route  path="/Onrec" component={AccueilO}></Route>
      <Route  path="/Tinder" component={Tinder}></Route> 
      <Route  path="/404" component={Er}></Route>
      <Route  path="/Tesla" component={Tesla}></Route>


      
      <Route  path="/PrestationsTarifs" component={PrestationsTarifs}></Route>
      <Route  path="/Présentation" component={Présentation}></Route>
      <Route  path="/Réalisation" component={Réalisation}></Route>
      <Route  path="/Contact" component={Contact}></Route>
      
      </ScrollToTop>
</BrowserRouter>



)}



export default App