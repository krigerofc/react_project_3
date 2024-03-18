//import './app.cs'
import Banner from "./components/Banner";
import Container from "./components/Container";
import Header from "./components/Header";
import Rodape from "./components/Rodape";


function App() {
  return (
    <> 
      <Header/>
      <Banner image='wallpaper_pcgreen'  />
      <Container>
        <h1>hello</h1>
        <p>OIIII</p>
      </Container>
      <Rodape/>
    </>
  );
}

//props ou Children:
// importamos o container e entre a tag de abertura e fechamento colocamos filhos, todas as tag vão ser filhos(children/props) do container
export default App;
