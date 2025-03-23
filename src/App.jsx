import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx';
import Projects from './components/Projects/Projects.jsx';
import AboutMe from './components/About/AboutMe.jsx';
import './app.css'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/AboutMe' element={<AboutMe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;