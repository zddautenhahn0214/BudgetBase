import React from 'react'
import './styles/MainMenu.css'
import MainMenuOptions from './MainMenuOptions'


// {/* comment */}



function MainMenu() {
  return (
    <div className="MainMenu">
		{/* application title */}
		<header className="MainMenu-header">
			<u>DcBudget Tracker</u>
			
			{/* button options */}
			<MainMenuOptions />
			
		</header>
		
		
    </div>
  );
}

export default MainMenu;
