
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

                          Before you take out a personal loan, it’s important to review your monthly budget to ensure that you can afford the minimum monthly payments.
                      </Typography>
                  </Grid>



                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

                          A <Link href="#" sx={{ textDecoration: 'none' }}>missed loan payment</Link> can have a sizable negative impact on your credit score and bring your score down by as many as 180 points. Not repaying your personal loan can also come with legal consequences, as your lender can <Link href="#" sx={{ textDecoration: 'none' }}>file a lawsuit</Link> against you to recoup its losses.
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          If you find yourself struggling to keep up with payments, contact your lender to find out whether it offers any financial hardship programs. Some lenders may dismiss fees or temporarily lower your monthly minimum payments.
                      </Typography>
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

                          We reviewed more than 25 lenders that offer personal loans to determine the overall best 15 lenders. To make our list, lenders must offer competitive annual percentage rates (APRs). From there, we prioritize lenders based on the following factors:
                          </Typography>
                      </Grid>



                      <Grid item sx={12}>
                          <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

                              <span style={{ color: '#454545', fontWeight: 'bold' }}>Accessibility: </span> Lenders are ranked higher if their personal loans are available to more people and require fewer conditions. This may include lower credit requirements, wider geographic availability, faster funding and easier and more transparent prequalification and application processes.
                          </Typography>
                      </Grid>




                      <Grid item sx={12}>
                          <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                              <span style={{ color: '#454545', fontWeight: 'bold' }}>Rates and terms: </span> We prioritize lenders with more competitive fixed rates, fewer fees and greater options for repayment terms, loan amounts and APR discounts.
                          </Typography>
                      </Grid>




                      <Grid item sx={12}>
                          <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                              <span style={{ color: '#454545', fontWeight: 'bold' }}>Repayment experience: </span>For starters, we consider each lender’s reputation and business practices. We also favor lenders that report to all major credit bureaus, offer reliable customer service and provide any unique perks to customers, like free wealth coaching.
                          </Typography>
                      </Grid>

                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          LendingTree reviews and fact-checks our top lender picks on a monthly basis.
                          </Typography>
                      </Grid>
                  </Grid>
              </Box>
          </Container></>
  )
}

export default HowtomanagePL