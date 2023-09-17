// import { Controller,Get,Body,Put,Delete,Post,Param} from "@nestjs/common";
// import { BookService } from "./book.service";
// import { Book } from "./data/book.dto";

// @Controller("book")
// export class BookController{

//     constructor(private BookService : BookService){}


//     @Get("/findall")
//     getAllBooks(): Book[]{
//     return this.BookService.findAll();
// }

// @Put("/update")
// updateBooks(@Body() book: Book): string{
//     return this.BookService.updateBookService(book);

// }

// @Delete("/delete/:id")
// deleteBooks(@Param("id") bookId: string):string{
//     return this.BookService.deleteBookService(bookId);

// }

// @Post("/add")
// addBooks(@Body() book: Book):string{

//     return this.BookService.addBookService(book)

// }


// }

// book.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';

@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService) { }

    @Post()
    create(@Body() book: Book): Promise<Book> {
        return this.bookService.create(book);
    }

    @Get()
    findAll(): Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Book | undefined> {
        return this.bookService.findById(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() book: Book): Promise<Book | undefined> {
        return this.bookService.update(+id, book);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Book | undefined> {
        return this.bookService.remove(+id);
    }
}
