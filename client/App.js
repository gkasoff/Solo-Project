import React, { useInsertionEffect } from "react";
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
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

    const addTask = async (task) => {
        console.log(task)
        const res = await fetch('http://localhost:5000/goals', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
    const data = await res.json();
    console.log('name of data', data.name)
    if (data.name === 'Select Option') {
        alert('Please Select a Learning Topic')
        return
    }
    setTasks([...tasks, data])
    }

    return (
        <div className='container'>
            <img src={greenPic} alt="" />
            <Header title="this is a title" />
            <AddTask onAdd={addTask}/>
            {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} /> ) : (<h1 id='noTaskText'>No tasks!</h1>)}
        </div>
    )
};

export default App;