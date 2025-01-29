import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'borrowers' })
export class Borrower {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    companyName: string;

    @Column()
    contactFirstName: string;

    @Column()
    contactLastName: string;

    @Column()
    industry: string;
}