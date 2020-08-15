import React from "react";
import { mount } from "enzyme";
import RestaurantForm from "./../../../src/pages/RestaurantForm";

describe("component App", () => {
  it("Add new restaurant", () => {
    const saveRestaurant = jest.fn();
    const wrapper = mount(<RestaurantForm  onSave={saveRestaurant} />);
    
    wrapper
      .find('[data-test="newRestaurantName"]')
      .simulate('change', {target:  {value: 'LOREM'}});

    wrapper
      .find('[data-test="saveNewRestaurant"]')
      .simulate('click');

      expect(saveRestaurant).toHaveBeenCalledWith("LOREM");
  });
});
