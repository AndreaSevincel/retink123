import './App.css';
import TodoList from './TodoList'
import React, { useState} from 'react';
import logo from './logo.jpg';
import Notify from './Notify'
import button from './button'

function App() {
    const [business, businessname] = useState([])
    return (
        <>
        <img src={require('./logo.jpg')} />
        <TodoList />
        <Notify />
        </>
    )
}

export default App;