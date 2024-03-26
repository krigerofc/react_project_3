import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import imgError from './errorimg.png'
import styles from './PageNotFound.module.css'

function PageNotFound(){
    return(
        <>
            <Header/>
            <section className={styles.container}>
                <h2>Ops! Contéudo não localizado</h2>
                <img src={imgError} alt='Logo de pagina não encontrada'/>
            </section>
            <Rodape/>
        </>
    );
}

export default PageNotFound;