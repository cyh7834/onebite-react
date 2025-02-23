import "./App.css";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Notfound from "./pages/Notfound";
import { getEmotionImage } from "./util/get-emotion-image";

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
    <div>
      <img src={getEmotionImage(1)}></img>
      <img src={getEmotionImage(2)}></img>
      <img src={getEmotionImage(3)}></img>
      <img src={getEmotionImage(4)}></img>
      <img src={getEmotionImage(5)}></img>
    </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/new" element={<New></New>}></Route>
      <Route path="/diary/:id" element={<Diary></Diary>}></Route>
      <Route path="/*" element={<Notfound></Notfound>}></Route>
    </Routes>
    </>
    
  );
}

export default App;
