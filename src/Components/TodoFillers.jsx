import React from "react";
import TodoInput from "./UI/TodoInput/TodoInput";

const TodoFillers = ({ newTodo, onSetTodo, restTime, onSetRest }) => {
    return (
        <div className="todo-fillers">
            <TodoInput
                type="text"
                name="exercise"
                value={newTodo.exercise}
                onChange={(e) =>
                    onSetTodo({ ...newTodo, exercise: e.target.value })
                }
                label="New Exercise"
            />
            <TodoInput
                type="number"
                name="duration"
                min={1}
                value={newTodo.duration}
                onChange={(e) =>
                    onSetTodo({ ...newTodo, duration: e.target.value })
                }
                label="Duration"
            />
            <TodoInput
                type="number"
                id="rest"
                min={0}
                value={restTime}
                onChange={(e) => onSetRest(e.target.value)}
                label="Rest time"
            />
        </div>
    );
};

export default TodoFillers;
