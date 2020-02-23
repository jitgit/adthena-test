import React from "react";
import { render, mount, shallow } from "enzyme";
import Todo from "../../../components/todo/Todo";

describe("Todo", () => {
  it("renders", () => {
    shallow(<Todo />);
  });

  it("displays empty todo", () => {
    const wrapper = mount(<Todo />);
    expect(wrapper.find("h2")).toHaveLength(1);
    expect(wrapper.find("input")).toHaveLength(1);
    expect(wrapper.find("button")).toHaveLength(1);
    expect(wrapper.find("TodoList")).toHaveLength(1);
  });
});
