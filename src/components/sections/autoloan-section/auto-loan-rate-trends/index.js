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

                      
                      <Grid item xs={12}>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <img
              src={new_and_used_interest_rate_logo}
              alt="Disney Debt Chart"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Box>
          </Grid>

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

                        Expert insights on auto loan rates for 2024

                          </Typography>
                      </Grid>



                      <Grid item sx={12} lg={12} md={12} sm={12}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px', fontWeight: 'bold' }}>
                          Perspectives from Jacob Channel, Senior Economist at LendingTree                                </Typography>
                      </Grid>



                      <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>What might happen to auto loan rates in 2024?</Item>
                          <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                          "Auto loan rates might decrease as 2024 unfolds, although substantial declines are not assured. Nonetheless, irrespective of the Federal Reserve's actions, comparing different auto lenders remains a prudent strategy for potential car buyers to save money."</Item>
                          <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                          Various lenders may provide different interest rates to identical borrowers. By shopping around, you can potentially reduce your monthly payments and save money throughout the duration of your loan.</Item>
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                          <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#FFFFFF', fontWeight: 'bold', textAlign: 'left', bgcolor: '#08C177' }}>What kind of car prices can buyers expect in 2024?</Item>
                          <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                          "As pandemic-related supply chain challenges gradually ease and inventory levels increase, car prices have begun to decline, and this trend may persist as 2024 unfolds.</Item>
                          <Item sx={{ boxShadow: 'none', fontSize: '14px', fontFamily: "'Lato', sans-serif", color: '#000000', textAlign: 'left' }}>
                          However, while prices may decrease, significant drops are improbable. Depending on your intended purchase, you may still need to allocate a considerable amount for a new or used vehicle.</Item>
                      </Grid>





                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '26px', fontFamily: "'Lato', sans-serif", color: '#101F30' }}>
                              Tips to get a better auto financing rate                      </Typography>
                      </Grid>

                      <Grid item sx={12} lg={12} md={12} sm={12}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                          Enhancing your credit score isn't the sole method to secure a more favorable auto loan rate. Additionally, you could:
                          </Typography>
                      </Grid>

                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', fontWeight: 'bold' }}>
                              Order your credit report                      </Typography>
                      </Grid>

                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                          Requesting your free credit report and reviewing it for inaccuracies is another approach. Correcting any errors on your credit report can potentially boost your score. It's worth noting that errors are more prevalent than many people realize.</Typography>
                      </Grid>

                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', fontWeight: 'bold' }}>
                              Make a down payment                      </Typography>
                      </Grid>

                      <Grid item sx={12} lg={12} md={12} sm={12}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>
                          While not every auto loan mandates a down payment, it could still be advantageous to provide one. </Typography>
                      </Grid>

                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                          Making a down payment reduces some of the lender's risk and shifts it to you. Since you stand to lose your down payment if the lender repossesses your car, providing one can increase your chances of securing a better rate.                          </Typography>
                      </Grid>

                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', fontWeight: 'bold' }}>
                              Consider a shorter loan term                      </Typography>
                      </Grid>

                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                          As car prices continue to rise, 84-month car loans are becoming more prevalent. This trend is driven by the fact that longer loan terms typically result in lower monthly payments. However, it's important to note that longer terms almost always come with higher interest rates.                          </Typography>
                      </Grid>

                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', fontWeight: 'bold' }}>
                              Shop during a promotional event                      </Typography>
                      </Grid>

                      <Grid item sx={12}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                          Captive financing involves obtaining your car loan directly from the manufacturer of your vehicle. Periodically, these manufacturers may provide 0% APR car deals, often during holidays and year-end sales events. However, it's important to note that these deals typically apply only to select vehicles.                                </Typography>
                      </Grid>











                  </Grid>

              </Box>
          </Container></>



  )
}



export default Autoloanratetrends4
