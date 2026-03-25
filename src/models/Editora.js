import mongoose from "mongoose";

export const editoraSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    cidade: { type: String, },
    telefone: { type: String, }
}, { versionKey: false });

const editora = mongoose.model('editoras', editoraSchema);

export { editora };
export default editora;