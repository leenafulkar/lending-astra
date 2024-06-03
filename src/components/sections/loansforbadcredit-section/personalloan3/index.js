import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography,Link, useTheme ,Rating,styled} from '@mui/material';
import '../personalloan3/index.css'
import StarIcon from '@mui/icons-material/Star';



const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconFilled': {
      color: 'white', // Set the color of filled stars
      backgroundColor: 'green', // Set the background color of filled stars
    },
    '& .MuiRating-iconEmpty': {
        backgroundColor: 'green', // Set the color of empty stars
      },
  }));

const PersonalLoannn3 = () => {
  const theme = useTheme();
  return (
    <><Box
          alignContent="row"
          alignItems="row"
          justifyContent="center"
          sx={{
              width: "100%",
              height: "auto",
              background: "#101f30", // Radial gradient background
              color: "#FFFFFF", // Set text color to white
              marginTop: '40px',
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              padding: '15px ',
              alignItems: "center",
          }}
      >
          <Typography
              sx={{
                  fontSize: "17px",
                  fontFamily: "'Lato', sans-serif",
                  display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' }
              }}
          >
              our customers say
          </Typography>&nbsp;&nbsp;&nbsp;&nbsp;
          <Typography
              sx={{
                  fontSize: "20px",
                  fontFamily: "'Lato', sans-serif",
                  display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' }
              }}
          >
              Excellent
          </Typography>&nbsp;&nbsp;&nbsp;&nbsp;
          <StyledRating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />&nbsp;&nbsp;
          <Typography
              sx={{
                  fontSize: "17px",
                  fontFamily: "'Lato', sans-serif",
                  display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' }
              }}
          >
              4.3 out 5 based on 13,708 reviews
          </Typography>&nbsp;&nbsp;&nbsp;&nbsp;
          <Typography
              sx={{
                  fontSize: "17px",
                  fontFamily: "'Lato', sans-serif", // Multiple font families
              }}
          >
              <StarIcon sx={{ color: 'green' }} />
              Trustpilot
          </Typography>
      </Box><Container sx={{ marginTop: '40px' }}>
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
                             What are bad credit loans?
                          </Typography>
                      </Grid>
                  </Grid>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={12}>
                      <Grid item xs={12} sx={12} md={4} lg={6}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 25px' }}>
                          When lenders evaluate personal loan applications, they place significant emphasis on your credit score and overall creditworthiness. Often, they set minimum credit score requirements, which can make it challenging for individuals with poor credit to secure loans. However, some lenders provide personal loans specifically for those with bad credit, allowing you to qualify for a loan even if your credit score is low.
                          </Typography>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 25px' }}>
                          Regrettably, individuals with less-than-perfect credit scores often face higher interest rates and less favorable terms when seeking loans. For those with bad credit, securing a loan is typically challenging.  </Typography>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 25px' }}>
                          Loans for bad credit typically feature fixed rates and are provided by lenders who are willing to extend funds despite your less-than-ideal credit score. These loans can be utilized to improve your credit standing, paving the way for better loan terms and broader financial opportunities in the future.                          </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4} lg={6}>
                          <Typography className='content1' sx={{ fontWeight: 'bold', textAlign: 'left' }}> On this page</Typography><br />


                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>What defines bad credit loans?</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>What qualifies as a poor credit score?</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>How to obtain a loan with poor credit </Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>Loan options for individuals with poor credit</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>How to assess and compare personal loan options for individuals with poor credit</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>Identifying scams when seeking loans for poor credit</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>Commonly asked questions (FAQs)</Link><br /><br />
                          


                      </Grid>

                  </Grid>
              </Box>
          </Container></>
  )
}

export default PersonalLoannn3