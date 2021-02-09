import React from 'react';
import './search-box.style.css';


export const SearchBox = ({placeholder,handleChange}) =>  {
    return (
        <input
        type="search"
        className="search_box"
        placeholder={placeholder}
        onChange={handleChange}
      />
    )
}