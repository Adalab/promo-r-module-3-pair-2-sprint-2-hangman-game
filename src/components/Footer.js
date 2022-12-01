import '../styles/Footer.scss';
import {NavLink} from 'react-router-dom';

function footer() {
    return (

        <footer class="footer">
            <nav>
                <ul>
                    <li class="footer__menu-item">
                        <NavLink to='/' className="footer__menu-link">A jugar</NavLink>
                    </li>
                    <li class="footer__menu-item">
                        <NavLink to='/instructions'  className="footer__menu-link active">¿Cómo se juega?</NavLink>

                    </li>
                    <li class="footer__menu-item">
                        <NavLink to='/options'  className="footer__menu-link">Más opciones</NavLink>
                       
                     
                    </li>
                </ul>
            </nav>
            <small class="footer__copy">© Adalab</small>
        </footer>
    )
}

export default footer;