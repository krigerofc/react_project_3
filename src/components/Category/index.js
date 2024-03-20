import styles from './Category.module.css';
import videos from '../../json/videos.json'

export const categorias = [
    'Geografia',
    'Como fazer e usar',
    'Astronomia e Geografia',
    'Climatologia, meteorologia, vegetação',
    'Geologia e Hidrografia',
  ]

export function filtrerCategory(id){
    return videos.filter(video => video.category === categorias[id])
}
  
function Category({ category, children }){
    return(
    <section className={styles.category}>
        <h1>{category}</h1>
        <section>
            {children}
        </section>
    </section>
    );
}

export default Category;