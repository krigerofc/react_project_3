import styles from './Header.module.css'


function Header(){
    return(
        <header className={styles.header}>
            <span>Terceirão</span>
            <nav>
                <a hrf='###'>Sobre</a>
                <a hrf='###'>Fotos</a>
            </nav>
        </header>
    )
}

export default Header;