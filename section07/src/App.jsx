import { useState, useEffect, useRef } from 'react'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const isMount = useRef(false);

  // 1. 마운트 : 탄생. 처음 컴포넌트가 mount 됐을 때 한번만 실행됨
  useEffect(()=>{
    console.log("mount");
  }, []);

  // 2. 업데이터 : 변화, 리렌더링. 업데이트가 일어날 때 마다 계속 실행됨
  useEffect(()=>{
    if (!isMount.current) { // App 컴포넌트가 mount 될때가 아닌 정말 업데이트가 되었을 때만 실행됨
      isMount.current = true;

      return;
    }

    console.log("update");
  });

  // 3. 언마운트 : 죽음


  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <>
      <div className="App">
        <h1>Simple Counter</h1>
        <section>
          <Viewer count={count}></Viewer>
          {count % 2 === 0 ? <Even></Even> : null}
        </section>
        <section>
          <Controller onClickButton={onClickButton}></Controller>
        </section>
      </div>
    </>
  )
}

export default App
