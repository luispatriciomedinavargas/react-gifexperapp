import React, { useState } from 'react'
import Prototype from "prop-types";
export const AddCategori = ({ setCategorias }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategorias(cats => [inputValue, ...cats,]);
            setInputValue('');
        }
    }

    return (

        <form onSubmit={handleSubmit}>
            <input type="text"
                value={inputValue}
                onChange={handleInputChange}>
            </input>


        </form>

    )
}

AddCategori.prototype = {
    setCategorias: Prototype.func.isRequired
}