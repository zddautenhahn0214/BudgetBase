import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles/MainMenuOptions.css'


// {/* component to contain the button choices for the main menu */}
	
	
const MainMenuOptions = () =>{
	
	//useHistory hook, for routing pages
	const history = useHistory();
	
	//Button Handlers for the different page options
	const handleClick = (path) => {
		console.log(path)
		history.push(path);
	}
	
  return (
	<div className="Options">
		{/* button options */}
		
		<button onClick={() => handleClick('CreateAccount')}>
			Add New Account
		</button>
	
		<button onClick={() => handleClick('CreateBudget')}>
			Create New Budget
		</button>
		
		<button onClick={() => handleClick('Charges')}>
			View Existing Account
		</button>
	
		
		<button onClick={() => handleClick('Budget')}>
			Select Existing Budget
		</button>
		
		
		
		<button onClick={() => handleClick('NewComponentTemplate')}>
			NewComponentTemplate
		</button>
		
	</div>
  );
}

export default MainMenuOptions;
