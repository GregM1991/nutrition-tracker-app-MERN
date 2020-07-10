import React from 'react'
import Request from './Request'

const App = () => {
  return (
      <div>
          <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar />
          </div>
          <h1>Tired of your dad Bod?</h1>
          <h3>NutriTrack Now!</h3>
          <Request />
      </div>
  )
}
