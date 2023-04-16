/* eslint-disable prettier/prettier */

export class CreateComentarioDto {
    readonly comentario: string;
    readonly calificacion: number;
    readonly fecha: Date;
    readonly usuario: string;
}

export class CreateAplicacionDto {
    readonly nombre: string;
    readonly descripcion: string;
    readonly precio: number;
    readonly desarrollador: string;
    readonly icono: string;
    readonly app: string;
    readonly instalada: boolean;
    readonly calificacion: number;
    readonly descargas: number;
    readonly imagenes: string[];
    readonly comentarios: CreateComentarioDto[];
}

export class CreateCategoriaDto {
    readonly nombreCategoria: string;
    readonly descripcion: string;
    readonly aplicaciones: CreateAplicacionDto[];
}
