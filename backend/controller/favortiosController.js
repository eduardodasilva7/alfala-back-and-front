import { getTodosFavoritos, insereFavorito, deletaFavoritoPorId } from "../service/favoritoService.js";

export const getFavoritos = (req, res) => {
    try {
        const livros = getTodosFavoritos()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}
export const postFavorito = (req, res) => {
    try {
        const id = req.params.id
        insereFavorito(id)
        res.status(201)
        res.send("Livro inserido com sucesso")
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}
export const deletaFavorito = (req, res) =>{
    try {
        const id = req.params.id
        if(id && Number(id)){
            deletaFavoritoPorId(id)
            res.send("Favorito deletado com sucesso!")
        }else{
            res.status(422)
            res.send("Id inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}