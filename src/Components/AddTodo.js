import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addTodo, toggleModal } from "../Action/actions";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "../Styles/css/todo.css";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "xxx",
      description: "Detailed description of note here",
      date: "8/12/2019"
    };
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
  handleDateChange = date => {
    this.setState({
      ...this.state,
      date: new Date(date)
    });
  };
  handleDescriptionChange = content => {
    this.setState({
      ...this.state,
      description: content
    });
  };
  render() {
    return (
      <div>
        <div style={{ paddingBottom: "0.8em" }}>
          {" "}
          <TextField
            id="standard-basic"
            name="content"
            onChange={e => this.updateContent(e.target.value)}
            value={this.state.content}
            label="Todo Title"
            margin="normal"
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker"
              value={this.state.date}
              className="date-time-picker-style"
              onChange={this.handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div style={{ paddingBottom: "0.8em" }}>
          {" "}
          <TextField
            id="outlined-multiline-static"
            label="Detailed Note"
            multiline
            rows="4"
            fullWidth="true"
            defaultValue={this.state.description}
            onChange={this.handleDescriptionChange}
            variant="outlined"
          />
        </div>

        <div>
          <Button
            size="small"
            variant="contained"
            className="add-todo-button"
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
