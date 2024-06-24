import fs from 'fs'

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
const novosDados = { id: '5', nome: 'Livro Festa Junina do Tiktok' }

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novosDados ]));
console.log(JSON.parse(fs.readFileSync("livros.json")));

