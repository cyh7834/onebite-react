import { useState } from 'react'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <>
      <div className="App">
        <h1>Simple Counter</h1>
        <section>
          <Viewer count={count}></Viewer>
        </section>
        <section>
          <Controller onClickButton={onClickButton}></Controller>
        </section>
      </div>
    </>
  )
}

export default App
