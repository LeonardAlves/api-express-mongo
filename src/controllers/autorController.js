import { autor } from '../models/Autor.js';

class AutorController {

    static listarAutores = async (req, res) => {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar autores` });
        }

    };

    static listarAutorPorId = async (req, res) => {
        try {
            const id = req.params.id;
            const listaEncontrado = await autor.findById(id);
            res.status(200).json(listaEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar autores` });
        }

    };

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: 'Autor cadastrado com sucesso', autor: novoAutor });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar autor` });
        }
    }

    static atualizarAutor = async (req, res) => {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'Autor atualizado com sucesso' });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao atualizar autores` });
        }

    };

    static excluirAutor = async (req, res) => {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: 'Autor excluído com sucesso' });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao excluir autores` });
        }

    };


};

export default AutorController;
