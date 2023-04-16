/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto, CreateComentarioDto, CreateAplicacionDto } from './dto/categorias.dto';

@Controller('categorias')
export class CategoriasController {
    constructor(private readonly categoriaService: CategoriasService) { }

    @Get()
    async getCategorias(@Res() res: any) {
        const categorias = await this.categoriaService.getCategorias();
        return res.status(HttpStatus.OK).json(categorias);
    }
    
    @Get('/:categoriaId/aplicaciones')
    async getAplicacionesCategoria(@Res() res: any, @Param('categoriaId') categoriaId: string) {
        const categoria = await this.categoriaService.getAplicacionesCategoria(categoriaId);
        if (!categoria) throw new NotFoundException('Categoria does not exist!');
        return res.status(HttpStatus.OK).json(categoria);
    }

    @Get('/:categoriaId/aplicaciones/:aplicacionId')
    async getAplicacionCategoria(@Res() res: any, @Param('categoriaId') categoriaId: string, @Param('aplicacionId') aplicacionId: string) {
        const categoria = await this.categoriaService.getAplicacionCategoria(categoriaId, aplicacionId);
        if (!categoria) throw new NotFoundException('Categoria does not exist!');
        return res.status(HttpStatus.OK).json(categoria);
    }

    @Post('/:categoriaId/aplicaciones/:aplicacionId/comentarios')
    async postNewComentario(@Res() res: any, @Param('categoriaId') categoriaId: string, @Param('aplicacionId') aplicacionId: string, @Body() comentario: CreateComentarioDto) {
        const categoria = await this.categoriaService.postNewComentario(categoriaId, aplicacionId, comentario);
        if (!categoria) throw new NotFoundException('Categoria does not exist!');
        return res.status(HttpStatus.OK).json(categoria);
    }

    @Post('/:categoriaId/aplicaciones')
    async postNewAplicacion(@Res() res: any, @Param('categoriaId') categoriaId: string, @Body() aplicacion: CreateAplicacionDto) {
        const categoria = await this.categoriaService.postNewAplicacion(categoriaId, aplicacion);
        if (!categoria) throw new NotFoundException('Aplicacion does not exist!');
        return res.status(HttpStatus.OK).json(categoria);
    }

    @Post()
    async postNewCategoria(@Res() res: any, @Body() categoria: CreateCategoriaDto) {
        const newCategoria = await this.categoriaService.postNewCategoria(categoria);
        return res.status(HttpStatus.OK).json({
            message: 'Categoria successfully created',
            categoria: newCategoria
        })
    }
}
