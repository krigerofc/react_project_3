//import './app.cs'
import Banner from "./components/Banner";
import Card from "./components/Card";
import Container from "./components/Container";
import Header from "./components/Header";
import Rodape from "./components/Rodape";

import videos from './json/db.json'//importar json


function App() {
  return (
    <> 
      <Header/>
      <Banner image='wallpaper_pcgreen'  />
      <Container>

        <h1>Relacionados ao Curso</h1>
        <section className='cards'>
          {videos.map((video) => <Card id={video.id} key={video.id}/>)}
        </section>
      </Container>
      <Rodape/>
    </>
  );
}

//props ou Children:
// importamos o container e entre a tag de abertura e fechamento colocamos filhos, todas as tag vão ser filhos(children/props) do container

// aula 5
//tudo que é JAVASCRIPT BOTA EM {}
//refatorar codigo - Rescreever e reduzir linhas
export default App;
