import { Typography, Container } from '@mui/material'
import React from 'react'

const PricingDisclosure = () => {
  return (
    <Container sx={{marginTop:'100px', marginBottom:'40px'}}>
        <Typography sx={{fontSize:'13.33px', fontFamily: "'Lato', sans-serif", color:'#454545',marginBottom:'8px'}}>*Pricing Disclosure:</Typography>
        <Typography sx={{fontSize:'13.33px', fontFamily: "'Lato', sans-serif", color:'#454545'}}>Fixed rates from 8.99% APR to 29.99% APR include a 0.25% autopay interest rate discount and a 0.25% direct deposit interest rate discount. SoFi's rate ranges are accurate as of 02/06/2024 and may change without prior notice. The average funded amount for SoFi Personal Loans in 2022 was approximately $30,000. The lowest rates are typically reserved for highly creditworthy borrowers, and not all applicants will qualify for the lowest rate. Your actual rate will be determined based on various factors, including your creditworthiness, income, and the loan term you select. Loan amounts range from $5,000 to $100,000.

The APR, or annual percentage rate, represents the cost of credit on a yearly basis and includes both your interest rate and an origination fee of 0% to 7%, which will be deducted from your loan proceeds. Autopay: To qualify for the SoFi 0.25% autopay interest rate reduction, you must agree to make monthly principal and interest payments through automatic deduction from a savings or checking account. This discount will be discontinued if you do not make payments via automatic deduction for any period. Enrolling in autopay is optional and not a requirement to obtain a loan from SoFi.

Direct Deposit Discount: You may be eligible for an additional 0.25% interest rate reduction by setting up direct deposit with a SoFi Checking and Savings account or an eligible cash management account. To qualify, you must have an open Direct Deposit Account within 30 days of loan funding and meet SoFi's requirements for payroll direct deposits of at least $1,000 per month. This discount will be forfeited if direct deposits to your Direct Deposit Account are disabled. Enrollment in direct deposits is not mandatory to receive a loan.</Typography>

    </Container>
  )
}

export default PricingDisclosure