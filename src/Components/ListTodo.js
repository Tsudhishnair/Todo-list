import React from "react";
import { connect } from "react-redux";
class ListTodo extends React.Component {
  render() {
    return (
      <div>
        Nothing to return as of now
        {/* {console.log(this.props.todolist.byIds)} */}
        {Object.entries(this.props.todolist.byIds).map((item, index) => {
          return <li key={index}>{item[1].content}</li>;
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
export default connect(
  mapStatetoProps,
  null
)(ListTodo);
