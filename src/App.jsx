import { useState } from 'react'
import './App.css'
import TasksList from './components/TasksList'
import PostForm from './components/PostForm'

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, title: 'Моя задача', body: 'Сегодня 12:00'},
  ])

  const createTask = (newPost) => {
    setTasks([...tasks, newPost]);
  }

  const deleteTask = (task) => {
    setTasks(tasks.filter(t => t.id !== task.id));
  }

  return (
    <>
      <div className='App'>
        
        <PostForm create={createTask}></PostForm>
        <h1>Список задач</h1>
        {tasks.length !== 0
          ? <div className='task_position'>
            <TasksList remove={deleteTask} tasks={tasks}></TasksList>
          </div>
          : <div style={{textAlign: 'center'}}>Нет текущих задач</div>
        }        
        
      </div>
    </>
  )
}

export default App
