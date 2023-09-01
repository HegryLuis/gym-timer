import React, { useState } from "react";
import TodoButton from "./UI/TodoButton/TodoButton";
import TodoItem from "./TodoItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import TodoFillers from "./TodoFillers";

const TodoList = ({ todos, onSetTodos, restTime, onSetRest, onSetFlag }) => {
    const [newTodo, setNewTodo] = useState({
        id: "",
        exercise: "",
        duration: "",
    });

    const handleAddTodo = () => {
        if (newTodo.exercise.trim() !== "" && newTodo.duration !== "") {
            const newId = todos.length;
            const newTodoWithId = { ...newTodo, id: newId };
            onSetTodos([...todos, newTodoWithId]);
            setNewTodo({ exercise: "", duration: "" });
        }
    };

    const handleRemoveTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        onSetTodos(updatedTodos);
    };

    const addRestBetweenTodos = () => {
        let restId = todos.length;
        const newTodos = todos.flatMap((todo, index) => {
            return index === todos.length - 1
                ? todo
                : [
                      todo,
                      { id: restId++, exercise: "Rest", duration: restTime },
                  ];
        });

        onSetTodos(newTodos);
    };

    return (
        <div className="todo-block">
            <h1 className="todo-title">GYM TIMER</h1>

            <TodoFillers
                newTodo={newTodo}
                onSetTodo={setNewTodo}
                restTime={restTime}
                onSetRest={onSetRest}
            />

            <TodoButton
                disabled={
                    newTodo.exercise.trim() === "" || newTodo.duration === ""
                }
                style={{ margin: "10px 0" }}
                onClick={handleAddTodo}
            >
                Add
            </TodoButton>

            <ul>
                <TransitionGroup className="todo-ul">
                    {todos.map((todo, index) => (
                        <CSSTransition
                            timeout={500}
                            classNames="list"
                            key={index}
                            className="todo-list"
                        >
                            <li>
                                <TodoItem
                                    todo={todo}
                                    onRemove={handleRemoveTodo}
                                    index={index}
                                />
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ul>

            <TodoButton
                onClick={() => {
                    addRestBetweenTodos();
                    onSetFlag(false);
                }}
                style={{ width: "160px", height: "30px" }}
                disabled={todos.length === 0 || restTime === ""}
            >
                Accept the training
            </TodoButton>
        </div>
    );
};

export default TodoList;
