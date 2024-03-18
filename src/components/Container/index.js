import styles from './Container.module.css';

//Children é o filho do nosso cainter, é onde você recebe os parametros
//Tudo que for botado no children é renderizano no section
//js, videos, tag html, textos e etc

//toda vez que criar um container tudo que for passado para ele vai ser um filho dele
function Container({ children }){
    return(
        <section className={styles.container}>
            {children} 
        </section>
    );
}
// 
export default Container;