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
                          When lenders receive applications for personal loans, they typically take your credit score and overall creditworthiness into heavy consideration. Often, they require minimum credit scores to qualify — which can make it difficult for borrowers with poor credit to access these loans. Some lenders, however, offer personal loans for bad credit, meaning you can still qualify for a loan even if you have poor credit.

                          </Typography>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 25px' }}>
                          Unfortunately, those with unpolished credit scores often get saddled with higher interest rates and other less-than-ideal terms when applying for a loan. If you have bad credit, it’s typically difficult to <Link href="#" sx={{textDecoration:'none'}}>qualify for a loan</Link>.
                          </Typography>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 25px' }}>
                          Bad credit loans generally come with fixed rates and are offered by lenders willing to loan you funds despite your limiting credit rating. You can use these types of <Link href="#" sx={{textDecoration:'none'}}>loans to build credit</Link> so you can eventually become eligible for better loan terms and other financial opportunities.
                          </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4} lg={6}>
                          <Typography className='content1' sx={{ fontWeight: 'bold', textAlign: 'left' }}> On this page</Typography><br />


                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>What are bad credit loans?</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>What is considered a bad credit score?</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>How to get a bad credit loan </Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>Types of loans for bad credit</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>How to compare personal loans for bad credit loans</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>How to spot scams for bad credit loans</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>Frequently asked questions</Link><br /><br />
                          


                      </Grid>

                  </Grid>
              </Box>
          </Container></>
  )
}

export default PersonalLoannn3