import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import dao from "@services/dao";

const TodoList = ({ todos }) => {
  if (todos && todos.length) {
    return (
      <div className="todo-list">
        {todos.map(t => (
          <div key={t.id} className="todo-item">
            <img
              className="todo-check"
              src={t.completed ? "checked.png" : "unchecked.png"}
            />
            <span className="todo-item-title">{t.title}</span>
          </div>
        ))}
      </div>
    );
  } else {
    return <div />;
  }
};

export default TodoList;
