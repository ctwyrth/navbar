import React, { useContext } from 'react';
import { NavbarContext } from '../App';

const Navbar = () => {
   const { username, setUsername } = useContext(NavbarContext);

   return (
      <nav className="navbar navbar-light bg-info">
         <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Navbar</span>
            <span className="mb-o">Welcome{ username !== '' ? ', ' + username + '!' : '!' }</span>
         </div>
      </nav>
   );
}

export default Navbar