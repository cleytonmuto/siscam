import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js';
import Navbar from './components/Navbar.js';
import Advogado from './pages/Advogado.js';
import Advogados from './pages/Advogados.js';
import Titulos from './pages/Titulos.js';
import Login from './pages/Login.js';
import NovoAdvogado from './pages/NovoAdvogado.js';
import NovoTitulo from './pages/NovoTitulo.js';
import Dash from './pages/Dash.js';
function App() {
  return ( 
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/advogados' element={<Advogados />}/>
        <Route path='/titulos' element={<Titulos />}/>
        <Route path='/sigin' element={<Login />}/>
        <Route path='/novoadvogado' element={<NovoAdvogado />}/>
        <Route path='/advogado/:id' element={<Advogado />}/>
        <Route path='/novotitulo' element={<NovoTitulo />}/>
        <Route path='/dash' element={<Dash />}/>
      </Routes>
    </Router>
  );
} 

export default App;
