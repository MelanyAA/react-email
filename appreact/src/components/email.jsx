import React, { Component } from 'react';
import {Link,Route,Switch } from 'react-router-dom';
  import Vistadesms  from './vistademsm';
  import {GetDatos} from "./../datos";
class Email extends Component {
    state = { datos1: GetDatos() };
    render() { 
        return ( 

<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-0" >
 <div className="container">
 <div className="row">
   <lista>

   <h1>Mensajes={this.state.datos1.length}</h1>
           
           {this.state.datos1.map(datos1=>(
           <li  Key={datos1.id} className="list-group-item list-group-item-action">
           <img class="imgs" src={datos1.foto} alt="Generic placeholder image"></img>
           <Link to={`${'/Email/'}/${datos1.id}`}>
          
           {datos1.first_name} {datos1.last_name}   
           </Link>   
           <h7>{datos1.date}</h7>
           <br/>
           <small>{datos1.email}</small>   

           <div>

      
                 
</div>
                   </li>))}


   </lista>
  <div className="col-8 col-lg-8 px-0">

  <div className="contenedor2">
    <Switch>
      <Route path={`${/Email/}/:id(\\d+)`} component={Vistadesms} />
      <Route
        path={this.params}/>
    </Switch>

  </div>
  </div>
  </div>
  </div>
</main>
            



         );
    }
}
 
export default Email;



