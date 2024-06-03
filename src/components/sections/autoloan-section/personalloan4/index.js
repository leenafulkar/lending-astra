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
                          On the surface, auto financing is simple.You don’t have to pay in full when you <Link href="#" sx={{textDecoration:'none'}}>buy a car</Link> if you finance. Instead, you’ll use an auto loan. Then, you’ll pay off what you borrowed in monthly payments, plus interest and fees. You may or may not need to pay a down payment, but you probably should! (more on that later).
                          </Typography>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 25px' }}>
                          Although you are the registered owner while you’re making loan payments, the car technically belongs to your lienholder. This is the company that gave you your loan.                          </Typography>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 25px' }}>
                          If you have a secured auto loan (the most common kind), your car serves as collateral. That means your lienholder can — and likely will — <Link href="#" sx={{textDecoration:'none'}}>repossess your car</Link> if you fall too far behind on your payments.                          </Typography>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 25px' }}>
                          When you’ve paid the loan in full, the lienholder will release the car’s title to you. At that point, it officially becomes your property.                          </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4} lg={6}>
                          <Typography className='content1' sx={{ fontWeight: 'bold', textAlign: 'left' }}> On this page</Typography><br />
                      <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>Auto loan rate trends</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>Tips to get a better auto financing rate</Link><br /><br />
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