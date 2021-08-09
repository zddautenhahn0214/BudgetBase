import React from 'react'
//import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'

//import all compnents here that need to be linked to in order to create routes for them
import MainMenu from './Components/MainMenu';
import Budget from './Components/Budget';
import Charges from './Components/Charges';
import CreateAccount from './Components/CreateAccount';
import CreateBudget from './Components/CreateBudget';
import Deposits from './Components/Deposits';
import NewComponentTemplate from './Components/NewComponentTemplate';

//add routes here
function App() {
  return (
	<Router>
		<Route exact path='/' component={MainMenu} />
		<Route path='/Budget' component={Budget} />
		<Route path='/Charges' component={Charges} />
		<Route path='/CreateAccount' component={CreateAccount} />
		<Route path='/CreateBudget' component={CreateBudget} />
		<Route path='/Deposits' component={Deposits} />
		<Route path='/NewComponentTemplate' component={NewComponentTemplate} />
	</Router>
  );
}

export default App;


 // <div className="App">
      // <header className="App-header">
        // <img src={logo} className="App-logo" alt="logo" />
        // <p>
          // Edit <code>src/App.js</code> and save to reload.
        // </p>
        // <a
          // className="App-link"
          // href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        // >
          // Learn React
        // </a>
      // </header>
    // </div>