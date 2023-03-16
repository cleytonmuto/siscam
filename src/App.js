import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './pages/Home';
import NavigationBar from './components/navbar/NavigationBar.js';
import Advogado from './pages/Advogado.js';
import Advogados from './pages/Advogados.js';
import Titulos from './pages/Titulos.js';
import Login from './pages/Login.js';
import NovoAdvogado from './pages/NovoAdvogado.js';
import NovoTitulo from './pages/NovoTitulo.js';
import Dash from './pages/Dash.js';

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
      </Routes>
    </Router>
  );
} 

export default App;
