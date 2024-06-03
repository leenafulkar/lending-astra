import React from 'react'
import { Container, Grid, Typography, useTheme, Box, styled,Paper,Link } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
const HowdoesDCLwork = () => {




    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));


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
                          How does a debt consolidation loan work?
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

                          Let’s say you have four outstanding credit cards with a total balance of $20,000. Although you have a different APR on each card, you’re paying an average rate of 24.61%.         </Typography>
                  </Grid>



                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

                          You’ve improved your credit score since you took out your credit cards. As a result, you qualify for an APR of 16.01% on a debt consolidation loan with a five year term. In this situation, consolidating could help you save money and pay off your debt faster.        </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          Debt consolidation loans come with fixed interest rates (unlike credit cards, which have a variable rate). That means the APR on your debt consolidation loan will not increase due to inflation.        </Typography>
                  </Grid>



                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          Note that credit card debt isn’t the only type of debt you can consolidate. Many lenders (including most on this list) allow you to consolidate personal loans, too.
                      </Typography>     </Grid>




              </Grid>
          </Box>

      </Container>
          {/* // ---------------------------------------------------------------------- */}
          <Container sx={{ marginTop: '60px' }}>
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
                         When is a debt consolidation loan a good idea?
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '19px', fontFamily: "'Lato', sans-serif", color: '#01F30', fontWeight:'bold',textAlign:'center', [theme.breakpoints.down('sm')]: {
                                  fontSize: '17px',
                              }, }}>

               There’s no one-size-fits-all debt management strategy. To determine that, you’ll need to take a close look at your finances. </Typography>
                  </Grid>


                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={12} md={6} sm={12} lg={6}>
                            <Item sx={{ boxShadow: 'none', fontSize: '19px', fontFamily: "'Lato', sans-serif", color: '#101F30', fontWeight: 'bold', textAlign: 'left' }}>Debt consolidation is a good idea when…</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '38px', verticalAlign: 'middle', marginRight: '5px' }} />
                                You have debt with high (or variable) interest rates</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '38px', verticalAlign: 'middle', marginRight: '5px' }} />
                                You can qualify for a lower APR than what you’re currently paying on your debts</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '38px', verticalAlign: 'middle', marginRight: '5px' }} />
                                You’re struggling to manage credit card bills and loan payments</Item>
                                <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CheckIcon sx={{ color: '#08C177', fontSize: '38px', verticalAlign: 'middle', marginRight: '5px' }} />
                                You want to pay off debt faster on a set schedule</Item>

                        </Grid>
                        <Grid item xs={12} md={6} sm={12} lg={6}>
                        <Item sx={{ boxShadow: 'none', fontSize: '19px', fontFamily: "'Lato', sans-serif", color: '#101F30', fontWeight: 'bold', textAlign: 'left' }}>Debt consolidation is a bad idea when…</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '38px', verticalAlign: 'middle', marginRight: '5px' }} />
                                You can’t qualify for a lower APR than what you’re currently paying on your debts</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '38px', verticalAlign: 'middle', marginRight: '5px' }} />
                                You still won’t be able to afford your payments after consolidation</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                <CloseIcon sx={{ color: '#FF0000', fontSize: '38px', verticalAlign: 'middle', marginRight: '5px' }} />
                                Your debt burden is small</Item>
                                
                        </Grid>
                    </Grid>
                </Box>
   
              </Grid>
          </Box>

      </Container>
      {/* --------------------------------------------------------------------- */}




      <Container sx={{ marginTop: '60px' }}>
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
                         How will the Federal Reserve impact interest rates in 2024?
                      </Typography>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#01F30', fontWeight:'bold',textAlign:'center', [theme.breakpoints.down('sm')]: {
                                  fontSize: '15px',
                              }, }}>
                   Insights from <Link href="#" sx={{textDecoration:'none'}}>Jacob Channel</Link>, LendingTree senior economist
                </Typography>
                  </Grid>


                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={12} md={6} sm={12} lg={6}>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#101F30', fontWeight: 'bold', textAlign: 'left' }}>What might happen to interest rates in 2024?</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                            “Cuts to the federal funds rate this year are possible, though they aren’t guaranteed.</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                               
                      If the Fed does cut rates, don’t expect them to do so until summer at the earliest and don’t expect that they’ll slash rates to the bone anytime soon.”</Item>
                            

                        </Grid>
                        <Grid item xs={12} md={6} sm={12} lg={6}>
                        <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#101F30', fontWeight: 'bold', textAlign: 'left' }}>Debt consolidation is a bad idea when…</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                                
                         “Regardless of whether the Fed starts cutting rates this year, now could still be a good time to get a debt consolidation loan.</Item>
                            <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                            Remember that while the Fed has an influence over consolidation loan rates, they don’t directly set them. Instead, the actual rate you get will vary depending on factors like what your credit score looks like, how much you’re trying to borrow and who your lender is.”
                        </Item>
                           
                        </Grid>
                    </Grid>
                </Box>
   
              </Grid>
          </Box>

      </Container>




          </>

  )
}


export default HowdoesDCLwork