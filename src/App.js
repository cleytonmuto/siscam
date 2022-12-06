import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js';
import Navbar from './components/Navbar.js';
import Advogados from './pages/Advogados.js';
import Titulos from './pages/Titulos.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/advogados' element={<Advogados />}/>
        <Route path='/titulos' element={<Titulos />}/>
      </Routes>
    </Router>
  );
} 

export default App;
