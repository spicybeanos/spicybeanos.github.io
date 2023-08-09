import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useState} from 'react';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
function TestFunction (){
    return (
        <>
          <h1>About</h1>
          <p>Hello there.<br />How do you do?</p>
        </>
    );
}

function MyButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
  
    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}

root.render(
  <React.StrictMode>
        <TestFunction />
        <MyButton />
        <MyButton />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
