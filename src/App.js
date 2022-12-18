import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js';
import Navbar from './components/Navbar.js';
import Advogados from './pages/Advogados.js';
import Titulos from './pages/Titulos.js';
import Login from './pages/Login.js';
import NovoAdvogado from './pages/NovoAdvogado.js';
function App() {
  return ( 
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route path='/advogados' element={<Advogados />}/>
        <Route path='/titulos' element={<Titulos />}/>
        <Route path='/sigin' element={<Login />}/>
        <Route path='/novoadvogado' element={<NovoAdvogado />}/>
      </Routes>
    </Router>
  );
} 

export default App;
