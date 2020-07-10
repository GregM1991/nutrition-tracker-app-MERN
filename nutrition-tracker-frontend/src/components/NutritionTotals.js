import React from 'react';
import axios from 'axios';

class NutritionTotals extends React.Component {
  state = {
    foodArray: [],
    kj: 0,
    protein: 0,
    carbs: 0,
    fat: 0
  };

  requestFoods = () => {
    axios
      .get('http://localhost:3000/api/users/5f07f5db82f62707f6aa0e17')
      .then((res) => {
        console.log(res);
        // this.setState({ foodArray: res.data.trackedmeal });
        this.setState(
          { kj: (this.state.kj += res.data.trackedmeal[calories]) },
          { protein: (this.state.kj += res.data.trackedmeal[protein]) },
          { carbs: (this.state.kj += res.data.trackedmeal[carbs]) },
          { fat: (this.state.kj += res.data.trackedmeal[fat]) }
        );
      });
  };

  componentDidMount() {
    this.requestFoods();
  }

  render() {
    return (
      <div>
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

export default NutritionTotals;
