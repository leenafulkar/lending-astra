import React from 'react'
import { Container, Grid, Typography, useTheme, Box, Link ,Button,Stack} from '@mui/material'


const HowtoGetDCL = () => {
    const theme = useTheme();

  return (
    <><><Container sx={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ flexGrow: 1, maxWidth: '810px' }}>
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
                          How to get a debt consolidation loan

                      </Typography>
                  </Grid>


                  <Grid item sx={12}>

                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>1.&nbsp;&nbsp;Check your credit score</span>: Most consolidation options have certain credit requirements, such as a minimum credit score. Unsecured personal loans don’t require collateral, which means that lenders rely more heavily on your financial situation, along with other factors, to determine eligibility. Check your credit score for free using <Link href="#" sx={{ textDecoration: 'none' }}> Lending Spring</Link>
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>2.&nbsp;&nbsp;Calculate how much you need to borrow</span>: Add up all your monthly debt payments that you wish to consolidate. You can use a personal loan to pay off credit cards, payday loans and other high-interest debts. Some lenders let you borrow as much as $100,000 for a debt consolidation loan.
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>3.&nbsp;&nbsp;Determine the APR you need in order to save money</span>: Your APR would need to be lower than what you’re currently paying on your debts for a personal loan to be worthwhile.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>4.&nbsp;&nbsp;Compare APRs by prequalifying with lenders. </span>: Many lenders let you <Link href="#" sx={{ textDecoration: 'none' }}>prequalify for a personal loan </Link> to get an idea of your potential APR without impacting your credit score. This lets you compare estimated loan offers before you formally apply.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>5.&nbsp;&nbsp;Formally apply with a lender</span>:If you’re approved, the lender can deposit the funds directly into your bank account. What happens next? You can use that money to pay off all types of debt. In some cases, your new lender will pay off those debts directly.
                      </Typography>
                  </Grid>




                  <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Button
                          variant="text"
                          sx={{
                              fontSize: '16px',
                              color: '#FFFFFF',
                              marginTop: '20px',
                              padding: '10px 24px',
                              fontWeight: 'bold',
                              textTransform: 'none',
                              textAlign: 'center',
                              fontFamily: "'Lato', sans-serif",
                              bgcolor: '#FF704D',
                              '&:hover': {
                                  bgcolor: '#FF471A',
                              },
                          }}
                      >
                          See Your Personalized Results
                      </Button>
                  </Container>

              </Grid>

          </Box>
      </Container>
          {/* // ---------------------------------------------------------------------- */}
          <Container
              sx={{
                  direction: 'column',
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: 'auto',
                  marginTop: '80px',
                  flexGrow: 1,
                  // display: { xs: 'block', md: 'flex' },
                  px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints
              }}
          >
              <Typography
                  sx={{
                      fontSize: '40px',
                      color: '#101F30',
                      fontFamily: "'Georgia', 'Times New Roman', Times, serif",
                      textAlign: 'center',
                      marginBottom: '30px',
                      [theme.breakpoints.down('sm')]: {
                          fontSize: '36px',
                      },
                  }}
              >
                 3 major benefits of debt consolidation
              </Typography>
              
          </Container></>
          
          {/* ------------------- */}
          
          <Container sx={{
              direction: 'column',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'space-between', // Center the buttons horizontally
              width: '100%',
              // maxWidth:'1250px',
              height: 'auto',
              flexGrow: 1,
              display: { xs: 'block', md: 'flex' },
              px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints
          }}>
              <Box
                  sx={{
                      bgcolor: '#FFFFFF',
                      color: '#000000',
                      width: '100%',
                      height: 'auto',
                      borderRadius: '16px',
                  }}
              >
                  <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" spacing={6}
                      sx={{ width: '100%', height: 'auto', mb: { xs: 3, md: 0 } }}>
                      <Box sx={{
                          width: '100%', height: 'auto',
                      }}>

                         
                          <Typography
                              sx={{
                                  fontSize: '20px',
                                  color: '#101F30',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  fontWeight: 'bold',
                                  fontFamily: "'Lato', sans-serif",
                                  marginBottom: '18px',
                                  marginTop:'42px'
                              }}
                          >

                             1.&nbsp;&nbsp; Simplifies your budget
                          </Typography>
                          <Typography
                              sx={{
                                  fontSize: '17px',
                                  color: '#454545',
                                  fontFamily: "'Lato', sans-serif",
                              }}
                          >
                              Managing multiple due dates and accounts can add stress to your life and budget. Debt consolidation combines some, if not all, of your debt into one payment. You’ll only have to track a single account instead of multiple accounts and debt payments.
                          </Typography>
                      </Box>

                      <Box sx={{
                          width: '100%', height: 'auto'
                      }}>
                          <Typography
                              sx={{
                                  fontSize: '20px',
                                  color: '#101F30',
                                  margin: '40px 0px 2px',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  fontWeight: 'bold',
                                  fontFamily: "'Lato', sans-serif",
                                  marginBottom: '18px',
                                  height: 'auto'
                              }}
                          >

                         2.&nbsp;&nbsp; Saves you money on interest
                          </Typography>
                          <Typography
                              sx={{
                                  fontSize: '17px',
                                  color: '#454545',
                                  fontFamily: "'Lato', sans-serif",
                                  height: 'auto'
                              }}
                          >
                             If you’re able to secure a lower APR, you could save yourself hundreds (if not thousands) of dollars over the life of your loan. Your APR is the measure of how much interest and fees you’re paying on the loan.
                          </Typography>
                      </Box>



                      <Box sx={{
                          width: '100%', height: 'auto'
                      }}>
                          <Box sx={{ width: "30px", marginTop: '20px' }}>
                            
                          </Box>
                          <Typography
                              sx={{
                                  fontSize: '20px',
                                  color: '#101F30',
                                  margin: '37px 0px 2px',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  fontWeight: 'bold',
                                  fontFamily: "'Lato', sans-serif",
                                  marginTop: '20px'
                              }}
                          >

                             3.&nbsp;&nbsp;Improves your credit score
                          </Typography>
                          <Typography
                              sx={{
                                  fontSize: '17px',
                                  color: '#454545',
                                  fontFamily: "'Lato', sans-serif",
                                  marginTop: '15px',
                                  height: 'auto'
                              }}
                          >
                             As you pay off your debt consolidation loan, your credit utilization ratio will gradually decline, helping boost your credit. On top of that, your on-time payments will be reported to the credit bureaus, further increasing your credit score.
                          </Typography>
                      </Box>
                  </Stack>
              </Box>


          </Container></>
  )
}


export default HowtoGetDCL