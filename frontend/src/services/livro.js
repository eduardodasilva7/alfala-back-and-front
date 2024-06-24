import axios from "axios"

const livroAPI = axios.create({baseURL: "http://localhost:8000/livros"})

async function getLivros() {
    const response = await livroAPI.get('/')
    return response.data
}

export {
    getLivros
}