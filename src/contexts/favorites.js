import { useContext, useState } from "react";
import { createContext } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = 'MyFavorites'

// CONTEXTO É UM STATES GLOBAL como o state normal porem em todas as rotas/pagias
export default function FavoritesProvider({children}){
    const [favorite, setfavorite] = useState([])

    return (
        <FavoritesContext.Provider
            value={{favorite, setfavorite}}
        >
            { children }
        </FavoritesContext.Provider>
    );
}

// hook personalizado
// hook deve ser atrelado a um evento / componente
export function useFavoriteContext(){
    const {favorite, setfavorite} = useContext(FavoritesContext)

    function addfavorite(newfavorite){
        // add novos items a lista

        // verificar se tem item repetido
        const repeatFavorite = favorite.some((item) => item.id === newfavorite.id)

        // nova lista recebe valor anterior
        let newList = [...favorite]

        // verificar se não tem repetido e adicionar a lista de favoritos
        if(!repeatFavorite){
            newList.push(newfavorite)
            return setfavorite(newList)
        }

        // se for repetido ele vai ser removido da lista
        newList = favorite.filter((fav) => fav.id !== newfavorite.id)
        return setfavorite(newList)
    }

    return {
        favorite, addfavorite
    }
}
