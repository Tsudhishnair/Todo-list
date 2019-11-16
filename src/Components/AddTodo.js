import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addTodo, toggleModal } from "../Action/actions";
import "../Styles/todo.css";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
  }
  updateContent = content => {
    this.setState({
      content: content
    });
  };
  handleTodoSubmit = () => {
    this.props.addTodoToStore(this.state.content);
    this.setState({
      content: ""
    });
  };
  render() {
    return (
      <div>
        <TextField
          id="title"
          name="content"
          onChange={e => this.updateContent(e.target.value)}
          value={this.state.content}
          label="Title"
          margin="normal"
        />
        <div>
          <Button
            size="small"
            variant="contained"
            onClick={this.handleTodoSubmit}
          >
            Add Todo
          </Button>
        </div>
      </div>
    );
  }
}
const mapsDispatchtoPros = dispatch => {
  return {
    addTodoToStore: data => {
      dispatch(addTodo(data));
      dispatch(toggleModal());
    }
  };
};

export default connect(null, mapsDispatchtoPros)(AddTodo);
