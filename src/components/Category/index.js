import styles from './Category.module.css';


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