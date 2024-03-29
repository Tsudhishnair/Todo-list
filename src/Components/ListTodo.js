import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../Action/actions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
class ListTodo extends React.Component {
  handleClick = (event, id) => {
    this.props.toggleTodoItem(id);
  };

  render() {
    return (
      <div>
        {Object.entries(this.props.todolist.byIds).length == 0
          ? "Nothing to return as of now"
          : Object.entries(this.props.todolist.byIds).map((item, index) => {
              return item[1].completed ? (
                <Card>
                  <CardContent>
                    <li
                      key={index}
                      onClick={e => this.handleClick(e, index + 1)}
                      style={{ textDecoration: "line-through" }}
                    >
                      {item[1].content}
                    </li>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent>
                    <li
                      key={index}
                      onClick={e => this.handleClick(e, index + 1)}
                    >
                      {item[1].content}
                    </li>
                  </CardContent>
                </Card>
              );
            })}
      </div>
    );
  }
}
const mapStatetoProps = state => {
  return {
    todolist: state.todoReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleTodoItem: id => {
      dispatch(toggleTodo(id));
    }
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(ListTodo);
