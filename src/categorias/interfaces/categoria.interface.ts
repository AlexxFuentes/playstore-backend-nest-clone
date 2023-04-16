/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Comentario extends Document {
    @Prop({ required: true })
    comentario: string;

    @Prop({ required: true })
    calificacion: number;

    @Prop({ required: true })
    fecha: string;

    @Prop({ required: true })
    usuario: string;
};

@Schema()
export class Aplicacion extends Document {
    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true })
    descripcion: string;

    @Prop({ required: true })
    icono: string;

    @Prop({ required: true })
    instalada: boolean;

    @Prop({ required: true })
    app: string;

    @Prop({ required: true })
    calificacion: number;

    @Prop({ required: true })
    descargas: number;

    @Prop({ required: true })
    precio: number;

    @Prop({ required: true })
    desarrollador: string;

    @Prop({ required: true })
    imagenes: string[];

    @Prop({ type: [Comentario] })
    comentarios: Comentario[];
};

@Schema()
export class Categoria extends Document {
    @Prop({ required: true })
    nombreCategoria: string;

    @Prop({ required: true })
    descripcion: string;

    @Prop({ type: [Aplicacion] })
    aplicaciones: Aplicacion[];
};

export const ComentarioSchema = SchemaFactory.createForClass(Comentario);
export const AplicacionSchema = SchemaFactory.createForClass(Aplicacion);
export const CategoriaSchema = SchemaFactory.createForClass(Categoria);