import React from "react";
import TodoInput from "./UI/TodoInput/TodoInput";

const TodoFillers = ({ newTodo, onSetTodo, restTime, onSetRest }) => {
    return (
        <div className="todo-fillers">
            <TodoInput
                type="text"
                value={newTodo.exercise}
                onChange={(e) =>
                    onSetTodo({ ...newTodo, exercise: e.target.value })
                }
                // placeholder="Enter a new exercise..."
                label="hello"
            />
            <TodoInput
                type="number"
                min={1}
                value={newTodo.duration}
                onChange={(e) =>
                    onSetTodo({ ...newTodo, duration: e.target.value })
                }
                // placeholder="Enter a number of duration..."
                label="hello"
            />
            <TodoInput
                type="number"
                min={0}
                value={restTime}
                onChange={(e) => onSetRest(e.target.value)}
                placeholder="Enter rest time between exercises..."
                label="hello"
            />
        </div>
    );
};

export default TodoFillers;
