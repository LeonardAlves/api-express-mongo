import express from 'express';
import livros from './livrosRoutes.js';
import autores from './autoresRoutes.js';
import editora from '../models/Editora.js';

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send('Curso de Express Api com MongoDB'));

    app.use(express.json(), livros, autores, editora);
};

export default routes;