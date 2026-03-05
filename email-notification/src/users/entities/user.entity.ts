import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('email')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;
}
