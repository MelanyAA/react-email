import React, {Component} from "react";

import {Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import MenuVar from "./components/menuVar";
import NavBar from "./components/navBar";
import './plant.css';
import Inicio from "./components/inicio";
import Gmail from "./components/gmail";
import Orders from "./components/orders";
import Customers from "./components/customers";
import Products from "./components/products";
import Email from "./components/email";



class App extends Component {
  render() {
    return (
<div>
<NavBar/>
<MenuVar/>

<div className="container">
<Route path="/Navegacion" component={Inicio}/>
<Route path="/Email" component={Gmail}/>
<Route path="/Orders" component={Orders}/>
<Route path="/Products" component={Products}/>
<Route path="/Customers" component={Customers}/>

</div>
</div>
  
    );
  }
}

export default App;