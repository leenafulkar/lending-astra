import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography,Link, useTheme ,Rating,styled} from '@mui/material';
import '../personalloan4/index.css'



const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconFilled': {
      color: 'white', // Set the color of filled stars
      backgroundColor: 'green', // Set the background color of filled stars
    },
    '& .MuiRating-iconEmpty': {
        backgroundColor: 'green', // Set the color of empty stars
      },
  }));

const PersonalLoannn4 = () => {
  const theme = useTheme();
  return (
    <>
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
                           How does auto financing work?
                          </Typography>
                      </Grid>
                  </Grid>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={12}>
                      <Grid item xs={12} sx={12} md={4} lg={6}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 25px' }}>
                          At first glance, auto financing appears straightforward. Rather than paying the full purchase price upfront when buying a car, you can opt for financing through an auto loan. Subsequently, you'll repay the borrowed amount in monthly installments, along with interest and associated fees. While a down payment may not always be required, it's generally advisable to consider making one, as we'll discuss further later on.                          </Typography>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 25px' }}>
                          While you're in the process of making loan payments, you are the registered owner of the car; however, the vehicle technically belongs to your lienholder, which is the company that provided you with the loan.   </Typography>                      
                           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 25px' }}>
                           In the case of a secured auto loan, which is the most prevalent type, your car acts as collateral. Consequently, your lienholder retains the right to repossess your vehicle if you fail to keep up with your payments, as is often the case.</Typography>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 25px' }}>
                          Once you've completed payment of the loan in its entirety, the lienholder will release the car's title to you. This marks the official transfer of ownership, and the vehicle becomes your property at that juncture.</Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4} lg={6}>
                          <Typography className='content1' sx={{ fontWeight: 'bold', textAlign: 'left' }}> On this page</Typography><br />
                      <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>Trends in auto loan interest rates</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>Strategies for securing a more favorable auto financing rate</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}> How to get an auto loan</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>How to compare auto loans</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>How your credit score impacts auto financing rates</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>Can I get auto financing with bad credit?</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>How we chose our picks for best auto loans</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>Frequently asked questions</Link><br /><br />

                          


                      </Grid>

                  </Grid>
              </Box>
          </Container></>
  )
}

export default PersonalLoannn4