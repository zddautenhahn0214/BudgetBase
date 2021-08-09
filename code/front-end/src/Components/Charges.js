import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles/Charges.css';
import './styles/Container.css';



// {/* comment */}
		
const Charges = () =>{
	
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
		<div className="Charges">
			
			<p>"Test that Charges Loads"</p>
			
			<button onClick={() => handleClick('')}>
				Home
			</button>
			
		</div>
	</div>
  );
}

export default Charges;
