import React from 'react';
import SearchBar from './SearchBar';
import nutritionRequest from '../utils/utils';
import axios from 'axios';

// user ID: 5f07bb66ca715df136270367

class SearchController extends React.Component {
  state = {
    searchValue: ''
  };

  handleSubmit = () => {
    nutritionRequest(this.state.searchValue)
      .then((res) => {
        const data = {
          newMeal: {
            name: this.state.searchValue,
            calories: res.data.parsed[0].food.nutrients['ENERC_KCAL'],
            energy: 0,
            fat: res.data.parsed[0].food.nutrients['FAT'],
            carbs: res.data.parsed[0].food.nutrients['CHOCDF'],
            protein: res.data.parsed[0].food.nutrients['PROCNT']
          }
        };

        axios
          .put(
            'http://localhost:3000/api/users/5f07f5db82f62707f6aa0e17',
            JSON.stringify(data),
            {
              headers: { 'Content-Type': 'application/json' }
            }
          )
          .then(() => {
            console.log('ingredient has been posted');
          });
      })
      .catch((err) => {
        console.log('somethings said no');
        console.log(err);
      });
  };

  render() {
    return (
      <div className='search'>
        <SearchBar
          searchValue={this.state.searchValue}
          onSearchValueChange={(newSearchValue) => {
            this.setState({ searchValue: newSearchValue });
          }}
          onEnter={this.handleSubmit}
        />

        {this.state.currentNutritionData}
      </div>
    );
  }
}

export default SearchController;
