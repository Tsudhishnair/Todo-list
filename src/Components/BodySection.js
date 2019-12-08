import React, { Component } from "react";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { toggleModal } from "../Action/actions";
import closeicon from "../images/close.svg";
import "../Styles/css/todo.css";
import ListTodo from "./ListTodo";
class BodySection extends Component {
  render() {
    return (
      <div>
        {}
        {this.props.addModalState ? (
          <Dialog
            open={true}
            maxWidth="sm"
            fullWidth="sm"
            onClose={this.props.toggleModal}
          >
            <DialogTitle id="form-dialog-title">
              Quick Add Task
              <span
                className="close-add-note-modal"
                onClick={this.props.toggleModal}
              >
                <img src={closeicon} alt="close-icon" />
              </span>
            </DialogTitle>
            <DialogContent>
              <AddTodo />
            </DialogContent>
          </Dialog>
        ) : (
          ""
        )}
        <div>
          {" "}
          <ListTodo />
        </div>
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
