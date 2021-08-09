import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles/Container.css';



// {/* comment */}
		
const NewComponentTemplate = () =>{
	
	//useHistory hook, for routing pages
	const history = useHistory();
	
	//Button Handlers for the different page options
	const handleClick = (path) => {
		console.log(path)
		history.push(path);
	}
	
  return (
	// {/* All components will be kept in a 'container' div, for general sytles/site theme	*/}
    <div className="Container">
		
		<header>"Test that CreateAccount loads"</header>
		
		<button onClick={() => handleClick('')}>
			Home
		</button>
		
	</div>
  );
}

export default NewComponentTemplate;
