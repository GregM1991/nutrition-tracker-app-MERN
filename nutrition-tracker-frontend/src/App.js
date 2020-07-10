import React, { useState } from 'react';
import Avatar from 'react-avatar';
import SearchController from './components/SearchController';
import FoodList from './components/FoodList';

const App = () => {
  // const [update, setUpdate] = useState(false);

  return (
    <div className='ui segment'>
      <div className='ui two column very relaxed grid'>
        <div class='column'>
          <Avatar githubHandle='mikedane' size={150} round='20px' />
        </div>
        <div className='column'>
          <div className='column ui container' style={{ marginTop: '10px' }}>
            {/*   <SearchController onUpdate={setUpdate(!update)} /> */}
            <SearchController />
          </div>
        </div>
        {/* <FoodList compUpdate={update} /> */}
        <FoodList />
      </div>
    </div>
  );
};

export default App;
