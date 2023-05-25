import React from 'react';
import ReactDom from 'react-dom/client';

const el = document.getElementById('root');
const root = ReactDom.createRoot(el);

function App(){

    // 1. 
    // var message = "Bye there";
    // if(Math.random() > 0.5){
    //     message = "Hello there";
    // }

    // 2.
    // const date = new Date();
    // const time = date.toLocaleTimeString();

    // return <h1>{time}</h1>

    // 3.
    // const inputType = 'number';
    // const minValue = 5

    // return <input type={inputType} min={minValue}/>

    // 4.
    // list is array cover with curly bracket, style is object cover with curly bracket
    return <input type='number' min={5} list={[1,2,3]} style={{border: 'solid 1px red'}}/>
}

root.render(<App/>);