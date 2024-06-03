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

                      The annual percentage rate (APR) represents the cost your financial institution charges you for borrowing money, but it differs from the interest rate.                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px'}}>

                      Although the APR encompasses the interest rate for borrowing funds, it provides a more comprehensive understanding of your loan's total cost by incorporating additional fees. A lower APR indicates lower overall loan expenses over time. Hence, selecting a lender offering a lower APR may be advantageous. </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px' ,fontWeight:'bold' }}>

                      Account for fees                      
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      In addition to the annual interest rate, your financial institution might impose various fees on your personal loan. These fees could comprise administrative expenses deducted upfront from the borrowed amount, or they could be levied for late payments or early loan repayment before the term concludes.                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '28px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px' }}>
                      3 common personal loan fees
                      </Typography>
                  </Grid>


                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', marginBottom: '20px' }}>
                      <span style={{  fontWeight: 'bold' }}>Late payment fee:</span> If you miss payments, your lender might impose a late fee. Generally, late fees can range from 3% to 5% of the overdue monthly payment amount.
                      </Typography>
                  </Grid>

                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '14px', fontFamily: "'Lato', sans-serif", color:  '#000000', marginBottom: '20px' }}>
                      <span style={{ fontWeight: 'bold' }}>Loan origination fee:</span> If applicable, the origination fee typically ranges from 1% to 8% of the total loan amount. This fee, which serves as a processing or administrative charge, is usually subtracted upfront from the borrowed sum.
                      </Typography>
                  </Grid>

                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '14px', fontFamily: "'Lato', sans-serif", color:  '#000000', marginBottom: '20px' }}>
                      <span style={{ fontWeight: 'bold' }}>prepayment penalty:</span>While you might face a prepayment penalty for early loan repayment, many lenders don't impose this fee for personal loans.
                      </Typography>
                  </Grid>

                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px' ,fontWeight:'bold' }}>
                      Read lender reviews
                      </Typography>
                  </Grid>

                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      When selecting the best lender for your requirements, conduct thorough research. As part of your investigation, be sure to read reviews of online personal loan lenders.                      </Typography>
                  </Grid>

                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px',fontWeight:'bold'  }}>
                      Examine repayment terms
                      </Typography>
                  </Grid>

                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      Your repayment terms significantly impact the size of your monthly loan payments. Typically, lenders provide unsecured personal loan repayment terms ranging from 12 to 60 months, although longer-term loans with repayment terms extending up to 144 months are also available. </Typography>
                  </Grid>

                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      With longer payment terms, your APR rate might be higher, but you'll make smaller monthly payments. However, you'll end up paying more in total interest over the life of the loan. Conversely, with a shorter repayment plan, your APR rates may be lower, but your monthly payments will be larger.</Typography>
                  </Grid>

                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      While certain lending companies provide only two or three repayment term options, others offer more flexibility with a variety of terms to choose from.                      </Typography>
                  </Grid>
                

                </Grid>
                </Box>
                </Container>
  )
}

export default HowtocompareDL3