import React from "react";
import TodoButton from "./UI/TodoButton/TodoButton";

const TodoItem = ({ todo, onRemove, index }) => {
    return (
        <>
            {todo.exercise} : {todo.duration} sec.
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
