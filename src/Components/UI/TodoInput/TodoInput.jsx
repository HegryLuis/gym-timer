import React from "react";
import classes from "./TodoInput.module.css";

const TodoInput = ({ label, ...props }) => {
    return (
        <div className={classes.todoWrap}>
            <input className={classes.todoInput} {...props} />
            <label className={classes.label}>
                <span className={classes.label_span}>{label}</span>
            </label>
        </div>
    );
};

export default TodoInput;
