import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "@components/theme/useDarkMode";
import { GlobalStyles } from "@components/theme/global";
import Toggle from "@components/theme/toggle";
import { lightTheme, darkTheme } from "@components/theme/theme";
const Nav = props => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <nav className="topnav">
        <NavLink activeClassName="active" exact to="/">
          Task One
        </NavLink>
        <NavLink activeClassName="active" to="/task-two">
          Task Two
        </NavLink>
        <NavLink activeClassName="active" to="/todo">
          TODO
        </NavLink>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </nav>
    </ThemeProvider>
  );
};

export default Nav;
