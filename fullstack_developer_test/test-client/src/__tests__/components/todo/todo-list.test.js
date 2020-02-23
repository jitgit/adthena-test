import React from "react";
import { render, mount, shallow } from "enzyme";
import TodoList from "../../../components/todo/todo-list";

describe("TodoList", () => {
  it("renders", () => {
    shallow(<TodoList />);
  });
  it("displays empty todo list", () => {
    const wrapper = mount(<TodoList todos={[]} />);
    expect(wrapper.find("div")).toHaveLength(1);
  });

  it("displays todo list of length 1", () => {
    const todoList = [{id:'',completed:false,title:'do something that make a difference'}];
    const wrapper = mount(<TodoList todos={todoList} />);
    expect(wrapper.find("div")).toHaveLength(2);
    expect(wrapper.find("img")).toHaveLength(1);
    expect(wrapper.find("span")).toHaveLength(1);
  });
});
