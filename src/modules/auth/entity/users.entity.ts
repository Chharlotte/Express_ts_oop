import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ unique: true })
  @Index()
  email!: string;

  @Column({})
  password!: string;
}
