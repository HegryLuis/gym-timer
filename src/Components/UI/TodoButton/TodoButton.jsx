import React from "react";
import classes from "./TodoButton.module.css";

const TodoButton = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.todoButton}>
            {children}
        </button>
    );
};

export default TodoButton;
