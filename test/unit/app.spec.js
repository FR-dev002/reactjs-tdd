import React from "react";
import { mount } from "enzyme";
import App from "./../../src/App";

describe("component App", () => {
  it("render Hello World", () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('.App').text()).toContain("Hello World");
  });
});
