import { useState, useRef } from "react";
import MyButton from "./UI/button/button/MyButton";
import classes from '../components/UI/button/button/MyButton.module.css'

const ANIMATION_TIME = 500

const TaskItem = ({ task, remove }) => {
    const {title, body} = task
    const [isDelete, setIsDelete] = useState(false)
    const taskRef = useRef(null)


    const handleDelete = () => {
        setIsDelete(true)
        taskRef.current.style.setProperty('--animation-time', `${ANIMATION_TIME / 1000}s`)
        setTimeout(() => {
            remove(task)
        }, ANIMATION_TIME)
    }
    
    return (
        <div ref={taskRef} className={`task ${isDelete ? 'delete' : ''}`}>
            <div className="task__content">
                <div className="task__content-title">
                    <strong>{title}</strong>
                </div>
                <div className="task__content-body">{body}</div>
            </div>
            <div className="task_btn">
                <MyButton 
                    onClick={handleDelete} 
                    className={classes.deleteBtn}
                >
                </MyButton>
            </div>
        </div>
    )
}

export default TaskItem;