const { Schema, model } = require('mongoose')

//Esquema de la colección usuario
const ClienteSchema = Schema({
    //Atributos
    usuario: {
        type: String,
        unique: true,
        required: [true, 'El nombre es obligatorio']
    },
    nombre: {
        type: String,
        unique: true,
        required: [true, 'El nombre es obligatorio']
    },
    apellido: {
        type: String,
        unique: true,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        unique: true,
        required: [true, 'El nombre es obligatorio']
    },
    telefono: {
        type: String,
        unique: true,
        required: [true, 'El nombre es obligatorio']
    },

})

//Exportar la funcipon UsuarioSchema
module.exports = model('Cliente', ClienteSchema)