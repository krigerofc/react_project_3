import { Link } from 'react-router-dom';
import styles from './Card.module.css'

// rel='noreferrer noopener' é para evitar a injeção de alguns codigos no site
// em imagem temos o /mqdefault - é a resolulção, existe varios tipos
// sd, mq, default, max - mq é o midioum (320px de largura)
function Card({id}){
    return(
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                    alt='Capa'/>
            </Link>
        </section>
    )
}

export default Card;