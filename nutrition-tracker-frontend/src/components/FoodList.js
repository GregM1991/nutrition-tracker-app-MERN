import React from 'react';
import axios from 'axios';

class FoodList extends React.Component {
  state = {
    foodArray: []
  };

  requestFoods = () => {
    axios
      .get('http://localhost:3000/api/users/5f07f5db82f62707f6aa0e17')
      .then((res) => {
        console.log(res);
        this.setState({ foodArray: res.data.trackedmeal });
      });
  };

  componentDidMount() {
    this.requestFoods();
  }

  render() {
    return (
      <div className='make-this-look-good'>
        {this.state.foodArray.map((food) => (
          <div>
            <li>Name: {food.name}</li>
            <li>Calories: {food.calories}</li>
            <li>Protein: {food.protein}</li>
            <li>Carbs: {food.carbs}</li>
            <li>Fat: {food.fat}</li>
          </div>
        ))}
      </div>
    );
  }
}

export default FoodList;
