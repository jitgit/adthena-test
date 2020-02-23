import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import dao from "@services/dao";
import TodoList from "./todo-list";

const Todo = ({}) => {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [hasError, setHasError] = useState({ error: false, message: "" });
  const [data, setData] = useState({ user: {}, todos: [] });
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (user != "") {
      setData({ user: {}, todos: [] });
      setIsLoading(true);
      dao
        .GET(`/api/data/todos/${user}`)
        .then(res => {
          setIsLoading(false);
          setHasError({ error: res.status !== 200, message: res.error || "" });
          if (res.status === 200) {
            setData(res);
          }
        })
        .catch(() => {
          setIsLoading(false);
          setHasError({ error: true, message: res.error || "" });
        });
    }
  }, [user]);

  const fetchTodo = e => {
  console.log('==================',name)
    setUser(name);
  };
  return (
    <div className="task">
      <h2>TODO</h2>
      <div style={{ display: "inline" }}>
        <div style={{ display: "inline" }}>User Name: </div>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button className="todo-submit" onClick={fetchTodo}>
          Go
        </button>
        {isLoading && <div className="loader"></div>}

        {data && data.user && data.user.id && (
          <div className="todo-user">
            <div>
              <b>ID:</b> {data.user.id}
            </div>
            <div>
              <b>Name:</b> {data.user.name}
            </div>
            <div>
              <b>Email:</b> {data.user.email}
            </div>
            <div>
              <b>Website:</b> {data.user.website}
            </div>
          </div>
        )}
      </div>
      {hasError.error && <h3>{`Error: ${hasError.message}`}</h3>}
      <TodoList todos={data.todos} />
    </div>
  );
};

Todo.propTypes = {};

Todo.defaultProps = {};

export default Todo;
