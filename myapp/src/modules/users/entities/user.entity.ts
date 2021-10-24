import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Exclude } from 'class-transformer';
import { Role } from './../../role/entities/role.entity';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 500})
    name: string;

    @Column()
    key: string;

    @ManyToOne(() => Role, (role) => role.id)
    role: Role;

    @Column()
    @Exclude()
    createdBy: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
