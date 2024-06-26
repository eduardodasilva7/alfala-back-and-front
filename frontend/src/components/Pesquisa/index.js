import Input from "../Input";
import styled from 'styled-components'
import { useState } from "react";
import { getLivros } from "../../services/livro.js";
import { useEffect } from "react";
import { postFavorito } from "../../services/favoritos.js";


const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 470px;
    width: 100%;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Resultado = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 20px;
   cursor: pointer;
   p {
       width: 200px;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`


function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [ livros , setLivros ] = useState([])

        useEffect(() => {
            fetchLivros()
        }, [])

        async function fetchLivros(){
            const livroAPI = await getLivros()
            setLivros(livroAPI)
        }

        async function insertFavorito(id){
            await postFavorito(id)
            alert(`Livro de id:${id} inserido!`)
        }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
            <Input placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)

                }}
            />
            {livrosPesquisados.map(livro => (
                <Resultado onClick={insertFavorito(livro.id)}>
                    <p>{livro.nome}</p>
                    <img src={livro.src} alt="img" />
                </Resultado> 
            ))}

        </PesquisaContainer>
    )
}


export default Pesquisa;


// Parei no video "como funciona estados em 1:34 quando iria começar a explicar sobre elementos de blur"