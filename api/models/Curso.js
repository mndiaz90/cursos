const mongoose = require('mongoose')

const Curso = new mongoose.Schema({
    Nome: {
        type: String,
        required: true
    },
    ValorMensalidade: {
        type: Number,
        required: true
    },
    ValorMatricula: {
        type: Number,
        required: true
    },
    Periodo: {
        type: String,
        required: true
    },
    Duracao: {
        type: Number,
        required: true
    },
    Descricao: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

mongoose.model('curso', Curso)