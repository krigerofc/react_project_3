import { Link } from 'react-router-dom';
import styles from './Header.module.css'


function Header(){
    return(
        <header className={styles.header}>
            <Link to="/">
                <span>Terceirão</span>
            </Link>
            <nav>
                <Link to='/'>Sobre</Link>
                <Link to='/watch'>Assistir</Link>
            </nav>
        </header>
    )
}

export default Header;