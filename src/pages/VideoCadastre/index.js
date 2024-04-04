import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Form from '../../components/Form';
import Header from '../../components/Header';
import styles from './VideoCadastre.module.css'

function VideoCadastre(){
    return(
        <>
            <Header/>
            <Container>
                <Form/>
            </Container>
            <Footer/>
        </>
    );
}

export default VideoCadastre;