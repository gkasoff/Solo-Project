import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = (props) => {
    return (
        <div className='task'>
            <h2 style={{ color: 'brown' }}>
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => props.onDelete(props.task._id)} />
                {props.task.name}
            </h2>
            <p>{props.task.description}</p>

        </div>
    )
}

export default Task
