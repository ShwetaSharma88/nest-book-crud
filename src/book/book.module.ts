import { Module } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookController } from "./book.controller";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book.entity'; 

import config from './typeorm.config'

@Module({

    imports: [
        TypeOrmModule.forRoot(config),
        TypeOrmModule.forFeature([Book])

    ],
    controllers: [BookController],
    providers: [BookService]
})
export class BookModule {

}