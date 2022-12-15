import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import style from './Navbar.module.css';
// import {FaHandsHelping} from 'react-icons/fa';
// import {VscLaw,VscHome} from 'react-icons/vsc';
import Logo from './Logo.svg';
import Logo_titulos from './Logo_titulos.svg';
import Logo_advogados from './Logo_advogados.svg';
import Logo_home from './Logo_home.svg';
function Navbar() { 
  return ( 
      <nav className="navbar navbar-expand-lg" style={{"background-color":"#14213d"}}>
        <div className="container-fluid">
          <Link className={"navbar-brand "+style.styleTextBrand} to='/home' alt=""><img src={Logo} alt='logo' className={style.imgBrand}/>SISCAM</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={"collapse navbar-collapse " + style.divmain} id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item" >
                <Link className={'nav-link'} aria-current="page" to="/sigin">Login</Link>
              </li>
              <li className="nav-item" >
                <Link className={'nav-link'} aria-current="page"  to="/home"><img src={Logo_home} alt='logo' className={style.img} />Início</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="">Advogados</a> */}
                <Link className={'nav-link'} aria-current="page" to="/advogados"><img className={style.img}  src={Logo_advogados} alt='logo' />Advogados</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Títulos</a> */}
                <Link className={'nav-link'} aria-current="page" to="/titulos">
                  <img className={style.img} src={Logo_titulos} alt='logo' />
                  Títulos
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
export default Navbar;