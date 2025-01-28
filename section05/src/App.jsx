import './App.css'
import Bulb from './components/Bulb'
import Counter from './components/Counter'

// 1. 자신이 관리하는 state가 변경 되었을 때
// 2. 자신이 관리하는 props가 변경 되었을 때
// 3. 부모 컴포넌트가 리 렌더링되면 자식도 리 렌더링 됨

// 컴포넌트들의 state 들을 모두 부모에 넣는 것이 아니라 분리하는 것이 좋음
function App() {
  return (
    <>
    <Bulb></Bulb>
    <Counter></Counter>
    </>
  )
}

export default App
