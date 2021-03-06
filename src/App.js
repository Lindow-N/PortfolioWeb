import React from 'react';
import Accueil from "./components/Accueil/Accueil";
import {NavLink,BrowserRouter as Router,Route,Switch, BrowserRouter} from 'react-router-dom';
import Tinder from "../src/components/Tinder/index";
import ScrollToTop from './GoTop';
import Er from './components/404/App';
import Tesla from "./components/Tesla/App";
import Jap from "./components/Jap/index";


import AccueilO from "./components/Onrec/components/Accueil/Accueil";
import PrestationsTarifs from "./components/Onrec/components/PrestationsTarifs/PrestationsTarifs";
import Présentation from "./components/Onrec/components/Présentation/Présentation";
import Réalisation from "./components/Onrec/components/Réalisation/Réalisation";
import Contact from "./components/Onrec/components/Contact/Contact";

function App() {
  
return (

<div>
<Router basename={process.env.PUBLIC_URL}>


     <ScrollToTop>
      <Route exact  path="/" component={Accueil}></Route>
      <Route exact  path="/Onrec" component={AccueilO}></Route>
      <Route exact  path="/Tinder" component={Tinder}></Route> 
      <Route exact  path="/404" component={Er}></Route>
      <Route exact  path="/Tesla" component={Tesla}></Route>
      <Route exact  path="/Jap" component={Jap}></Route>


      
      <Route exact  path="/PrestationsTarifs" component={PrestationsTarifs}></Route>
      <Route exact  path="/Présentation" component={Présentation}></Route>
      <Route exact  path="/Réalisation" component={Réalisation}></Route>
      <Route exact  path="/Contact" component={Contact}></Route>
      
      </ScrollToTop>

</Router>
</div>
)}



export default App;