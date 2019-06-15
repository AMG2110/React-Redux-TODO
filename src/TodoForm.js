import React from "react";
import TextField from "@material-ui/core/TextField";
import * as actions from "./Redux/Actions";
import { connect } from "react-redux";

const TodoForm = props => {
  const { value, updateValue, saveTodo } = props;
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        saveTodo();
      }}
    >
      <TextField
        type="text"
        placeholder="Add todo..."
        margin="normal"
        onChange={e => updateValue(e.target.value)}
        value={value}
      />
    </form>
  );
};

const mapStateToProps = ({ todoReducer }) => {
  const { value } = todoReducer;
  return { value };
};

export default connect(
  mapStateToProps,
  actions
)(TodoForm);