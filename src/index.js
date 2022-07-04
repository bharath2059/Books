import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import Home from './components/Home/Home';

class Jay extends React.Component {
  render(){
    return(
      <>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </>
    )
  }
};

ReactDOM.render(<Jay/>,document.getElementById('root'))