import React, { useInsertionEffect } from "react";
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import { useState, useEffect } from 'react'
import "./styles/main.css"

const App = () => {
    const [tasks, setTasks] = useState([])
    console.log('TASKS HERE', tasks)
    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks()
    }, [])

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/goals')
        const data = await res.json()
        return data
    }
    //delete task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/goals/${id}`, {
            method: 'DELETE',
        })
        setTasks(tasks.filter((task) => task._id !== id))
    }

    const updateTask = async (id) => {
        await fetch(`http://localhost:5000/goals/${id}`, {
            method: 'PATCH',
        })
        alert('Task Complete!')
        console.log('id is', id)
        // setTasks(
        setTasks(tasks.filter((task) => task._id !== id))
        // fetchTasks();
    }

    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/goals', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        const data = await res.json();
        if (data.name === 'Select Option') {
            alert('Please Select a Learning Topic')
            return
        }
        setTasks([...tasks, data])
    }

    return (
        <div className='container'>
            <Header title="Hello User!" />
            <AddTask onAdd={addTask} />
            {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />) : (<h2 id='noTaskText'>NO TASKS!</h2>)}
        </div>
    )
};

export default App;