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
                <span style={{ color: '#454545', fontWeight: 'bold' }}> APR:</span> An annual percentage rate (APR) measures the total cost of your loan, including interest and fees. The lower your APR, the cheaper your loan. Lenders give the lowest APRs to borrowers with the highest credit scores.
               </Typography>
      
               </Grid>







                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <Icon style={{ verticalAlign: 'baseline', marginRight: '5px', color: '#08C177' }}><PaidOutlinedIcon/></Icon>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Loan amount: </span> Unless you’re buying a luxury car, you probably won’t need to worry about maximum loan amounts. But if you want to finance a cheaper used car, not all lenders can accommodate. Most auto loan amounts start at several thousand dollars.
                      </Typography>
                  </Grid>



                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <Icon style={{ verticalAlign: 'baseline', marginLeft: '5px',color:'#08C177' }}><CalendarMonthOutlinedIcon/></Icon>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}> Loan term: </span> Your loan term is the length of time you have to pay off your loan. Terms between 12 and 84 months are the most common. The longer your term, the lower your monthly payment usually is. On the flip side, a long term could mean more interest over the life of the loan.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <Icon style={{ verticalAlign: 'baseline', marginRight: '5px', color: '#08C177' }}><AccountBalanceWalletOutlinedIcon/></Icon>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Fees: </span> Buying a car can come with mandatory fees, such as taxes, titling and registration. Some <Link href="#" sx={{textDecoration:'none'}}> dealer fees </Link> are optional, like those associated with protection packages and extended warranties. Always ask for the out-the-door price and don’t be afraid to turn down options that you aren’t interested in.
                      </Typography>
                  </Grid>


                  
                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <Icon style={{ verticalAlign: 'baseline', marginRight: '5px', color: '#08C177' }}><ComputerIcon /></Icon>
                          <span style={{ color: '#454545', fontWeight: 'bold' }}> Lender reputation: </span> Unless you refinance or <Link href="#" sx={{textDecoration:'none'}}>pay off your car loan early</Link>, you could be stuck with your lender for years. The Consumer Financial Protection Bureau (CFPB) maintains a <Link href="#" sx={{textDecoration:'none'}}>database of customer complaints</Link> toward lenders. Check it, along with LendingTree lender reviews, to make sure the lender you choose has your best interest in mind.
                      </Typography>
                  </Grid>




                  
                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <Icon style={{ verticalAlign: 'baseline', marginRight: '5px', color: '#08C177' }}><VerifiedUserIcon/></Icon>
                          <span style={{ color: '#454545', fontWeight: 'bold' }}> Unique features: </span>Outside of cheap rates, think about what is important to you in an auto loan. Perhaps you prefer to pay by using a mobile app. Or maybe you need some help with car shopping and are interested in a car-buying service. Then, seek out lenders that offer those perks.
                      </Typography>
                  </Grid>

              </Grid>

          </Box>
      </Container>

  )
}

export default HowtocompareAL4