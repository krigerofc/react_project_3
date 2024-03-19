import styles from './Card.module.css'

// rel='noreferrer noopener' é para evitar a injeção de alguns codigos no site
// em imagem temos o /mqdefault - é a resolulção, existe varios tipos
// sd, mq, default, max - mq é o midioum (320px de largura)
function Card({id}){
    return(
        <section className={styles.card}>
            <a 
                href={`https://www.youtube.com/watch?v=${id}`}
                rel='noreferrer noopener' 
                target='_blank'>
                <img 
                src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                 alt='Capa'/>
            </a>
        </section>
    )
}

export default Card;