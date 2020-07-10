import React from 'react'
import axios from 'axios'
import Avatar from 'react-avatar';
import SearchBar from './SearchBar'
import Request from './Request'

const App = () => {
    return (
     <>
     <div>
        <Avatar githubHandle="mikedane" size={150} round="20px" />
    </div>
    <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar />
    </div>
     </>
    )
}
  
export default App;

