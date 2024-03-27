//import './app.cs'
import { useState } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Category, {categorias, filtrerCategory} from "../../components/Category";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Rodape from "../../components/Rodape";

// NPM INSTALL REACT-ROUTER-DOM para criar rotas react
function Home() {
  function Get_name(event){
    console.log(event.target.value)
    set_nome(event.target.value)
  }

  // hook - Gancho -> useState é um hook de estado
  // fazemos a destroturação de um array passando nome da varivel(nome) e um segundo nome para a variavel
  // que vai ser usar para setar valores, ou sejá nome é como chamamos e set é para alterar
  const [nome, set_nome] = useState()

  return (
    <> 
      <Header/>
      <Banner image='wallpaper_pcgreen'  />
      <Container>

        <input
          type="text"
          placeholder="Nome"
          // se eu definir um valor pra esse elemento, ele não pode ser modificadoo mas se não definir ele pode
          onChange={Get_name}
        />
          <h2>{nome}</h2>
        {/* {categorias.map((category, index) => 
        <Category category={category}>
          {filtrerCategory(index).map((video) => <Card id={video.id} key={video.id}/>)}
        </Category>
        )} */}
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
