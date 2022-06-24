import React from 'react'
import { FaTimes } from 'react-icons/fa'
import UpdateTask from './UpdateTask'

const Task = (props) => {
    return (
        <div className='task'>
            <h2>
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => props.onDelete(props.task._id)} />
                {props.task.name}
            </h2>
            <h3>{props.task.description}
            </h3>
            <UpdateTask onClick={() => {
                console.log('test')
                props.onUpdate(props.task._id)
            }
            }/>
        </div>
    )
}

export default Task
