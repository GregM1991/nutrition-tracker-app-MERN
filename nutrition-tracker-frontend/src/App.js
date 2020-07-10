import React, { useState } from "react";
import Avatar from "react-avatar";
import SearchController from "./components/SearchController";
import FoodList from "./components/FoodList";

const App = () => {
  // const [update, setUpdate] = useState(false);

  return (
    <div className="ui container">
      <Avatar githubHandle="mikedane" size={150} round="20px" />
      <SearchController />
      <FoodList />
    </div>
  );
};

export default App;
