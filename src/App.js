import React, { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import ExerciseList from "./Components/ExerciseList";
import GymApp from "./Components/GymApp";

function App() {
    const defaultExercises = [
        { id: 0, exercise: "Push ups", duration: "2" },
        { id: 1, exercise: "Rest", duration: "3" },
        { id: 2, exercise: "Something else", duration: "3" },
    ];
    // const [todos, setTodos] = useState(defaultExercises);
    const [todoId, setTodoId] = useState(0);
    // const [restTime, setRestTime] = useState();
    const [todos, setTodos] = useState([]);
    const [restTime, setRestTime] = useState("");
    const [flag, setFlag] = useState(true);

    return (
        <div className="App">
            {flag ? (
                <TodoList
                    todos={todos}
                    onSetTodos={setTodos}
                    restTime={restTime}
                    onSetRest={setRestTime}
                    onSetFlag={setFlag}
                />
            ) : (
                <GymApp todos={todos} />
            )}
        </div>
    );
}

export default App;
