import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './components/home/Home';
import NavigationBar from './components/navbar/NavigationBar.js';
import Advogado from './pages/Advogado.js';
import Advogados from './components/advogados/Advogados.js';
import Titulos from './components/titulos/Titulos.js';
import Login from './pages/Login.js';
import NovoAdvogado from './pages/NovoAdvogado.js';
import NovoTitulo from './pages/NovoTitulo.js';
import Dash from './pages/Dash.js';
import CadastroAdvogado from './components/cadastro-advogado/CadastroAdvogado';
import CadastroTitulo from './components/cadastro-titulo/CadastroTitulo';

const App = () => {
  return ( 
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/advogados' element={<Advogados />}/>
        <Route path='/titulos' element={<Titulos />}/>
        <Route path='/signin' element={<Login />}/>
        <Route path='/novoadvogado' element={<NovoAdvogado />}/>
        <Route path='/advogado/:id' element={<Advogado />}/>
        <Route path='/novotitulo' element={<NovoTitulo />}/>
        <Route path='/dash' element={<Dash />}/>
        <Route path='/cadastroAdvogado' element={<CadastroAdvogado />}/>
        <Route path='/cadastroTitulo' element={<CadastroTitulo />}/>
      </Routes>
    </Router>
  );
} 

export default App;
