import { useState, useMemo, createContext } from 'react'
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import Form from './components/Form';

export const NavbarContext = createContext({
  username: '',
  setUsername: () => {}
});

function App() {
  const [username, setUsername] = useState('HI');
  const value = useMemo( () => ({ username, setUsername }), [username] );

  return (
    <div className="container">
      <NavbarContext.Provider value={ value }>
        <Wrapper>
          <Navbar />
            <FormWrapper>
              <Form />
            </FormWrapper>
        </Wrapper>
      </NavbarContext.Provider>
    </div>
  );
}

export default App;
