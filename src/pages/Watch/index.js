import Container from '../../components/Container'
import Rodape from '../../components/Rodape'
import Header from '../../components/Header';
import styles from './Watch.module.css'

function Watch(){
    return(
        <>
            <Header/>
            <Container>
                <div className={styles.watch}>
                    <iframe width="854" height="480" src="https://www.youtube.com/embed/BXqUH86F-kA?si=YdaJafkaWIJ7VtY5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </Container>
            <Rodape/>
        </>
    );
}

export default Watch;