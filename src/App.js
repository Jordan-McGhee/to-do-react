import { useState } from 'react';
import './App.css';
import MainHeader from './components/Layout/MainHeader';
import ToDoList from './components/To-Do/ToDoList';

function App() {

  // NEEDS
  // STATE TO RENDER/HIDE FORM
  // CONDITIONAL RENDERING OF BUTTON/FORM
  // FORM IN A CARD


  // NICE TO HAVES
  // INPUT AND BUTTON COMPONENTS
  // FORM VALIDATION

  const DUMMY_LIST = [
    { id: "td1", description: "Make this app", completed: false},
    { id: "td2", description: "Make this app again", completed: true},
    { id: "td3", description: "Make this app again again", completed: false},
    { id: "td4", description: "Make this app again again again", completed: true},
    { id: "td5", description: "Make this app again again again again", completed: false}
]


  // USING STATE TO RENDER FORM INPUT FOR NEW TO-DO LIST ITEMS
  const [ addingItem, setAddingItem ] = useState(false)

  const addItemHandler = () => {
    setAddingItem(true)
  }

  const cancelAddItemHandler = () => {
    setAddingItem(false)
  }

  return (
    <div className='App'>
      <MainHeader />
      <ToDoList items = { DUMMY_LIST } />
      
      {/* button rendered if not currently adding item */}
      { !addingItem && <button onClick = { addItemHandler }>Add New Item</button> }

      {/* form to add new to-do item */}
      { addingItem && <button onClick = { cancelAddItemHandler }>Nevermind</button> }

    </div>
  );
}

export default App;
