import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'mortgages' })
export class Mortgage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('decimal', { precision: 10, scale: 2 })
    loanAmount: number;

    @Column('float')
    interestRate: number;

    @Column({ type: 'date' })
    endDate: Date;
}