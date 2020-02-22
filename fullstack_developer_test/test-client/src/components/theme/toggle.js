import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <div className="switch-container">
      <div className="switch switch-yellow" onClick={() => toggleTheme()}>
        <input
          type="radio"
          className="switch-input"
          name="theme"
          value="light"
          id="week"
          checked={isLight}
          readOnly={true}
        />
        <label className="switch-label switch-label-off">Light</label>
        <input
          type="radio"
          className="switch-input"
          name="theme"
          value="dark"
          id="dark"
          checked={!isLight}
          readOnly={true}
        />
        <label className="switch-label switch-label-on">Dark</label>
        <span className="switch-selection"></span>
      </div>
    </div>
  );
};

Toggle.propTypes = {
  toggleTheme: func.isRequired,
  theme: string.isRequired
};

export default Toggle;
