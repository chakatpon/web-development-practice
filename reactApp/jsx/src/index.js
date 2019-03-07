// Import the React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = () => {

    const buttonText = { text: 'Click Me!!!'};
    const style = { backgroundColor: 'steelblue', color:'white'};
    const lebelText = 'Enter name:'

    return (
      <div>
          <label className='label' htmlFor='name'>
            {lebelText}
          </label>
          <input id='name' type='text'/>
          <button style={style}>
            {buttonText.text}
          </button>
      </div>
    );
};

// Take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);