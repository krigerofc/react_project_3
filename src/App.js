//import './app.cs'
import Banner from "./components/Banner";
import Card from "./components/Card";
import Category, {categorias, filtrerCategory} from "./components/Category";
import Container from "./components/Container";
import Header from "./components/Header";
import Rodape from "./components/Rodape";

function App() {
  return (
    <> 
      <Header/>
      <Banner image='wallpaper_pcgreen'  />
      <Container>
        {categorias.map((category, index) => 
        <Category category={category}>
          {filtrerCategory(index).map((video) => <Card id={video.id} key={video.id}/>)}
        </Category>
        )}
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

// aula 7
// refatoração de codigo e evitando de repetir, arrumando mapeamento
export default App;
