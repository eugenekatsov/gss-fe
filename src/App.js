import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PersonForm from './components/PersonForm';
import PersonPage from './components/PersonPage';
import { initialState, personReducer } from './reducers/PersonReducer';

const App = () => {
  const Home = () => (
    <div>
      <h1>Welcome to the Welcome Page!</h1>
      <PersonForm state={state} dispatch={dispatch} />
    </div>
  );
  
  const Person = () => (
    <div>
      <h1>Welcome to the Person Page!</h1>
      <PersonPage state={state} />
    </div>
  );

  const [state, dispatch] = useReducer(personReducer, initialState);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/person">Person</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" element={<Home state={state} dispatch={dispatch} />}/>
          <Route path="/person" element={<Person state={state} />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
