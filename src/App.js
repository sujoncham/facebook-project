import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import About from './components/pages/About';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
