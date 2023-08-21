import React from "react";
import TodoButton from "./UI/TodoButton/TodoButton";

// use onRemove instead of removeTodo & index
// on<Action> - style for function-props
const TodoItem = ({ exercise, duration, onRemove, index }) => {
    return (
        <>
            {exercise} : {duration} sec.
            <TodoButton
                onClick={() => onRemove(index)}
                style={{ width: "60px" }}
            >
                Remove
            </TodoButton>
        </>
    );
};

export default TodoItem;
