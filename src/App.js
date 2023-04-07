
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/Ul/About';
import Some from './Components/Ul/Some';


function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="about">about</Link>
        </li>
        <li>
          <Link to="home">home</Link>
        </li>
        <li>
          <Link to="some">something</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/some" element={<Some />} />
      </Routes>
    </>
  );
}

export default App;
