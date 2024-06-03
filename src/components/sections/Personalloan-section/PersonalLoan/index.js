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
        A personal loan provides financing in the form of a lump sum of money, which is then repaid through monthly installments. These loans feature fixed annual percentage rates (APRs) and set repayment terms. While personal loans can vary in amount, typically ranging from $600 to $200,000, LendingTree's marketplace offers loans up to $50,000. Generally, finance experts deem personal loans with APRs below 36% to be affordable.

        </Typography>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", margin:'0px 0px 25px'}}>
        There are two types of personal loans: <Link href='#' sx={{textDecoration:'none'}}>secured and unsecured loans</Link>. Secured loans require collateral — your loan is backed by a valuable asset that guarantees repayment. If you’re unable to repay your loan, your lender can seize your collateral. <Link href='#'  sx={{textDecoration:'none'}}>Unsecured loans</Link> don’t require collateral, so lenders look more closely at your credit history to make a lending decision. Most personal loans are unsecured.

        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={6} >
        <Typography className='content1' sx={{fontWeight:'bold', textAlign:'left'}}> On this page</Typography><br/>
       
         
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}}  >Reasons to get a personal loan</Link><br/><br/>
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}} >Interest rates by credit score</Link><br/><br/>
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}} >2024 Fed interest rate changes</Link><br/><br/>
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}}  >Benefits of personal loans</Link><br/><br/>
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}}  >Where to get a personal loan</Link><br/><br/>
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}}  >How to compare personal loans</Link><br/><br/>
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}}  >How to get a personal loan</Link><br/><br/>
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}}  >How LendingTree works</Link><br/><br/>
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}}  >How do I manage a personal loan?</Link><br/><br/>
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}}  >How we chose our picks for the best personal loan lenders</Link><br/><br/>
        <Link href='#' className='green-dot'   sx={{textDecoration:'none'}}  >Frequently asked questions</Link><br/><br/>
       
        

      </Grid>
      
    </Grid>
  </Box>
  </Container>
  )
}

export default PersonalLoannn