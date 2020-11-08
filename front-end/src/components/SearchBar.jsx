import React, { useState } from 'react';

const SearchBar = (props) =>{
    const [ term, setTerm ] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
        props.onSearchTermChange(event.target.value);
    }

    return (
      <>
        <div className="search-bar">
          <input value={term} onChange={onInputChange} />
        </div>
      </>
    );

}

export default SearchBar;