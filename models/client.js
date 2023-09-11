const { Schema, model } = require('mongoose')

//Esquema de la colección usuario
const ClienteSchema = Schema({
    //Atributos
    usuario: {
        //Tipo cadena
        type: String,
        //Valor único
        unique: true,
        //Requerido
        required: [true, 'El usuario es obligatorio!']
    },
    nombre: {
        //Tipo cadena
        type: String,
        //Valor único
        unique: true,
        //Requerido
        required: [true, 'El nombre es obligatorio!']
    },
    apellido: {
        //Tipo cadena
        type: String,
        //Valor único
        unique: true,
        //Requerido
        required: [true, 'El apellido es obligatorio!']
    },
    correo: {
        //Tipo cadena
        type: String,
        //Valor único
        unique: true,
        //Requerido
        required: [true, 'El correo es obligatorio!']
    },
    telefono: {
        //Tipo cadena
        type: String,
        //Valor único
        unique: true,
        //Requerido
        required: [true, 'El telefono es obligatorio!']
    },

})

//Exportar la funcipon UsuarioSchema
module.exports = model('Cliente', ClienteSchema)