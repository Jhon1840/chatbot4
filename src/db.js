const { Sequelize, DataTypes } = require('sequelize');

// Configurar la conexión a SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite', // Ruta del archivo SQLite
});

// Modelo de Carrera
const Carrera = sequelize.define('Carrera', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
    },
}, {
    timestamps: false,
});

// Modelo de Materia en la malla curricular
const Materia = sequelize.define('Materia', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    creditos: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    semestre: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
});

// Relación: Una carrera tiene muchas materias
Carrera.hasMany(Materia, { as: 'mallaCurricular' });
Materia.belongsTo(Carrera);

module.exports = { sequelize, Carrera, Materia };
