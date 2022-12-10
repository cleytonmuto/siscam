import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './Navbar.module.css'
function Navbar() { 
  return ( 
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid containernav">
          <a className="navbar-brand" href="" alt="" style={{ "fontFamily": 'Pacifico','color':"#000814", "marginRight": "2em", "marginLeft":"6em" }}>SISCAM</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item" >
                <Link className={'nav-link li'} aria-current="page"  style={{color:"#000"}} to="/sigin">Login</Link>
              </li>
              <li className="nav-item" >
                <Link className={'nav-link'} aria-current="page" style={{color:"#000"}} to="/home">Início</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="">Advogados</a> */}
                <Link className={'nav-link'} aria-current="page"  style={{color:"#000"}} to="/advogados">Advogados</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Títulos</a> */}
                <Link className={'nav-link'} aria-current="page"  style={{color:"#000"}} to="/titulos">Títulos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
export default Navbar;