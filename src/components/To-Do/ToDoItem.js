import Card from "../UI/Card"
import "./ToDoItem.css"

const ToDoItem = (props) => {
    
    // const buttonClickHandler = () => {
    //     if (!itemCompleted) {
    //         itemCompleted = true
    //     } else {
    //         itemCompleted = false
    //     }
    // }

    return (
        <li>
            
            <Card className="to-do-item" style = {{margin: "1rem, 0rem"}}>
                <h3>{ props.description }</h3>
                
                <div className="buttons">
                    <button>{ props.completed ? "Completed" : "Mark Completed"}</button>
                    <button>Delete</button>
                </div>
            </Card>

        </li>
    )
} 

export default ToDoItem