import { Typography, Container } from '@mui/material'
import React from 'react'

const PricingDisclosure2 = () => {
  return (
    <Container sx={{marginTop:'100px', marginBottom:'40px'}}>
        <Typography sx={{fontSize:'13.33px', fontFamily: "'Lato', sans-serif", color:'#454545',marginBottom:'8px'}}>*Pricing Disclosure:</Typography>
        <Typography sx={{fontSize:'13.33px', fontFamily: "'Lato', sans-serif", color:'#454545'}}>SoFi offers fixed rates ranging from 8.99% APR to 29.99% APR, which include a 0.25% autopay interest rate discount and a 0.25% direct deposit interest rate discount. These rate ranges are accurate as of 02/06/2024 and are subject to change without prior notice. The average amount funded for SoFi Personal Loans in 2022 was approximately $30,000. Keep in mind that not all applicants will qualify for the lowest rate, as it is reserved for the most creditworthy borrowers. Your actual rate will fall within the listed range and will be determined based on factors such as the term you choose, your creditworthiness, income, and other relevant criteria. Loan amounts range from $5,000 to $100,000. The APR represents the annual cost of credit and includes both your interest rate and an origination fee of 0%-7%, which will be deducted from your loan proceeds. 

To qualify for the 0.25% autopay interest rate reduction, you must agree to make monthly principal and interest payments through automatic deduction from a savings or checking account. This benefit will be discontinued for periods in which you do not make payments via automatic deduction. However, autopay enrollment is not mandatory to receive a loan from SoFi.

Additionally, to potentially receive an additional 0.25% interest rate reduction for setting up direct deposit with a SoFi Checking and Savings account or eligible cash management account, you must have an open Direct Deposit Account within 30 days of loan funding. Once eligible, this discount will be applied during periods in which you have enabled payroll direct deposits of at least $1,000 per month to your Direct Deposit Account, as per SoFi's discretion. This discount will be forfeited if SoFi determines that you have disabled direct deposits to your Direct Deposit Account. Enrolling in direct deposits is not obligatory to obtain a loan.</Typography>

    </Container>
  )
}

export default PricingDisclosure2