import {
    Link,
    Route,
    Switch
  } from 'react-router-dom';
  import Vistadesms  from './vistademsm';
import React, { Component } from 'react';
 import {GetDatos} from "./../datos";
class Gmail extends Component {
    state = { datos1: GetDatos()};


 handlermostrar = path => {
    const datos1 = this.state.datos1.find(c=>c.id==path.id);
     this.setState({datos1});
 
    
{/* <h1>Personas hola: {this.props.match.params.id}</h1> */}
 }
    render() {  
        return (
          
            <div>
               <table>
           <tr>
            <td> 
                <br/>
<br/>

   
<div className="container1">

<br/>


            <div className="list-group">
            <br/>
            
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

      
            </div>
      

            </div>
            </td>   
            <br/>
            <br/>
            <br/>
   <td>

<div className="contenedor2">
<Switch>
      <Route path={`${/Email/}/:id(\\d+)`} component={Vistadesms} />
      <Route
        path={this.params}
        
      />
    </Switch>
</div>

</td>

            </tr>
</table>
         
        </div>
   
            
        );
    }
}

export default Gmail;

