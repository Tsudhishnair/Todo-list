import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../Action/actions";
import $ from "jquery";
import { nominalTypeHack } from "prop-types";
class ListTodo extends React.Component {
  handleClick = (event, id) => {
    $(event.target).css("text-decoration", "line-through");

    this.props.toggleTodoItem(id);
  };
  render() {
    return (
      <div>
        Nothing to return as of now
        {/* {console.log(this.props.todolist.byIds)} */}
        {Object.entries(this.props.todolist.byIds).map((item, index) => {
          // if (item[1].completed)
          //   return (
          //     <li key={index} style={{ textDecoration: "line-through " }}>
          //       {item[1].content}
          //     </li>
          //   );
          // else
          return (
            <li key={index} onClick={e => this.handleClick(e, index + 1)}>
              {item[1].content}
            </li>
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
export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(ListTodo);
