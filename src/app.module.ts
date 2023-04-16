/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './categorias/categorias.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CategoriasModule, 
    ConfigModule.forRoot({envFilePath: '.env', isGlobal: true}),
    MongooseModule.forRoot(process.env.DB_URI)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
