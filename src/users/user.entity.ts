import {
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert(): void {
    console.log('Inserted user data with id: ', this.id);
  }
  @AfterUpdate()
  logUpdate(): void {
    console.log('Updated user data with id: ', this.id);
  }
  @AfterRemove()
  logRemove(): void {
    console.log('Removed user data with id: ', this.id);
  }
}
