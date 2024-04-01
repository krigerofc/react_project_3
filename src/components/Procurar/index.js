import React, { useState } from 'react';
import Video from '../Video';
import styles from './Procurar.module.css';

function filterVideo(videos, searchtext) {
    return videos.filter((video) => video.category.includes(searchtext) || video.title.includes(searchtext));
}

function Procurar({ videos }) {
    const [searchtext, setsearch] = useState(''); // Corrigido o nome da variável

    const foundvideo = filterVideo(videos, searchtext);

    return (
        <section className={styles.container}>
            <input
                type='search'
                placeholder='Pesquisar'
                value={searchtext}
                onChange={(event) => setsearch(event.target.value)} // Corrigido o uso do estado
            />
            <Video 
                videos={foundvideo}
                emptyHeading={`sem vídeos sobre ${searchtext}`} 
                />
        </section>
    );
}

export default Procurar;
