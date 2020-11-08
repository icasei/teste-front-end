import React, { useState } from 'react';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = (props) =>{
    const [ term, setTerm ] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
        props.onSearchTermChange(event.target.value);
    }

    return (
        <>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </>
        // <div className="search-bar">
        //     <input value={term} onChange={onInputChange} />
        // </div>
    );

}

export default SearchBar;