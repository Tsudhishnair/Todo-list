import React from "react";
import AddTodo from "./Components/AddTodo";
import ListTodo from "./Components/ListTodo";
class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ padding: "2em", fontSize: "2em" }}>
          <strong>Welcome to the Todo list </strong>
        </div>
        <AddTodo />
        <ListTodo />
      </div>
    );
  }
}

export default App;
