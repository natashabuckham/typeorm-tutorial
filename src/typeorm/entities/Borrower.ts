import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'borrowers' })
export class Borrower {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: "Generic Inc" })
    companyName: string;

    @Column({ default: "Suzy" })
    contactFirstName: string;

    @Column({ default: "Jones" })
    contactLastName: string;

    @Column({ default: "Manufacturing" })
    industry: string;
}