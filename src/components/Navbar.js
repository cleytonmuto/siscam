import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './Navbar.module.css';
import {FaHandsHelping} from 'react-icons/fa';
import {VscLaw,VscHome} from 'react-icons/vsc';
import Logo from './Logo.svg';
import Logo_titulos from './Logo_titulos.svg';
import Logo_advogados from './Logo_advogados.svg';
import Logo_home from './Logo_home.svg';
function Navbar() { 
  return ( 
      <nav className="navbar navbar-expand-lg" style={{"background-color":"#52b69a"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="" alt="" style={{ "fontFamily": 'Pacifico','color':"#fff", "marginRight": "2em", "marginLeft":"6em" }}><img src={Logo} alt='logo' style={{ "border":"0", "margin-top":"-5px", "color":"#fff", width:"30px"}}/>SISCAM</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item" >
                <Link className={'nav-link li'} aria-current="page"  style={{color:"#fff"}} to="/sigin">Login</Link>
              </li>
              <li className="nav-item" >
                <Link className={'nav-link'} aria-current="page" style={{color:"#fff"}} to="/home"><img src={Logo_home} alt='logo' style={{ "border":"0", "margin-top":"-5px", "color":"#fff", width:"23px"}}/>Início</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="">Advogados</a> */}
                <Link className={'nav-link'} aria-current="page"  style={{color:"#fff"}} to="/advogados"><img src={Logo_advogados} alt='logo' style={{ "border":"0", "margin-top":"-5px", "color":"#fff", width:"23px"}}/>Advogados</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Títulos</a> */}
                <Link className={'nav-link'} aria-current="page"  style={{color:"#fff"}} to="/titulos"><img src={Logo_titulos} alt='logo' style={{ "border":"0", "margin-top":"-5px", "color":"#fff", width:"23px"}}/>Títulos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
export default Navbar;