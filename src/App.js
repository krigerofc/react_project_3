//import './app.cs'
import Banner from "./components/Banner";
import Card from "./components/Card";
import Category from "./components/Category";
import Container from "./components/Container";
import Header from "./components/Header";
import Rodape from "./components/Rodape";

import videos from './json/videos.json'//importar json

const categorias = [
  'Geografia',
  'Como fazer e usar',
  'Astronomia e Geografia',
  'Climatologia, meteorologia, vegetação',
  'Geologia e Hidrografia',
]
function filtrerCategory(id){
  return videos.filter(video => video.category === categorias[id])
}


function App() {
  return (
    <> 
      <Header/>
      <Banner image='wallpaper_pcgreen'  />
      <Container>
        <Category category='Geografia'>
          {filtrerCategory(0).map((video) => <Card id={video.id} key={video.id}/>)}
        </Category>

        <Category category='Como fazer e usar'>
          {filtrerCategory(1).map((video) => <Card id={video.id} key={video.id}/>)}
        </Category>
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
