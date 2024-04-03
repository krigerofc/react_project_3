//import './app.cs'
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import Category, {categorias, filtrerCategory} from "../../components/Category";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Rodape from "../../components/Rodape";

// NPM INSTALL REACT-ROUTER-DOM para criar rotas react
function Home() {

  return (
    <> 
      <Header/>
      <Banner image='wallpaper_pcgreen'  />
      <Container>
        {categorias.map((category, index) => 
        <Category category={category}>
          <Carousel>
            {filtrerCategory(index).map((video) => (<Card id={video.id} key={video.id}/>))}
          </Carousel>
        </Category>
        )}
      </Container>
      <Rodape/>
    </>
  );
}

// aula 8 
// o react deixa todo a renderização da pagina IMUTAVEL
// Ele só vai fazer alteração caso aja um aviso que precisa ser mudado(hook) os hooks são comos os eventos do JS

//props ou Children:
// importamos o container e entre a tag de abertura e fechamento colocamos filhos, todas as tag vão ser filhos(children/props) do container

// aula 5
//tudo que é JAVASCRIPT BOTA EM {}
//refatorar codigo - Rescreever e reduzir linhas

// aula 7
// refatoração de codigo e evitando de repetir, arrumando mapeamento
export default Home;
