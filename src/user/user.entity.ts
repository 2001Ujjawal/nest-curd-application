import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DELETED = 'deleted',
}
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone_no: string;
  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.INACTIVE,
  })
  status: UserStatus;

  @CreateDateColumn()
  created_at: Date;
}
