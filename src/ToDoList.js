import { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleInput(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(prevTasks => [...prevTasks, newTask])
            setNewTask("")
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)

    }
    return (
        <div className="to-do-list">
            <h1>TO DO LIST</h1>
            <div className="input-task">
                <input value={newTask} onChange={handleInput} type="text" placeholder="Enter a Task....." />
                <button className="add-btn" onClick={addTask}>ADD TASK</button>
            </div>
            <ul>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="del-btn" onClick={() => deleteTask(index)}>Delete</button>
                    </li>

                )}
            </ul>
        </div >
        );
}

export default ToDoList