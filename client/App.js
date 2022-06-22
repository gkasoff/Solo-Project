import React, { useInsertionEffect } from "react";
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState, useEffect } from 'react'
import "./styles/main.css"
import greenPic from "./assets/pic.jpg"

const App = () => {
    const [tasks, setTasks] = useState([])

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
        console.log(data)
        return data
    }
    //delete task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/goals/${id}`, {
            method: 'DELETE',
        })
        setTasks(tasks.filter((task) => task._id !== id))
    }
    return (
        <div className='container'>
            <img src={greenPic} alt="" />
            <Header title="this is a title" />
            <Tasks tasks={tasks} onDelete={deleteTask} />
        </div>
    )
};

export default App;