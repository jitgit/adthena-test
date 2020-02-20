import "../styles/theme-toggle.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Nav from "@components/Nav";
import TaskOne from "@components/taskone/TaskOne";
import TaskTwo from "@components/tasktwo/TaskTwo";
import Todo from "@components/todo/Todo";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={TaskOne} />
        <Route path="/task-two" component={TaskTwo} />
        <Route path="/todo" component={Todo} />
      </Switch>
    </Router>
  );
};

export default App;
