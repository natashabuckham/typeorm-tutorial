import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Borrower } from "./Borrower";

@Entity({ name: 'mortgages' })
export class Mortgage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('decimal', { scale: 2 })
    loanAmount: number;

    @Column('decimal', { scale: 4, precision: 10 })
    interestRate: number;

    @Column({ type: 'date' })
    endDate: Date;

    @OneToOne(() => Borrower)
    @JoinColumn()
    borrower: Borrower;
}