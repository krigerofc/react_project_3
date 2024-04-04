import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import VideoList from '../../components/VideoList';
import { useFavoriteContext } from '../../contexts/favorites';
import styles from './Favorites.module.css'

function Favorites(){
    const {favorite} = useFavoriteContext()

    return(
        <>
        <Header/>
        <Container>
            <section className={styles.favorites}>
                <h2>Meus favoritos</h2>
                {<VideoList videos={favorite} emptyHeading='Sem favoritos'/>}
            </section>
        </Container>
        <Footer/>
        </>
    );
}

export default Favorites;