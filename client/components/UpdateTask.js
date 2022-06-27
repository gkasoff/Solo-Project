import React from 'react'

function UpdateTask(props) {
  return (
    <div>
      <div id='alignRight'>
        <button
          id='updateBtn'
          onClick={props.onClick}>
          Mark Complete
        </button>
      </div>
    </div>
  )
}

export default UpdateTask
