import Container from '../../components/Container';
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import styles from './Search.module.css'
import videos from '../../json/videos.json'
import Video from '../../components/Video';

function Search(){
    return(
        <>
        <Header/>
        <Container>
            <section className={styles.search}>
                <h2>Pesquisar</h2>
                <Video videos={videos}/>
            </section>
        </Container>
        <Rodape/>
        </>
    );
}

export default Search;