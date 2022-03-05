import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import CardContainer from './components/CardContainer';
function App() {

  return (
    <div>
      <Navbar />
      <Form />
      <CardContainer/>
    </div>
  );
}

ReactDOM.render(<App/>,document.getElementById('root'));
