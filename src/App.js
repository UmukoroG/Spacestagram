import react from 'react';
import './App.css';
import Form from './Components/Form';
import Register from './Components/Register';
import { Link} from "react-router-dom";
import Router from './Components/Router';
import Login from './Components/Login';



function App() {
  return (
    <div className="app">
      <Form/>
      <Register/>
      <Login/>
    </div>
  );
}

export default App;
