import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import * as actions from "./Redux/Actions";
import { connect } from "react-redux";

const TodoList = props => {
  const { todos, deleteTodo, toggleCompleted } = props;

  return (
    <List>
      {todos.map((todo, index) => {
        return (
          <ListItem
            dense
            button
            key={index}
            onClick={() => toggleCompleted(index)}
          >
            <Checkbox checked={todo.completed} />
            <ListItemText primary={todo.value} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => deleteTodo(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

const mapStateToProps = ({ todoReducer }) => {
  const { todos } = todoReducer;

  return { todos };
};

export default connect(
  mapStateToProps,
  actions
)(TodoList);
