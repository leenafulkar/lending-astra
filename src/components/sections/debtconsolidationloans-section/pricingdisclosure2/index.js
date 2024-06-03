import { Typography, Container } from '@mui/material'
import React from 'react'

const PricingDisclosure2 = () => {
  return (
    <Container sx={{marginTop:'100px', marginBottom:'40px'}}>
        <Typography sx={{fontSize:'13.33px', fontFamily: "'Lato', sans-serif", color:'#454545',marginBottom:'8px'}}>*Pricing Disclosure:</Typography>
        <Typography sx={{fontSize:'13.33px', fontFamily: "'Lato', sans-serif", color:'#454545'}}>Fixed rates from 8.99% APR to 29.99% APR reflect the 0.25% autopay interest rate discount and a 0.25% direct deposit interest rate discount. SoFi rate ranges are current as of 02/06/2024 and are subject to change without notice. The average of SoFi Personal Loans funded in 2022 was around $30K. Not all applicants qualify for the lowest rate. Lowest rates reserved for the most creditworthy borrowers. Your actual rate will be within the range of rates listed and will depend on the term you select, evaluation of your creditworthiness, income, and a variety of other factors. Loan amounts range from $5,000– $100,000. The APR is the cost of credit as a yearly rate and reflects both your interest rate and an origination fee of 0%-7%, which will be deducted from any loan proceeds you receive. Autopay: The SoFi 0.25% autopay interest rate reduction requires you to agree to make monthly principal and interest payments by an automatic monthly deduction from a savings or checking account. The benefit will discontinue and be lost for periods in which you do not pay by automatic deduction from a savings or checking account. Autopay is not required to receive a loan from SoFi. Direct Deposit Discount: To be eligible to potentially receive an additional (0.25%) interest rate reduction for setting up direct deposit with a SoFi Checking and Savings account offered by SoFi Bank, N.A. or eligible cash management account offered by SoFi Securities, LLC (“Direct Deposit Account”), you must have an open Direct Deposit Account within 30 days of the funding of your Loan. Once eligible, you will receive this discount during periods in which you have enabled payroll direct deposits of at least $1,000/month to a Direct Deposit Account in accordance with SoFi’s reasonable procedures and requirements to be determined at SoFi’s sole discretion. This discount will be lost during periods in which SoFi determines you have turned off direct deposits to your Direct Deposit Account. You are not required to enroll in direct deposits to receive a Loan.</Typography>

    </Container>
  )
}

export default PricingDisclosure2