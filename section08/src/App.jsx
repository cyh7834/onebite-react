import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "운동",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState([mockData]);

  return (
    <>
    <div className='App'>
    <Header></Header>
      <Editor></Editor>
      <List></List>
    </div>
    </>
  )
}

export default App
