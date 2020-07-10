import React from "react";
import axios from "axios";

class FoodList extends React.Component {
  state = {
    foodArray: [],
  };

  requestFoods = () => {
    axios
      .get("http://localhost:3000/api/users/5f07f5db82f62707f6aa0e17")
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
      <div className="ui grid">
        {this.state.foodArray.map((food) => (
          <div className="ui card">
            <div className="ui content header">
              <b>{food.name}</b>
            </div>
            <div className="ui content">
              <b>Calories:</b> {food.calories}
            </div>
            <div className="ui content">
              <b>Protein:</b> {food.protein}
            </div>
            <div className="ui content">
              <b>Carbs:</b> {food.carbs}
            </div>
            <div className="ui content">
              <b>Fat:</b> {food.fat}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default FoodList;
