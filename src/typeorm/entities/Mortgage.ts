import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}