import { useCallback, useState } from 'react';

import './App.css';

import MainHeader from './components/Layout/MainHeader';
import ToDoList from './components/To-Do/ToDoList';
import NewItemForm from './components/Form/NewItemForm';

function App() {

  // NEEDS
  // STATE TO RENDER/HIDE FORM --done
  // CONDITIONAL RENDERING OF BUTTON/FORM --done
  // FORM IN A CARD --done

  // NICE TO HAVES
  // INPUT AND BUTTON COMPONENTS

  // ISSUES
  // FORM ONLY WORKS ONCE - useEffect or useCallback maybe?
  // FORM CARD NEEDS DIFFERENT STYLING TO MATCH REST OF PAGE


  // DUMMY PLACEHOLDER LIST
  const DUMMY_LIST = [
    { id: "td1", description: "Make this app", completed: false},
    { id: "td2", description: "Make this app again", completed: true},
    { id: "td3", description: "Make this app again again", completed: false},
    { id: "td4", description: "Make this app again again again", completed: true},
    { id: "td5", description: "Make this app again again again again", completed: false}
]


  // USING STATE TO RENDER FORM INPUT FOR NEW TO-DO LIST ITEMS
  const [ showForm, setShowForm ] = useState(false)

  // STATE HOLDING LIST SO WHEN A NEW ITEM IS ADDED, COMPONENT RE-RENDERS
  const [ toDoList, setToDoList ] = useState(DUMMY_LIST)


  // FORM FUNCTIONS

  const showFormHandler = () => {
    // shows form on button click
    setShowForm(true)
  }

  const addItemHandler = useCallback((description) => {

    // accepts form input and appends to list — wrapped in useCallback to work multiple times
    // variable to keep track of what next id for newest item will be
    let toDoID = toDoList.length + 1

    // create new object to append to our item array
    const newToDoItem = {
      id: "td" + toDoID.toString(),
      description: description,
      completed: false
    }

    // update state list with previous list and added new item to it
    setToDoList((prevList) => {
      return [ ...prevList, newToDoItem ]
    })

    // test logs to make sure new item and id are updated correctly
    console.log(`Added new item: ${newToDoItem.id} ${newToDoItem.description}`)
    console.log(`New toDoID: ${toDoID}`)

    // function is dependent on what our current list state is, so added as dependency
  }, [ toDoList ])

  
  const cancelAddItemHandler = () => {
    
    // changes show form state and hides form
    setShowForm(false)
  }

  const changeCompletedHandler = (id) => {
    // updates the completed status of an item
    console.log("entered changeCompletedHandler")

    const itemToUpdate = toDoList.find(item => item.id === id)
    console.log(`Item to update: ${itemToUpdate.description} ${itemToUpdate.completed}`)

    console.log("Before: " + itemToUpdate.completed)
    itemToUpdate.completed = !itemToUpdate.completed
    console.log("After: " + itemToUpdate.completed)

    setToDoList((prevList) => {
      const newList = prevList.filter(item => item.id !== id)

      return [ ...newList, itemToUpdate ]
    })
  }

  const deleteItemHandler = (id) => {
    // deletes an item from our list of to-dos by ID
    console.log("entered deleteItemHandler")
    // updates our list state to a new list with that item filtered out
    setToDoList((prevList) => {
      console.log("Entered update state function")

      const newList = prevList.filter(item => item.id !== id)
      console.log(newList)
      return newList
    })
  }


  return (
    <div className='App'>
      <MainHeader />
      <ToDoList
        items = { toDoList }
        onDelete = { deleteItemHandler }
        onChange = { changeCompletedHandler }
      />
      
      {/* button rendered if not currently adding item */}
      { !showForm && <button onClick = { showFormHandler }>Add New Item</button> }

      {/* form to add new to-do item */}
      { showForm &&
        <NewItemForm 
          list = { toDoList }
          onAddItem = { addItemHandler }
          onCancel = { cancelAddItemHandler }
        />
      }

    </div>
  );
}

export default App;
