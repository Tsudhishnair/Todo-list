import React, { Component } from "react";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { toggleModal } from "../Action/actions";

class BodySection extends Component {
  render() {
    return (
      <div>
        {}
        {this.props.addModalState ? (
          <Dialog open={true} onClose={this.props.toggleModal}>
            <DialogTitle id="form-dialog-title">Quick Add Task</DialogTitle>
            <DialogContent>
              <AddTodo />
            </DialogContent>
          </Dialog>
        ) : (
          console.log("false asda")
        )}{" "}
      </div>
    );
  }
}
const mapsStatetoProps = state => {
  return { addModalState: state.todoReducer.toggleModal };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => {
      dispatch(toggleModal());
    }
  };
};
export default connect(mapsStatetoProps, mapDispatchToProps)(BodySection);
