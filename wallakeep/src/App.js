import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AdvertDetail from './components/AdvertDetail'
import AdvertsList from './components/AdvertsList'
import CreateAndUpdate from './components/CreateAndUpdate'
import Register from './components/Register'

import logo from './img/logo.svg';
import './css/App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         <p>hello!!!</p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main>
        
        <h3>Mensajes varios</h3>

        <Router>

          <Switch>
            <Route path='/adverts' component={AdvertsList} />
            <Route path='/detail/:id' component={AdvertDetail} />
            <Route path='/new' component={CreateAndUpdate} />
            <Route path='/modify:/id' component={CreateAndUpdate} />
            <Route component={Register} />

          </Switch>

        </Router>

      </main>

      <footer>

      </footer>

    </div>
  );
}

export default App;
