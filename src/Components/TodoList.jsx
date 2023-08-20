import React, { useState } from "react";
import TodoButton from "./UI/TodoButton/TodoButton";
import TodoInput from "./UI/TodoInput/TodoInput";
import TodoItem from "./TodoItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import TodoFillers from "./TodoFillers";

const TodoList = ({ todos, setTodos, restTime, setRestTime, setFlag }) => {
    const [newTodo, setNewTodo] = useState({ exercise: "", duration: "" });

    const addTodo = () => {
        if (newTodo.exercise.trim() !== "" && newTodo.duration !== "") {
            setTodos([...todos, newTodo]);
            setNewTodo({ exercise: "", duration: "" });
        }
    };

    const removeTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className="todo-block">
            <h1 className="todo-title">TODO List</h1>

            <TodoFillers
                newTodo={newTodo}
                setNewTodo={setNewTodo}
                restTime={restTime}
                setRestTime={setRestTime}
            />

            <TodoButton
                disabled={
                    newTodo.exercise.trim() === "" || newTodo.duration === ""
                }
                style={{ margin: "10px 0" }}
                onClick={addTodo}
            >
                Add
            </TodoButton>

            <ul>
                <TransitionGroup>
                    {todos.map((todo, index) => (
                        <CSSTransition
                            timeout={500}
                            classNames="list"
                            key={index}
                            className="todo-list"
                        >
                            <li>
                                <TodoItem
                                    exercise={todo.exercise}
                                    duration={todo.duration}
                                    removeTodo={removeTodo}
                                    index={index}
                                />
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ul>

            <TodoButton
                onClick={() => setFlag(false)}
                style={{ width: "160px", height: "30px" }}
                disabled={todos.length === 0 || restTime === ""}
            >
                Accept the training
            </TodoButton>
        </div>
    );
};

export default TodoList;
