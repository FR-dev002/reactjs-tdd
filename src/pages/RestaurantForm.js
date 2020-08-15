import React, { Fragment, useState } from "react";

const RestaurantForm = ({onSave, ...props}) => {

  const [restaurantName, setRestaurantName] = useState("");

  // TODO implementasikan react callback
  const saveNewRestaurant = () => {
    onSave(restaurantName)
  }

  return (
    <Fragment>

      {/* TODO refactoring component and implementation react Memo */}
      <input
        data-test="newRestaurantName"
        value={restaurantName}
        onChange={(e) => setRestaurantName(e.target.value)}
      />

      <button
        data-test="saveNewRestaurant"
        onClick={saveNewRestaurant}
      >
        save
      </button>
    </Fragment>
  );
};

export default RestaurantForm;
