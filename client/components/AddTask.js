import React from 'react'
import { useState } from 'react'

const AddTask = (props) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name) {
            alert('Please select a Learning Topic')
            return
        }
        if(!description) {
            alert('Please add a Description')
            return
        }
        props.onAdd( { name, description })
        setName('')
        setDescription('')
    }
    return (
        <form class='add-form' onSubmit={onSubmit}>
            <div class='form-control'>
                <label htmlFor="name">Learning Topic:</label>
                <select name='name' id='name' value={name} onChange={(e) => setName(e.target.value)}>
                    <option value='Select Option'>Select Option</option>
                    <option value='AJAX'>AJAX</option>
                    <option value='Algorithms'>Algorithms</option>
                    <option value='Data Structures'>Data Structures</option>
                    <option value='Frontend Fundamentals'>Frontend</option>
                    <option value='Mongoose'>Mongoose</option>
                    <option value='React'>React</option>
                    <option value='Recursion'>Recursion</option>
                    <option value='Redux'>Redux</option>
                </select>
            </div>
            <div className='form-control'>
                <label>Description:</label>
                <input
                    id='name'
                    type='text'
                    placeholder='Add Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
            </div>
            <input type='submit' value='Save Task' />
        </form>
    )
}

export default AddTask
