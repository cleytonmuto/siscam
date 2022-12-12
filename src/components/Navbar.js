import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './Navbar.module.css';
import {FaHandsHelping} from 'react-icons/fa';
import {VscLaw,VscHome} from 'react-icons/vsc';
function Navbar() { 
  return ( 
      <nav className="navbar navbar-expand-lg" style={{"background-color":"#52b69a"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="" alt="" style={{ "fontFamily": 'Pacifico','color':"#fff", "marginRight": "2em", "marginLeft":"6em" }}><FaHandsHelping style={{"fontSize":"1.5em", "border":"0", "margin":"0"}}/>SISCAM</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item" >
                <Link className={'nav-link li'} aria-current="page"  style={{color:"#fff"}} to="/sigin">Login</Link>
              </li>
              <li className="nav-item" >
                <Link className={'nav-link'} aria-current="page" style={{color:"#fff"}} to="/home"><VscHome/>Início</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="">Advogados</a> */}
                <Link className={'nav-link'} aria-current="page"  style={{color:"#fff"}} to="/advogados"><VscLaw/>Advogados</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Títulos</a> */}
                <Link className={'nav-link'} aria-current="page"  style={{color:"#fff"}} to="/titulos">Títulos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
export default Navbar;