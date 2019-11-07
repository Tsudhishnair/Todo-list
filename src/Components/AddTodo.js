import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addTodo } from "../Action/actions";
import store from "../Store/store";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    margin: "10em"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  button: {
    margin: theme.spacing(1)
  }
}));

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
    // dispatch(addTodo(this.state.content));
    // this.props.addTodo(this.state.content);
    // store.dispatch(addTodo(this.state.content));
    store.subscribe(() => {
      console.log(store.getState());
    });
    this.setState({
      content: ""
    });
    // store.unsubscribe();
  };
  render() {
    // const { addTodoToStore } = this.props;
    return (
      <div className={useStyles.container}>
        <TextField
          id="content"
          name="content"
          className={useStyles.textField}
          onChange={e => this.updateContent(e.target.value)}
          value={this.state.content}
          label="Standard"
          margin="normal"
        />
        <Button
          variant="outlined"
          color="primary"
          className={useStyles.button}
          onClick={this.handleTodoSubmit}
        >
          Add Todo
        </Button>
      </div>
    );
  }
}
// const mapsDispatchToProps = dispatch => {
//   return {
//     addTodoToStore: data => dispatch(addTodo(data))
//   };
// };

export default connect(
  null,
  { addTodo }
)(AddTodo);
