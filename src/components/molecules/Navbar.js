import React from 'react';
import {Header, NavMenu, MenuBars} from "../styles/molecules";
import {Link} from 'react-scroll';
import Log from '../../images/logo-pink.svg';
import {useHistory} from 'react-router-dom';

const Navbar = ({toggle}) => {
    const history = useHistory();
    return (
        <Header className="nav__section">
            <MenuBars className="menu__bar" onClick={toggle}/>
            <a href="/"><img src={Log} alt="Logo makramiara"/></a>
            <NavMenu className="nav__menu">
                <ul className="navbar">
                    <li className="navbar__item">
                        <Link name="top" onClick={() => history.push("/makrama")} onMouseDown={() => window.scrollTo(0,0)}>
                            O makramie
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link onClick={() => history.push("/miarka")} onMouseDown={() => window.scrollTo(0,0)}>
                            Miarka
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link onClick={() => history.push("/tutoriale")} onMouseDown={() => window.scrollTo(0,0)}>
                            Tutorial
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link onClick={() => history.push("/galeria")} onMouseDown={() => window.scrollTo(0,0)}>
                            Galeria
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link onClick={() => history.push("/")} to='dog' smooth={true} duration={800}>
                            Psia telewizja
                        </Link>
                    </li>
                </ul>
            </NavMenu>
        </Header>
    );
};

export default Navbar;

