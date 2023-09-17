// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// @Entity()
// export class BookEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   title: string;

//   @Column()
//   author: string;

//   @Column()
//   published: string;
// }
// book.entity.ts
// book.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  @Column({ default: "NA" })
  // @Column({  type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  published: string;
}

