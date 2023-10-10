const express = require("express")
const path = require ("path")

const app = express()

const caminhoBase = path.join(__dirname, "templates")

app.get('/usuarios/:id', (requesicao, resposta) => {
    const id = requesicao.params.id

    console.log(`Acessando os dados do usuário ${id}`)

    resposta.sendFile(`${caminhoBase}/usuarios.html`)
})

app.get('/', (requicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})
