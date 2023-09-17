// import { Module } from '@nestjs/common';
// import { BookModule } from './book/book.module';


// @Module({
//   imports: [BookModule],
//   controllers: [],
//   providers: [],
// })
// export class AppModule {}

// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';
import config from './book/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    BookModule,
  ],
})
export class AppModule {}

