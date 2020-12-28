import React, { useState } from 'react';
import PropTypes from "prop-types"

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState("") //Poner las comillas, para que no sea un undefined.

    const handleInputChange = (e) => {
    setInputValue(e.target.value) 
    } //La "e" es el evento almacenado (input).

    const handleSubmit = (e) => {
        e.preventDefault(); //Para que no se recargue la pág.

        if ( inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats] );
            setInputValue("");
        }
    }

    return (

        <form onSubmit={ handleSubmit }> {/* Si existe un agrupador (form), el div ya no es necesario. //Enter=Se activa. */}
            <input
            type="text"
            value={ inputValue }
            onChange={ handleInputChange } //Se activa el método al existir un cambio. 
            />
        </form>

    ) 

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
