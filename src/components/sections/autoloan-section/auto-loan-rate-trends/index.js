import React from 'react'
import { Container, Grid, Typography, useTheme, Box, Link ,styled,Paper} from '@mui/material'
import new_and_used_interest_rate_logo from '../../../../assets/new-and-used-auto-purchase-interest-rates-2024.png'


const Autoloanratetrends4 = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const theme = useTheme();

  return (
    <>
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

                              Auto loan rate trends

                          </Typography>
                      </Grid>

                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                              Since the first quarter of 2022, average auto financing rates have surged dramatically. For new vehicles, rates went from 4.07% in early 2022 to 7.18% at the end of 2023 — a 76% increase. During that same timeframe, rates for used car loans soared 38%, from 8.62% to 11.93%.                  </Typography>
                      </Grid>
                      {/*
     <Grid item xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', justifyContent: 'center' }}>
<img
src={new_and_used_interest_rate_logo}
alt="img"
width={{ xs: 200, sm: 470, md: 584, lg: 700 }}
height={{ xs: 190, sm: 480, md: 556, lg: 667 }}
/>
 </Grid> */}


                      <Grid item xs={12}>
                          <Typography
                              sx={{
                                  fontSize: '26px',
                                  color: '#101F30',
                                  fontFamily: "'Georgia', 'Times New Roman', Times, serif",
                                  textAlign: 'center',
                                  marginBottom: '20px',
                                  //   [theme.breakpoints.down('sm')]: {
                                  //       fontSize: '22px',
                                  //   },
                              }}
                          >

                              Auto loan rate insights for 2024

                          </Typography>
                      </Grid>



                      <Grid item sx={12} lg={12} md={12} sm={12}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px', fontWeight: 'bold' }}>
                              Insights from <Link href="#" sx={{ textDecoration: 'none' }}>Jacob Channel</Link>, LendingTree Senior Economist                  </Typography>
                      </Grid>



                      <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>What might happen to auto loan rates in 2024?</Item>
                          <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                              “Auto loan rates may come down as 2024 progresses, but significant declines aren't guaranteed. Fortunately, regardless of what the Fed does, shopping around for an auto lender can still help those in the market for a car save money.</Item>
                          <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                              Different lenders can offer different rates to the exact same borrowers. Shopping around can help you lower your monthly payments and save money over the lifetime of your loan.”</Item>
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>What kind of car prices can buyers expect in 2024?</Item>
                          <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                              “As pandemic-era supply chain issues continue to subside, and inventory rises, car prices have fallen, and they may continue to tick down as 2024 progresses.</Item>
                          <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                              That said, prices are unlikely to plummet, and depending on what you're planning to buy, you could still end up spending a pretty penny on a new or used vehicle.”</Item>
                      </Grid>





                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '26px', fontFamily: "'Lato', sans-serif", color: '#101F30' }}>
                              Tips to get a better auto financing rate                      </Typography>
                      </Grid>

                      <Grid item sx={12} lg={12} md={12} sm={12}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                              Improving your credit score isn’t the only way to get a better car loan rate. You could also:
                          </Typography>
                      </Grid>

                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', fontWeight: 'bold' }}>
                              Order your credit report                      </Typography>
                      </Grid>

                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                              Order your <Link href="#" sx={{ textDecoration: 'none' }}>free credit report</Link> and check for errors. <Link href="#" sx={{ textDecoration: 'none' }}>Disputing credit report errors</Link> can give your score a lift. Unfortunately, errors are more common than you might think.                      </Typography>
                      </Grid>

                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', fontWeight: 'bold' }}>
                              Make a down payment                      </Typography>
                      </Grid>

                      <Grid item sx={12} lg={12} md={12} sm={12}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>
                              Not all auto loans require a <Link href="#" sx={{ textDecoration: 'none' }}>down payment</Link>. Even so, it may be a good idea to make one anyway.                      </Typography>
                      </Grid>

                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                              Putting money down takes some of the lender’s risk and transfers it to you. After all, you’ll lose your down payment if the lender repossesses your car. As a result, a down payment can help you secure a better rate.
                          </Typography>
                      </Grid>

                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', fontWeight: 'bold' }}>
                              Consider a shorter loan term                      </Typography>
                      </Grid>

                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                              Cars are getting more expensive, so <Link href="#" sx={{ textDecoration: 'none' }}>84-month car loans</Link> are increasingly popular. That’s because longer terms usually mean lower monthly payments. However, longer terms also almost always carry higher rates.
                          </Typography>
                      </Grid>

                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', fontWeight: 'bold' }}>
                              Shop during a promotional event                      </Typography>
                      </Grid>

                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                              Captive financing is when you get your car loan straight from your car’s manufacturer. Occasionally, these manufacturers offer <Link href="#" sx={{ textDecoration: 'none' }}> 0% APR car deals</Link> (usually around holidays and the end of the year). There’s a caveat, though — these deals typically only apply to specific vehicles.                      </Typography>
                      </Grid>











                  </Grid>

              </Box>
          </Container></>



  )
}



export default Autoloanratetrends4
