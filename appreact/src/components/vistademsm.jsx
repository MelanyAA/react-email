
import React, { Component } from 'react';
import { GetDatos } from '../datos';
import Gmail from './gmail';
import { pathToFileURL } from 'url';
class Vistadesms extends Component {
    state = { 
        datos1: GetDatos()};
    
    render() { 
        
        return ( 
<div>
            <p>profesor no pudimos emplear find solo pudimos recartar el id del parem 
                y cargaslo de otra</p>
            <h2>Id:{this.props.match.params.id}</h2>

            </div>
 
        
        
           
             
        

         );
    }
}
 
export default Vistadesms;
