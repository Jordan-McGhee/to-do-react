import { useState } from "react"

import Card from "../UI/Card"
import "./NewItemForm.css"

const NewItemForm = (props) => {
    // NEEDS
    // INPUT FOR NEW ITEM  --done
    // CALLBACK FUNCTION FOR WHEN FORM IS SUBMITTED PASSED THROUGH PROPS --done
    // CANCEL AND SUBMIT BUTTONS --done
    
    // NICE TO HAVE
    // STATE OR REF TO TRACK USER INPUT --done
    // VALIDATION
    // ERROR HANDLING
    // PROMPT IF USER CLICKS OUT OR PRESSES CANCEL
    // CLEAR ENTERED VALUE OF FORM AFTER SUBMISSION --done

    // STATE AND FUNCTION TO TRACK USER INPUT AND IF INPUT WAS TOUCHED IN FORM
    const [ newItem, setNewItem ] = useState('')
    const [ isTouched, setIsTouched ] = useState(false)

    const enteredItemIsValid = newItem.trim() !== "" && newItem.length > 2 && isTouched
    const hasError = !enteredItemIsValid && isTouched

    const inputChangeHandler = event => {
        setNewItem(event.target.value)
    }

    const itemBlurHandler = event => {
        setIsTouched(true)
    }

    // PREVENTS FORM FROM SUBMITTING. ADDS NEW ITEM TO LIST
    const formSubmitHandler = (event) => {
        event.preventDefault()

        // append item to to-do list
        props.onAddItem(newItem)

        // reset input value & blur status
        setNewItem('')
        setIsTouched(false)
    }

    const inputClasses = !hasError ? "form-control" : "form-control invalid"

    return (
        <Card>
            <form onSubmit={ formSubmitHandler } className = "to-do-form">
                <div className= { inputClasses }>
                    <label htmlFor="new-item">Add New Item</label>
                    <input 
                        type = "text"
                        name = "new-item"
                        onChange = { inputChangeHandler }
                        onBlur = { itemBlurHandler }
                        value = { newItem }
                    />

                    { hasError && <p className="error-text">Please enter a valid To-Do item.</p>}
                </div>

                <div className="form-buttons">
                    <button type="button" onClick={ props.onCancel }>Cancel</button>
                    <button type="submit">Add Item</button>
                </div>
            </form>
        </Card>
    )
}

export default NewItemForm