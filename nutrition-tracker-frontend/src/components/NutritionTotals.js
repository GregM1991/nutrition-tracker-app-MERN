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

  tallyNutrients = () => {
    let totalNutritions = {
      cal: 0,
      protein: 0,
      fat: 0,
      carbs: 0
    };
    this.state.foodArray.map((meal) => {
      totalNutritions.cal += meal.calories;
      totalNutritions.protein += meal.protein;
      totalNutritions.fat += meal.fat;
      totalNutritions.carbs += meal.carbs;
    });

    this.setState({
      kj: Math.round(totalNutritions.cal),
      protein: Math.round(totalNutritions.protein),
      carbs: Math.round(totalNutritions.carbs),
      fat: Math.round(totalNutritions.fat)
    });
  };

  requestFoods = () => {
    axios
      .get('http://localhost:3000/api/users/5f07f5db82f62707f6aa0e17')
      .then((res) => {
        console.log(res);
        this.setState({ foodArray: res.data.trackedmeal });
      })
      .then((res) => {
        this.tallyNutrients();
      });
  };

  componentDidMount() {
    this.requestFoods();
  }

  render() {
    return (
      <div>
        <div>
          Total Nutritional Intake:
          <li>Calories: {this.state.kj}</li>
          <li>Carbs: {this.state.carbs}</li>
          <li>Fats: {this.state.fat}</li>
          <li>Protein: {this.state.protein}</li>
        </div>
      </div>
    );
  }
}

export default NutritionTotals;
