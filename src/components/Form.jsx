import React, { useContext } from 'react';
import { NavbarContext } from '../App';

const Form = () => {
   const { username, setUsername } = useContext(NavbarContext);
   const handleOnChange = (e) => setUsername(e.target.value);

   return (
      <div className="col-4 my-3 ms-2">
         <form className="p-2">
            <label htmlFor="username" className="form-label">Name:</label>
            <input type="text" name="username" id="username" onChange={ handleOnChange } className="form-control" value={ username } />
         </form>
      </div>
   )
}

export default Form