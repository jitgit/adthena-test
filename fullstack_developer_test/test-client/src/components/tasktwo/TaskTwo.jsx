import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import dao from "@services/dao";

const TaskTwo = ({ message }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    dao
      .GET(`/api/status?message=${message}`)
      .then(res => {
        setData(res.message);
        setHasError(false);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setHasError(true);
      });
  }, [message]);

  const exampleApiCall = `Hello ${data}! This message is generated using data from an example api call`;
  return (
    <div className="task">
      {hasError && <h3>Server error...</h3>}
      {isLoading && <h3>Loading...</h3>}
      {data && (
        <>
          <h1>Task Two</h1>
          <div className="content">
            <h4>Complete the following task:</h4>
            <p>
              The task is to create components to fetch public API data, combine
              it, apply filtering and visualise that data.
            </p>
            <p>
              Include unit tests. Jest is already configured for you in the
              skeleton project.
            </p>
            <p>{exampleApiCall}</p>
            Expected:
            <ol type="1">
              <li>
                <span>
                  {
                    "Create a new API Resource with a GET endpoint http://localhost:8080/data/todos/{username}."
                  }
                </span>
                <br />
                <span>
                  The endpoint should receive a username parameter. Hint:{" "}
                  <strong>PathParam</strong>
                </span>
                <br />
                <span>
                  Internally that should use data from the following API
                  endpoints:
                </span>
                <ol type="a">
                  <li>https://jsonplaceholder.typicode.com/users</li>
                  <li>https://jsonplaceholder.typicode.com/todos</li>
                </ol>
              </li>
              <li>
                Data fetching should be done with a re-usable data fetching
                hook.
              </li>
              <li>The user interface must accept a username as input.</li>
              <li>Display the username, email and website of the user.</li>
              <li>
                The user interface must handle the case where an error occurs
                and the case where the requested user is not found.
              </li>
              <li>Display a list of Todos for the user.</li>
              <li>
                Visualise the Todos in such a way that it is easy to distinguish
                between the complete and incomplete Todos.
              </li>
              <li>
                Give the user the option of a dark theme for the Todos user
                interface.
              </li>
            </ol>
            <strong>
              Feel free to use this component for your implementation.
            </strong>
          </div>
        </>
      )}
    </div>
  );
};

TaskTwo.propTypes = {
  message: PropTypes.string
};

TaskTwo.defaultProps = {
  message: "Adthena"
};

export default TaskTwo;
