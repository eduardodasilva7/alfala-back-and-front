
import { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivroPorId } from '../service/livroService.js'

export const getLivros = (req, res) => {
    try {
        const livros = getTodosLivros()
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
 };

 export const getLivro = (req, res) =>{
    try {
        const id = req.params.id
        const livro = getLivroPorId(id)
        res.send(livro)
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
 }

 export const postLivro = (req, res) => {
    try {
        const livroNovo = req.body
        if(req.body.nome) {
            insereLivro(livroNovo)
            res.status(201)
            res.send("Livro inserido com sucesso")
        } else {
            res.status(422)
            res.send("O campo nome é obrigatório")
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
};

export const patchLivro = (req, res) =>{
    try {
        const id = req.params.id
        const body = req.body
        modificaLivro(body, id)
        res.send("Livro modificado com sucesso.")
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const deletaLivro = (req, res) =>{
    try {
        const id = req.params.id
        deletaLivroPorId(id)
        res.send("Livro deletado com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}