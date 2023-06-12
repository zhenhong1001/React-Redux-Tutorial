import './App.css'
import {useState} from 'react'
import AnimalShow from './AnimalShow';

function getRandomAnimal(){
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
    // 1. learn on how to use the handle event for a button
    // const handleClick = () =>{
    //     console.log('Button was clicked')
    // };

    // return (
    //     <div>
    //         <button onClick={handleClick}>Add Animal</button>
    //     </div>
    // );

    // 2. this function is useful when the content in the function is just a little bit 
    // return (
    //     <div>
    //         <button onClick={() => console.log('Button was clicked')}>Add Animal</button>
    //     </div>
    // );

    // 3. Learn on how to use the useState function
    // const [count,setCount] = useState(0);

    // const handleClick = () => {
    //     setCount(count + 1);
    // };

    // return (
    //     <div>
    //         <button onClick={handleClick}>Add Animal</button>
    //         <div>Number of animals: {count}</div>
    //     </div>
    // );

    // 4. animals app
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index}/>
    })

    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    );
}

export default App;