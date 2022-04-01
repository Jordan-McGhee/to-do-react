import { useState } from 'react';

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

  // shows form on button click
  const showFormHandler = () => {
    setShowForm(true)
  }

  // variable to keep track of id when adding new item
  

  // accepts form input and appends to list
  const addItemHandler = (description) => {

    let toDoID = DUMMY_LIST.length + 1

    // create new object
    const newToDoItem = {
      id: "td" + toDoID.toString(),
      description: description,
      completed: false
    }

    // push object to list
    DUMMY_LIST.push(newToDoItem)
    console.log(`Added new item: ${newToDoItem.id} ${newToDoItem.description}`)

    setToDoList(DUMMY_LIST)

    // increment toDoID
    toDoID++
    console.log(`New toDoID: ${toDoID}`)

    setShowForm(false)
  }

  // changes show form state and hides form
  const cancelAddItemHandler = () => {
    setShowForm(false)
  }

  return (
    <div className='App'>
      <MainHeader />
      <ToDoList items = { toDoList } />
      
      {/* button rendered if not currently adding item */}
      { !showForm && <button onClick = { showFormHandler }>Add New Item</button> }

      {/* form to add new to-do item */}
      { showForm &&
        <NewItemForm 
          onAddItem = { addItemHandler }
          onCancel = { cancelAddItemHandler }
        />
      }

    </div>
  );
}

export default App;
