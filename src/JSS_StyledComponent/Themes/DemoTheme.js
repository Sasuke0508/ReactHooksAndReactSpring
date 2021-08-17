import styled, { ThemeProvider } from "styled-components";

import React, { Component } from "react";

const configTheme = {
  darkTheme: {
    color: "orange",
    bgColor: "#000",
  },
  lightTheme: {
    color: "#fff",
    bgColor: "rgb(139, 90, 249)",
  },
};

export default class DemoTheme extends Component {
  state = {
    currentTheme: configTheme.lightTheme,
  };

  setTheme = (event) => {
    this.setState({
      currentTheme: configTheme[event.target.value],
    });
  };

  render() {
    const DivStyle = styled.div`
      color: ${(props) => props.theme.color};
      background-color: ${(props) => props.theme.bgColor};
      padding: 30px;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
    `;

    return (
      <ThemeProvider theme={this.state.currentTheme}>
        <select onChange={this.setTheme}>
          <option value="lightTheme">Light Theme</option>
          <option value="darkTheme">Dark Theme</option>
        </select>
        <DivStyle>Hello, I'm front-end developer</DivStyle>
      </ThemeProvider>
    );
  }
}
