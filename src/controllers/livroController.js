import livro from '../models/Livro.js';
import { autor } from '../models/Autor.js';

class LivroController {

    static listarLivros = async (req, res) => {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar livros` });
        }

    };

    static listarLivroPorId = async (req, res) => {
        try {
            const id = req.params.id;
            const listaEncontrado = await livro.findById(id);
            res.status(200).json(listaEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar livros` });
        }

    };

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: 'Livro cadastrado com sucesso', livro: livroCompleto });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar livro` });
        }
    }

    static atualizarLivro = async (req, res) => {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'Livro atualizado com sucesso' });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao atualizar livros` });
        }

    };

    static excluirLivro = async (req, res) => {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: 'Livro excluído com sucesso' });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao excluir livros` });
        }

    };

    static async listarLivroPorEditora(req, res) {
        const editora = req.query.editora;
        try {
            const livrosEncontrados = await livro.find({ editora: editora });
            res.status(200).json(livrosEncontrados);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na busca` });
        }

    };

};

export default LivroController;
