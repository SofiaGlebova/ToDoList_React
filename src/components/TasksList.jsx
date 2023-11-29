import TaskItem from "./TaskItem";

const TasksList = ({ tasks, remove }) => {

    return (
        <>        
            {tasks.map((task, index) => 
                <TaskItem remove={remove} number={index + 1} task={task} key={task.id} />
            )}
        </>
    )
}

export default TasksList;