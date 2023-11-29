import { useState } from 'react'
import MyInput from '../components/UI/button/input/MyInput'
import MyButton from '../components/UI/button/button/MyButton'

const PostForm = ({ create }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addTask = (e) => {
        e.preventDefault();
    
        const newTask = {
          id: Date.now(),
          title,
          body      
        }
        if (body || title) {
          create(newTask)
        }
        setTitle('')
        setBody('')
    }

    return (
        <form>
          <MyInput 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            type="text" 
            placeholder='Название задачи' />
          <MyInput 
            value={body} 
            onChange={e => setBody(e.target.value)} 
            type="text" 
            placeholder='Описание' />
          <MyButton onClick={addTask}>Добавить</MyButton>
        </form>
    )
}

export default PostForm;