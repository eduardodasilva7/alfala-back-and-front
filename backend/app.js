import express from 'express'
import routerLivros from './routes/livrosRouter.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

const port = 8000

// Montagem do roteador "livros"
app.use('/livros', routerLivros);

// Iniciar o servidor
app.listen(port, () =>{
    console.log(`Escutando na porta ${port}`)
})