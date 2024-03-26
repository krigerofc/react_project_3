import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import PageNotFound from "./pages/PageNotFound";

function AppRoutes(){
    return(
        // navegador entre rotas
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={ <Home/> }></Route>
                {/* para criar rota dinamica basta utilizar : e o parametro. ':id'  */}
                <Route path="/watch/:id" element={ <Watch/> }></Route>
                <Route path="*" element={ <PageNotFound/> }></Route>
                {/* * é o seletor global, se eu acessar alguma outra rota diferente vai chamar a pagina erro */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;