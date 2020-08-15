import React, { Fragment, useState } from "react";
import RestaurantForm from "./RestaurantForm";

const RestaurantList = (props) => {
  const [newRestaurantName, setNewRestaurantName] = useState('')
  const saveNewRestaurant = (restaurantName) => {
    setNewRestaurantName(restaurantName)
  }
 
  return (
    <Fragment>
      <div>
        <button data-test="addRestaurantButton">
          Add Restaurant
        </button>

        <RestaurantForm onSave={saveNewRestaurant}/>
        <p>{newRestaurantName}</p>
      </div>
    </Fragment>
  );  
};

export default RestaurantList;
