
import React from 'react'
import { Container, Grid, Typography, useTheme, Box, Link } from '@mui/material'
import '../../Personalloan-section/Interestrate/index.css'

const  HowtomanagePL = () => {
    const theme = useTheme();

  return (
    <><Container sx={{ marginTop: '40px' }}>
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
                          How do I manage a personal loan?
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

                      Prior to obtaining a personal loan, it's essential to assess your monthly budget to confirm that you can manage the minimum monthly payments.                      </Typography>
                  </Grid>



                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

                      Missing a loan payment can significantly damage your credit score, potentially lowering it by up to 180 points. Failing to repay your personal loan may also lead to legal repercussions, as your lender reserves the right to pursue legal action to recover its losses.                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      If you encounter difficulties in meeting your payments, reach out to your lender to inquire about available financial hardship programs. Some lenders may waive fees or temporarily reduce your monthly minimum payments to assist you during challenging times.                      </Typography>
                  </Grid>




              </Grid>
          </Box>

      </Container>
          {/* // ----------------------------------------------------------------
          // ---------------------------------------------------------------- */}
          <Container sx={{ marginTop: '40px' }}>
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
                            How we chose our picks for the best personal loan lenders                          </Typography>
                      </Grid>




                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

                          We evaluated over 25 lenders offering personal loans to compile our list of the top 15 lenders. To be considered, lenders must provide competitive Annual Percentage Rates (APRs). Subsequently, we prioritize lenders based on the following criteria:                          </Typography>
                      </Grid>



                      <Grid item sx={12}>
                          <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

                              <span style={{ color: '#454545', fontWeight: 'bold' }}>Accessibility: </span> Lenders receive higher rankings if their personal loans are accessible to a broader audience and entail fewer requirements. This encompasses lower credit criteria, broader geographic availability, expedited funding processes, and simplified, transparent prequalification and application procedures.
                          </Typography>
                      </Grid>




                      <Grid item sx={12}>
                          <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                              <span style={{ color: '#454545', fontWeight: 'bold' }}>Rates and terms: </span> We give priority to lenders offering more competitive fixed rates, minimal fees, and a wider range of options for repayment terms, loan amounts, and APR discounts.
                          </Typography>
                      </Grid>




                      <Grid item sx={12}>
                          <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                              <span style={{ color: '#454545', fontWeight: 'bold' }}>Repayment experience: </span> Initially, we assess each lender's reputation and business ethics. Additionally, we prioritize lenders that report to all major credit bureaus, deliver dependable customer service, and extend unique benefits to customers, such as complimentary wealth coaching.
                          </Typography>
                      </Grid>

                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          LendingTree regularly reviews and fact-checks our top lender selections on a monthly basis.                          </Typography>
                      </Grid>
                  </Grid>
              </Box>
          </Container></>
  )
}

export default HowtomanagePL