import React, { Component } from "react";
import AppHeader from "./AppHeader";
import BodySection from "./BodySection";
import ListTodo from "./ListTodo";
class MainPage extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <BodySection />
        <ListTodo />
      </div>
    );
  }
}
export default MainPage;
