import './App.css'
import { useState, useRef, useReducer, useCallback } from 'react'
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

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE': return [action.data, ...state]
    case 'UPDATE': return state.map((item) => item.id === action.targetId ? {...item, isDone: !item.isDone} : item);
    case 'DELETE': return state.filter((item) => item.id !== action.targetId);
    default: return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id : idRef.current++,
          isDone: false,
          content: content,
          date: new Date().getTime()
      }
    })
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId
    })
  }, []);

  // 마운트 될때만 생성되고 다시는 생성되지 않아서 최적화가 됨
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId
    })
  }, []);

  return (
    <>
    <div className='App'>
    <Header></Header>
      <Editor onCreate={onCreate}></Editor>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}></List>
    </div>
    </>
  )
}

export default App
