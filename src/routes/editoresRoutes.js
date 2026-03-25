import express from 'express';
import editoraController from '../controllers/editoraController.js';

const routes = express.Router();

routes.get('/editoras', editoraController.listarEditoras);
routes.get('/editoras/:id', editoraController.listarEditoraPorId);
routes.post('/editoras', editoraController.cadastrarEditora);
routes.put('/editoras/:id', editoraController.atualizarEditora);
routes.delete('/editoras/:id', editoraController.excluirEditora);

export default routes;