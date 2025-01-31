export type CreateMortgageParams = {
    loanAmount: number;
    interestRate: number;
    endDate: Date;
}

// export type UpdateMortgageParams = {
//     loanAmount: number;
//     interestRate: number;
//     endDate: Date;
// }

export type CreateMortgageBorrowerParams = {
    companyName: string;
    contactFirstName: string;
    contactLastName: string;
    industry: string;
}