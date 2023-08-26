import React, { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import GymTimer from "./Components/GymTimer";
import SVGTimer from "./SVGTimer";
import ExerciseList from "./Components/ExerciseList";

function App() {
    const defaultExercises = [
        { exercise: "Push ups", duration: "20" },
        { exercise: "Abs", duration: "4" },
        { exercise: "Something else", duration: "5" },
    ];
    const [todos, setTodos] = useState(defaultExercises);
    const [restTime, setRestTime] = useState(2);
    // const [todos, setTodos] = useState([]);
    // const [restTime, setRestTime] = useState("");
    const [flag, setFlag] = useState(true);

    return (
        <div className="App">
            <GymTimer todos={todos} restTime={restTime} />
            <ExerciseList todos={todos} />
            {/* {flag ? (
                <TodoList
                    todos={todos}
                    onSetTodos={setTodos}
                    restTime={restTime}
                    onSetRest={setRestTime}
                    onSetFlag={setFlag}
                />
            ) : (
                <GymTimer todos={todos} restTime={restTime} />
            )} */}
        </div>
    );
}

export default App;
