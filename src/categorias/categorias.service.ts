/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Categoria } from './interfaces/categoria.interface';
import { CreateCategoriaDto, CreateComentarioDto, CreateAplicacionDto } from './dto/categorias.dto';

@Injectable()
export class CategoriasService {
    constructor(@InjectModel('Categoria') private readonly categoriaModel: Model<Categoria>) { }

    /**
     * 
     * @returns 
     */
    async getCategorias(): Promise<Categoria[]> {
        return await this.categoriaModel.find({}, {_id: true, nombreCategoria: true});
    }

    /**
     * 
     * @param catergoriaId 
     * @returns 
     */
    async getAplicacionesCategoria(catergoriaId: string): Promise<Categoria[]> {
        return await this.categoriaModel.findById(catergoriaId, {aplicaciones: true});
    }

    async getAplicacionCategoria(catergoriaId: string, aplicacionId: string): Promise<Categoria[]> {
        console.log(catergoriaId, aplicacionId);
        return await this.categoriaModel.find({_id: catergoriaId, "aplicaciones._id": aplicacionId }, {"aplicaciones.$": true});
    }

    async postNewComentario(categoriaId: string, aplicacionId: string, comentario: CreateComentarioDto): Promise<Categoria[]> {
        await this.categoriaModel.updateOne(
            {
                _id: categoriaId,
                "aplicaciones._id": aplicacionId
            }, 
            { $push: { 
                "aplicaciones.$.comentarios": comentario
            }}
        );
        return await this.categoriaModel.find({_id: categoriaId});
    }

    async postNewAplicacion(categoriaId: string, aplicacion: CreateAplicacionDto): Promise<Categoria[]> {
        await this.categoriaModel.updateOne(
            {
                _id: categoriaId
            }, 
            { $push: { 
                aplicaciones: {
                        nombre: aplicacion.nombre,
                        descripcion: aplicacion.descripcion,
                        precio: aplicacion.precio,
                        desarrollador: aplicacion.desarrollador,
                        icono: aplicacion.icono,
                        app: "app/demo.apk",
                        instalada: false,
                        calificacion: 0,
                        descargas: 0,
                        imagenes: ["img/app-screenshots/1.webp", "img/app-screenshots/2.webp", "img/app-screenshots/3.webp"],
                        comentarios: []
                    }
                
            }}
        );
        return await this.categoriaModel.find({_id: categoriaId});
    }

    async postNewCategoria(categoria: CreateCategoriaDto): Promise<Categoria> {
        const newCategoria = new this.categoriaModel(categoria);
        return await newCategoria.save();
    }
}
