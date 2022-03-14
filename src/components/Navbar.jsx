import React, { useContext } from 'react';

const Navbar = ({NavbarContext}) => {
   const { username } = useContext(NavbarContext);

   return (
      <div className="container">
         <nav className="navbar navbar-light bg-light">
            <div class="container-fluid">
               <span class="navbar-brand mb-0 h1">Navbar</span>
               <span className="mb-o">{ username }</span>
            </div>
         </nav>
      </div>
   );
}

export default Navbar