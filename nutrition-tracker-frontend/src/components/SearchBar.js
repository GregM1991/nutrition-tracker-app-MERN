import React from 'react';

const SearchBar = (props) => {
  return(
    <div className="ui segment">
      <div className="ui form">
        <div className="field">
          <label>Search a food</label>
          <input 
            type="text"
            value = {props.searchValue}
            onChange={(event) => {
              props.onSearchValueChange(event.target.value)
            }}  
            onKeyUp={(event) => {
              if (event.keyCode === 13) {
                props.onEnter()
              }
            }}
          />
        </div>
      </div>
    </div>

  )
}

export default SearchBar