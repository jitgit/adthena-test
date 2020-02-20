import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import dao from "@services/dao";

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

  const getTodo = e => {
    setUser(name);
  };
  console.log("data ", data);
  return (
    <div className="task" style={{ height: "100%" }}>
      {isLoading && <h3>Loading...</h3>}
      <div>
        <h1>TODO</h1>
        <div>
          <div>Enter user name:</div>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button onClick={getTodo}>Go</button>
        </div>
        {hasError.error && <h3>{`Error: ${hasError.message}`}</h3>}
        {data && data.user && data.user.id && (
          <div>
            <div>ID: {data.user.id}</div>
            <div>Name: {data.user.name}</div>
            <div>Email: {data.user.email}</div>
            <div>Website: {data.user.website}</div>
          </div>
        )}
        {data && data.todos && (
          <div>
            {data.todos.map(t => (
              <div key={t.id}>

               <img
                  src={t.completed ? "checked.png" : "unchecked.png"}
                  style={{ width: "20px", height: "20px" }}
                />

                <span>{t.title}</span>{" "}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

Todo.propTypes = {};

Todo.defaultProps = {};

export default Todo;
