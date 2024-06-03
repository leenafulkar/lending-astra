import React from 'react'
import { Container,Box,Grid,Typography,Link,useTheme,Icon,Stack } from '@mui/material'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ComputerIcon from '@mui/icons-material/Computer';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';



const HowtocompareAL4 = () => {
    const theme = useTheme();
  return (
    <Container sx={{ marginTop: '80px' }}>
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
                       How to compare auto loans
                      </Typography>
                  </Grid>

                  



                 
                <Grid item sx={12}>
                <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                <Icon style={{ verticalAlign: 'baseline', marginLeft: '5px',color:'#08C177' }}><PercentOutlinedIcon /></Icon>
                <span style={{ color: '#454545', fontWeight: 'bold' }}> APR:</span> The annual percentage rate (APR) quantifies the total expense of your loan, encompassing both interest and fees. A lower APR indicates a more affordable loan. Lenders typically offer the lowest APRs to borrowers with the highest credit scores.
               </Typography>
      
               </Grid>







                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <Icon style={{ verticalAlign: 'baseline', marginRight: '5px', color: '#08C177' }}><PaidOutlinedIcon/></Icon>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Loan amount: </span> Unless you're purchasing a luxury vehicle, you likely won't encounter concerns regarding maximum loan amounts. However, if you're seeking financing for a less expensive used car, not all lenders may be able to accommodate your needs. Most auto loan amounts typically commence at several thousand dollars.
                      </Typography>
                  </Grid>



                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <Icon style={{ verticalAlign: 'baseline', marginLeft: '5px',color:'#08C177' }}><CalendarMonthOutlinedIcon/></Icon>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}> Loan term: </span>Your loan term signifies the duration within which you must repay your loan. Terms typically range from 12 to 84 months, with the most common durations falling within this range. Longer terms often result in lower monthly payments. However, it's important to note that an extended term may lead to paying more interest over the lifespan of the loan.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <Icon style={{ verticalAlign: 'baseline', marginRight: '5px', color: '#08C177' }}><AccountBalanceWalletOutlinedIcon/></Icon>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Fees: </span>Purchasing a car may entail obligatory fees like taxes, titling, and registration. While certain dealer fees are discretionary, such as those related to protection packages and extended warranties. Always request the out-the-door price and feel comfortable declining options that don't align with your preferences.
                      </Typography>
                  </Grid>


                  
                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <Icon style={{ verticalAlign: 'baseline', marginRight: '5px', color: '#08C177' }}><ComputerIcon /></Icon>
                          <span style={{ color: '#454545', fontWeight: 'bold' }}> Lender reputation: </span> If you don't refinance or pay off your car loan ahead of schedule, you may remain tied to your lender for an extended period. To ensure you select a lender with your best interests at heart, consult the Consumer Financial Protection Bureau (CFPB) database of customer complaints about lenders. Additionally, review LendingTree lender feedback to make an informed decision.
                      </Typography>
                  </Grid>




                  
                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <Icon style={{ verticalAlign: 'baseline', marginRight: '5px', color: '#08C177' }}><VerifiedUserIcon/></Icon>
                          <span style={{ color: '#454545', fontWeight: 'bold' }}> Unique features: </span>Beyond competitive rates, consider what features are essential to you in an auto loan. For instance, if you prefer the convenience of paying through a mobile app, prioritize lenders that offer this service. Alternatively, if you require assistance with car shopping, explore lenders that provide car-buying services. Tailor your search to find lenders that offer the perks and features that align with your needs and preferences.
                      </Typography>
                  </Grid>

              </Grid>

          </Box>
      </Container>

  )
}

export default HowtocompareAL4