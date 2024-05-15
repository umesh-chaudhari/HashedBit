import React, { useState } from 'react'
import './Todo.css'
function Todo() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      alert('Please enter a task.')
      return
    }
    else {
      setTasks([...tasks, newTask.trim()])
      setNewTask('')
    }
  }

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }


  return (
    <div className='container'>
      <h1>Todo List</h1>
      <div className='input-container'>
        <input
          type="text"
          placeholder="Enter a new task"
          className='inputTask'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div>
        {tasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          <ul className='task-list'>
            {tasks.map((task, index) => (
              <li key={index}>
                {index + 1}. {task}
                <button onClick={() => handleDeleteTask(index)} className='delete-btn'>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Todo
