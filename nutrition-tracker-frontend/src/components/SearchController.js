import React from "react";
import SearchBar from "./SearchBar";
import nutritionRequest from "../utils/utils";

class SearchController extends React.Component {
  state = {
    searchValue: "",
    currentFood: "",
    currentNutritionData: "",
  };

  handleSubmit = () => {
    nutritionRequest(this.state.searchValue)
      .then((res) => {
        this.setState({
          currentNutritionData: JSON.stringify(
            res.data.parsed[0].food.nutrients
          ),
        });
      })
      .catch((err) => {
        console.log("somethings said no");
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <button>Add Food</button>
        <div className="search">
          <SearchBar
            searchValue={this.state.searchValue}
            onSearchValueChange={(newSearchValue) => {
              this.setState({ searchValue: newSearchValue });
            }}
            onEnter={this.handleSubmit}
          />

          {this.state.currentNutritionData}
        </div>
      </div>
    );
  }
}

export default SearchController;
