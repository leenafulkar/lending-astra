import React from 'react'
import { Container, Grid, Typography, useTheme, Box, Link} from '@mui/material'




const HowtocompareDL3 = () => {
    const theme = useTheme();

  return (
    <Container sx={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
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
                        
                        How to compare personal loans for bad credit

                      </Typography>
                  </Grid>


                  <Grid item sx={12}>

                      <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30',fontWeight:'bold' }}>

                      Compare lender APRs                     
                       </Typography>
                  </Grid>




                  <Grid item sx={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      The annual percentage rate (APR) is what your financial institution charges you for taking out a loan, but there is a <Link href="#" sx={{textDecoration:'none'}}>difference between interest rate and APR</Link>.                      
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px'}}>

                      While the APR does include the interest rate you’ll be paying to borrow the funds, it gives you a more comprehensive picture of how much your loan will cost, as it also includes any additional fees. The lower the APR is, the less the loan will cost you over time. Therefore, you may want to choose a lender that can offer you a lower APR.                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px' ,fontWeight:'bold' }}>

                      Account for fees                      
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      Your financial institution could charge you several fees for your personal loan in addition to the annual interest rate. Some of these fees could include administrative costs deducted upfront from the amount you’re borrowing, while others could be charged for making a late payment or paying off your loan before the end of its term.
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '28px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px' }}>
                      3 common personal loan fees
                      </Typography>
                  </Grid>


                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', marginBottom: '20px' }}>
                      <span style={{  fontWeight: 'bold' }}>Late payment fee:</span> If you fall behind on payments, your lender may charge you a late fee. Typically, late fees can run between 3% to 5% of your overdue monthly payment amount.
                      </Typography>
                  </Grid>

                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '14px', fontFamily: "'Lato', sans-serif", color:  '#000000', marginBottom: '20px' }}>
                      <span style={{ fontWeight: 'bold' }}>Loan origination fee:</span> The origination fee, if included, is typically equal to 1% to 8% of the total amount of the loan. It's a processing or administrative fee that is typically deducted upfront from the total amount you're borrowing.
                      </Typography>
                  </Grid>

                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '14px', fontFamily: "'Lato', sans-serif", color:  '#000000', marginBottom: '20px' }}>
                      <span style={{ fontWeight: 'bold' }}>prepayment penalty:</span>You could be charged a <Link href="#" sx={{textDecoration:'none'}}></Link>prepayment penalty for paying off your loan ahead of time. However, most lenders don’t charge this fee for personal loans.
                      </Typography>
                  </Grid>

                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px' ,fontWeight:'bold' }}>
                      Read lender reviews
                      </Typography>
                  </Grid>

                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      Do your due diligence when deciding on the best lender for your needs. As part of your research, make sure to read online <Link href="#" sx={{textDecoration:'none'}}>personal loan lender reviews.</Link>
                      </Typography>
                  </Grid>

                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px',fontWeight:'bold'  }}>
                      Examine repayment terms
                      </Typography>
                  </Grid>

                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      Your repayment terms can make a difference in how large or small your monthly loan payments will be. Generally, lenders offer unsecured personal loan repayment terms between 12 to 60 months, but you can also find <Link href="#" sx={{textDecoration:'none'}}>long-term loans</Link> with repayment terms as long as 144 months.                      </Typography>
                  </Grid>

                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      The longer your payment term, the higher your APR rate may be, but you’ll pay in smaller monthly payments. You’ll also pay more in total interest over the life of a long-term loan. If your repayment plan is shorter, however, your APR rates may be lower but your monthly payments will be larger.                      </Typography>
                  </Grid>

                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      While some lending companies only offer two or three different repayment terms, other companies may have more flexible terms to choose from.                      
                      </Typography>
                  </Grid>
                

                </Grid>
                </Box>
                </Container>
  )
}

export default HowtocompareDL3