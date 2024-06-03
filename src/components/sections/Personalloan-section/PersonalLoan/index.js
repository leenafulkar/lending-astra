import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography,Link, useTheme } from '@mui/material';
import '../PersonalLoan/index.css'




const PersonalLoannn = () => {
  const theme = useTheme();
  return (
    <Container sx={{marginTop:'40px'}}>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <Typography
        sx={{
          fontSize: '40px',
          color: '#101F30',
          fontFamily: "'Georgia', 'Times New Roman', Times, serif",
          textAlign: 'center',
          marginBottom: '40px',
          [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
          },
        }}
      >
        What is a personal loan?
      </Typography>
        </Grid>
        </Grid>
        </Box>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={12}>
      <Grid item xs={12} sx={12} md={4} lg={6}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", margin:'0px 0px 25px'}}>
        A personal loan offers financing as a lump sum that is repaid through monthly installments. These loans come with fixed annual percentage rates (APRs) and defined repayment terms. Although personal loan amounts can range from $600 to $200,000, LendingTree's marketplace provides loans up to $50,000. Typically, finance experts consider personal loans with APRs under 36% to be affordable.

        </Typography>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", margin:'0px 0px 25px'}}>
        Personal loans come in two types: secured and unsecured. Secured loans require collateral, meaning your loan is backed by a valuable asset that ensures repayment. If you can't repay the loan, the lender can seize the collateral. Unsecured loans, on the other hand, don't require collateral, so lenders rely more on your credit history to make their decision. Most personal loans fall into the unsecured category.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={6} >
        <Typography className='content1' sx={{fontWeight:'bold', textAlign:'left'}}> On this page</Typography><br/>
       
         
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}}  >Reasons to Consider a Personal Loan</Link><br/><br/>
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}} >Interest Rates Based on Credit Score</Link><br/><br/>
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}} >Changes to the Fed's Interest Rates in 2024</Link><br/><br/>
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}}  >Advantages of Personal Loans</Link><br/><br/>
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}}  >Where to Obtain a Personal Loan</Link><br/><br/>
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}}  >How to Compare Personal Loans</Link><br/><br/>
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}}  >Steps to Obtain a Personal Loan</Link><br/><br/>
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}}  >How LendingTree Operates</Link><br/><br/>
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}}  >How to Handle a Personal Loan</Link><br/><br/>
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}}  >Our Selection Criteria for the Best Personal Loan Lenders</Link><br/><br/>
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}}  >Commonly Asked Questions</Link><br/><br/>
       
        

      </Grid>
      
    </Grid>
  </Box>
  </Container>
  )
}

export default PersonalLoannn