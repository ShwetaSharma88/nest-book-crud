
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async create(book: Book): Promise<Book> {
    return await this.bookRepository.save(book);
  }

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async findById(id: number): Promise<Book | undefined> {
    return await this.bookRepository.findOne({ where: { id } });
  }

  
  async update(id: number, bookData: Book): Promise<Book | undefined> {
    const existingBook = await this.bookRepository.findOne({ where: { id } });
  
    if (!existingBook) {
      return undefined; 
    }
  
   
    existingBook.title = bookData.title || existingBook.title;
    existingBook.author = bookData.author || existingBook.author;
    existingBook.published = bookData.published || existingBook.published;
  
    
    await this.bookRepository.save(existingBook);
  
    return existingBook;
  }
  
  async remove(id: number): Promise<Book | undefined> {
    await this.bookRepository.delete(id);
    return await this.bookRepository.findOne({ where: { id } });
  }
}


