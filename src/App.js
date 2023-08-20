import React, { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import GymTimer from "./Components/GymTimer";

function App() {
    // const defaultExercises = [
    //     { exercise: "Push ups", duration: "3" },
    //     { exercise: "Abs", duration: "4" },
    //     { exercise: "Something else", duration: "5" },
    // ];
    const [todos, setTodos] = useState([]);
    const [restTime, setRestTime] = useState("");
    const [flag, setFlag] = useState(true);

    return (
        <div className="App">
            {flag ? (
                <TodoList
                    todos={todos}
                    setTodos={setTodos}
                    restTime={restTime}
                    setRestTime={setRestTime}
                    setFlag={setFlag}
                />
            ) : (
                <GymTimer todos={todos} restTime={restTime} />
            )}
        </div>
    );
}

export default App;
