const mongoose = require('mongoose');


// Esquema para Carrera
const CarreraSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true, // Equivalente a allowNull: false
    },
    descripcion: {
        type: String, // TEXT en Sequelize se mapea a String en Mongoose
    },
});

// Esquema para Materia
const MateriaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true, // Equivalente a allowNull: false
    },
    creditos: {
        type: Number, // INTEGER en Sequelize se mapea a Number en Mongoose
        required: true,
    },
    semestre: {
        type: Number,
        required: true,
    },
    carrera: {
        type: mongoose.Schema.Types.ObjectId, // Relación con Carrera
        ref: 'Carrera', // Modelo de referencia
        required: true,
    },
});

// Crear modelos
const Carrera = mongoose.model('Carrera', CarreraSchema);
const Materia = mongoose.model('Materia', MateriaSchema);

module.exports = { Carrera, Materia };