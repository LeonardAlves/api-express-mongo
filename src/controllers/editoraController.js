import { editora } from '../models/Editora.js';

class EditoraController {

    static listarEditoras = async (req, res) => {
        try {
            const listaEditoras = await editora.find({});
            res.status(200).json(listaEditoras);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar editoras` });
        }

    };

    static listarEditoraPorId = async (req, res) => {
        try {
            const id = req.params.id;
            const listaEncontrado = await editora.findById(id);
            res.status(200).json(listaEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar editoras` });
        }

    };

    static async cadastrarEditora(req, res) {
        try {
            const novaEditora = await editora.create(req.body);
            res.status(201).json({ message: 'Editora cadastrada com sucesso', editora: novaEditora });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar editora` });
        }
    }

    static atualizarEditora = async (req, res) => {
        try {
            const id = req.params.id;
            await editora.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'Editora atualizada com sucesso' });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao atualizar editoras` });
        }

    };

    static excluirEditora = async (req, res) => {
        try {
            const id = req.params.id;
            await editora.findByIdAndDelete(id);
            res.status(200).json({ message: 'Editora excluída com sucesso' });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao excluir editoras` });
        }

    };


};

export default EditoraController;
