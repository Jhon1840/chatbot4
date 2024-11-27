const Carrera = sequelize.define('Carrera', {
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descripcion: {
        type: Sequelize.STRING,
    }
}, {});

Carrera.hasMany(Materia); 
Materia.belongsTo(Carrera); 
