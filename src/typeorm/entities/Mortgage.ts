import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'mortgages' }) // can specify the name of the table otherwise TypeORM will use the name of the class 'Mortgage'
export class Mortgage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('decimal', { precision: 10, scale: 2 })
    loanAmount: number;

    @Column('float')
    interestRate: number;

    // @Column()
    // endDate: Date;
}