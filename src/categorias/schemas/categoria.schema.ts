/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const ComentarioSchema = new Schema({
    comentario: { type: String, required: true },
    calificacion: { type: Number, required: true },
    fecha: { type: String, required: true },
    usuario: { type: String, required: true },
});

export const AplicacionSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    icono: { type: String, required: true },
    instalada: { type: Boolean, required: true },
    app: { type: String, required: true },
    calificacion: { type: Number, required: true },
    descargas: { type: Number, required: true },
    precio: { type: Number, required: true },
    desarrollador: { type: String, required: true },
    imagenes: { type: Array, required: true },
    comentarios: { type: [ComentarioSchema], default: [] },
});

export const CategoriaSchema = new Schema({
    nombreCategoria: { type: String, required: true },
    descripcion: { type: String, required: true },
    aplicaciones: { type: [AplicacionSchema], default: [] },
});
