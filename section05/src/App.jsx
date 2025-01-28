import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/footer'
import Button from './components/Button'

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3
  }

  return (
    <>
      <Button {...buttonProps}></Button>
      <Button text={"카페"}></Button>
      <Button text={"블로그"}>
        <Header></Header>
      </Button>
    </>
  )
}

export default App
