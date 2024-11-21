import { useState } from "react";
import './SearchBar.css'

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term)
    }
    
    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    return (
        <div className="search-bar">
            <label>Enter Search Term</label>
            <form onSubmit={handleFormSubmit}>
                <input onChange={handleChange} value={term} />
            </form>
        </div>
    )
}

export default SearchBar