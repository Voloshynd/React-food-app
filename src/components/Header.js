import { Link } from "react-router-dom";
import { useEffect } from "react"; 
import M from 'materialize-css'; 

function Header() {
 

  useEffect(()=>{
    M.AutoInit();
  })

  return (
    <div className="navbar-fixed">
      <ul id="dropdown1" className="dropdown-content">
        <li>
          <a href="#!">EN</a>
        </li>
        <li className="divider"></li>
        <li>
          <a href="#!">PL</a>
        </li>
        <li className="divider"></li>
        <li>
          <a href="#!">UA</a>
        </li>
      </ul>
      <nav className="green darken-1">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Food app
          </Link>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li>
              <a className="dropdown-trigger" href="#!" data-target="dropdown1">
              <i className="large material-icons">language</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export { Header };
