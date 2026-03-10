import express from 'express';
import conectaNaDataBase from './config/dbConnect.js';
import livro from './models/Livro.js';

const conexao = await conectaNaDataBase();

conexao.on('error', (erro) => {
    console.error('Erro de conexão com o banco de dados:', erro);
});

conexao.once('open', () => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
});

const app = express();

app.use(express.json());

// const livros = [
//    { id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien' },
//    { id: 2, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling' },
//    { id: 3, titulo: 'O Código Da Vinci', autor: 'Dan Brown' }
// ];

// function BuscarLivroPorId(id) {
//    return livros.findIndex(livro => {
//        return livro.id === Number(id);
//    });
// }

app.get('/', (req, res) => {
    res.status(200).send('Curso de Express Api com MongoDB');
});

app.get('/livros', async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
    const index = BuscarLivroPorId(req.params.id);
    res.status(200).json(livros[index]);
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro adicionado com sucesso');
});

app.put('/livros/:id', (req, res) => {
    const index = BuscarLivroPorId(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).send('Livro atualizado com sucesso');
});

app.delete('/livros/:id', (req, res) => {
    const index = BuscarLivroPorId(req.params.id);
    livros.splice(index, 1);
    res.status(200).send('Livro removido com sucesso');
});



export default app;