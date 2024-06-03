import { Typography, Container } from '@mui/material'
import React from 'react'

const PricingDisclosure = () => {
  return (
    <Container sx={{marginTop:'100px', marginBottom:'40px'}}>
        <Typography sx={{fontSize:'13.33px', fontFamily: "'Lato', sans-serif", color:'#454545',marginBottom:'8px'}}>*Pricing Disclosure:</Typography>
        <Typography sx={{fontSize:'13.33px', fontFamily: "'Lato', sans-serif", color:'#454545'}}>As of 02/06/2024, SoFi offers fixed rates ranging from 8.99% APR to 29.99% APR, inclusive of a 0.25% autopay interest rate discount and a 0.25% direct deposit interest rate discount. These rate ranges are subject to change without prior notice. In 2022, the average funded amount for SoFi Personal Loans was approximately $30,000. The lowest rates are typically reserved for highly creditworthy borrowers, and not all applicants will qualify for the lowest rate. Your actual rate will be determined based on various factors, including your creditworthiness, income, and selected loan term. Loan amounts range from $5,000 to $100,000.

The APR, or annual percentage rate, reflects the cost of credit on an annual basis and includes both your interest rate and an origination fee of 0% to 7%, which will be deducted from your loan proceeds.

To qualify for the 0.25% autopay interest rate reduction, you must agree to make monthly principal and interest payments through automatic deduction from a savings or checking account. This discount will be discontinued if automatic deductions are not made for any period. Autopay enrollment is optional and not a requirement for obtaining a loan from SoFi.

Additionally, you may be eligible for an extra 0.25% interest rate reduction by setting up direct deposit with a SoFi Checking and Savings account or an eligible cash management account. To qualify, you must have an open Direct Deposit Account within 30 days of loan funding and meet SoFi's requirements for payroll direct deposits of at least $1,000 per month. This discount will be forfeited if direct deposits to your Direct Deposit Account are disabled. Enrollment in direct deposits is not mandatory for loan approval.</Typography>
    </Container>
  )
}

export default PricingDisclosure