import Card from "../UI/Card"
import "./ToDoItem.css"

const ToDoItem = (props) => {

    return (
        <li>
            
            <Card className="to-do-item" style = {{margin: "1rem, 0rem"}}>
                <h3>{ props.description }</h3>
                
                <div className="buttons">
                    <button onClick= { props.onChange }>{ props.completed ? "Completed" : "Mark Completed"}</button>
                    <button onClick = { props.onDelete }>Delete</button>
                </div>
            </Card>

        </li>
    )
} 

export default ToDoItem