import './App.css'
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react'
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
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

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

  // 컴포넌트가 리렌더링되면 객체도 다시 생성되기 때문에 value props로 그냥 전달하면 객체가 계속해서 다시 생성됨
  // 그래서 useMemo를 사용하여 한번만 생성
  const memoizedDispatch = useMemo(() => {
    return {onCreate, onUpdate, onDelete}
  }, []);

  return (
    <>
    <div className='App'>
    <Header></Header>
    <TodoStateContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={memoizedDispatch}>
        <Editor></Editor>
        <List></List>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
    </div>
    </>
  )
}

export default App
