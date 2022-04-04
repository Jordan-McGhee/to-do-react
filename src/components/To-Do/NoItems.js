import Card from "../UI/Card";
import "./NoItems.css"

const NoItems = () => {
    return (
        <Card className = "no-item-card">
            <h3>You have no To-Do Items! Make one?</h3>
        </Card>
    )
}

export default NoItems