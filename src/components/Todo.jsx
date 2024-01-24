import React from 'react'
import "./Todo.css"

function Todo({ data, onDelete }) {
    console.log('Todo Component ', data.title)

  return (
    <div className='todo'>
        <p>{data.title}</p>
        <button onClick={() => onDelete(data.id)}>Delete</button>
        <button>Edit</button>
    </div>
  )
}

export default Todo