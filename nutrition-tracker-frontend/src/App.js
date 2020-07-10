import React from 'react'
import Avatar from 'react-avatar';
import SearchController from './components/SearchController'

const App = () => {
  return (
    <div className="ui segment">
      <div className="ui two column very relaxed grid">
        <div class="column">
          <Avatar githubHandle="mikedane" size={150} round="20px" />
      </div>
      <div className="column">
          <div className="column ui container" style={{marginTop: '10px'}}>
            <SearchController/>
          </div>
      </div>
    </div>
    </div>
  )
}


export default App
