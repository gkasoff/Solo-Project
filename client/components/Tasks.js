import React from 'react'
import Task from './Task'

const Tasks = (props) => {
    return (
        <div>
            {props.tasks.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    onDelete={props.onDelete}
                />
            ))}
        </div>
    )
}

export default Tasks
