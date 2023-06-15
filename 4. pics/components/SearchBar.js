import './SearchBar.css'
import { useState } from 'react'; 

function SearchBar({onSubmit}) {

    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        // the event.preventDefault will prevent the broswer to be refresh
        event.preventDefault();

        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input value={term} onChange={handleChange}/>
            </form>
        </div>
    );
}

export default SearchBar;