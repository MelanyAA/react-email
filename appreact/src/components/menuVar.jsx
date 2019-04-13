import React from "react";
import {Link} from 'react-router-dom';
const MenuVar = () => {
  return ( 


<nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link active" to="/Navegacion">
                <span data-feather="home" />
                Navegacion <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Email">
                <span data-feather="file" />
                Email
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Orders">
                <span data-feather="users" />
              Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Products">
                <span data-feather="shopping-cart" />
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Customers">
                <span data-feather="users" />
                Customers
              </Link>
            </li>
            
          </ul>

      
        </div>
      </nav>


   );
}
 
 
export default MenuVar ;