import React, { useState, useEffect } from "react";
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import "./App.css";
import Todo from "./Todo";
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //when the app loads, we need to listen to the database and fetch new todos as they get added/removed

  useEffect(() => {
    //this code here... fires when the app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data().todo));
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault(); //will stop the refresh page

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
   // setTodos([...todos, input]);
    setInput(''); // clearing input after clicking add todo button
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <form>

      <FormControl>

  <InputLabel> Write a Todo</InputLabel>
  <Input value={input} onChange={(e) => setInput(e.target.value)} />
</FormControl>

      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
  Add TODO
</Button>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    
      </form>
      
     
    </div>
  );
}

export default App;
