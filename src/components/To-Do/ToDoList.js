import ToDoItem from "./ToDoItem"

import "./ToDoList.css"

const ToDoList = (props) => {
    
    return (
        <ul className="to-do-list">
            { props.items.map((item) => (
                <ToDoItem 
                key = { item.id }
                description = { item.description }
                completed = { item.completed }
            />
            ))}
        </ul>
    )
}

export default ToDoList