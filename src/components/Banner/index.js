import styles from './Banner.module.css'

//PROPS OU PROPIEDADES
function Banner({ image }){
    return( 
        <div 
            className={styles.banner}
            style={{backgroundImage: `URL('/img/${image}.jpg')`}}
        >

        </div>
    )
}

export default Banner;