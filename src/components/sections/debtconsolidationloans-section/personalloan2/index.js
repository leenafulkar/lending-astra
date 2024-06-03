import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography,Link, useTheme,Rating} from '@mui/material';
import '../../Personalloan-section/PersonalLoan/index.css'
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/system';



const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconFilled': {
      color: 'white', // Set the color of filled stars
      backgroundColor: 'green', // Set the background color of filled stars
    },
    '& .MuiRating-iconEmpty': {
        backgroundColor: 'green', // Set the color of empty stars
      },
  }));
  
const PersonalLoannn2 = () => {
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
              marginTop:'40px',
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              padding:'15px ',
               alignItems: "center",
          }}
      >
        <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "'Lato', sans-serif",
              display:{lg:'block',md:'none', sm:'none', xs:'none'}
            }}
          >
           our customers say
          </Typography>&nbsp;&nbsp;&nbsp;&nbsp;
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "'Lato', sans-serif", 
               display:{lg:'block',md:'block', sm:'block', xs:'none'}
            }}
          >
           Excellent
          </Typography>&nbsp;&nbsp;&nbsp;&nbsp;
          <StyledRating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />&nbsp;&nbsp;
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "'Lato', sans-serif", 
              display:{lg:'block',md:'block', sm:'none', xs:'none'}
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
          </Box>


          {/* ------------------------------------------------------- */}
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
                              What is a debt consolidation loan?
                          </Typography>
                      </Grid>
                  </Grid>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={12}>
                      <Grid item xs={12} sx={12} md={4} lg={6}>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 25px' }}>
                          A debt consolidation loan is a form of personal loan utilized to settle various existing debts, such as credit card balances or medical bills. It's crucial to note that a debt consolidation loan does not eliminate your debt; rather, it reorganizes it.                          </Typography>
                          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 25px' }}>
                          Following consolidation, you'll be responsible for a single loan payment instead of managing multiple debt bills. Additionally, you might incur lower interest expenses if the APR on your debt consolidation loan is lower than what you're currently paying on your existing debts.                          </Typography>
                           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", margin: '0px 0px 25px', bgcolor:'#E3E6E8', padding:'20px'  }}>
                           Among the array of products offered on the LendingTree marketplace, debt consolidation loans stand out as highly sought-after. In the fourth quarter of 2023, 54.3% of LendingTree users explored personal loans primarily for consolidating debt or refinancing their credit cards.   </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4} lg={6}>
                          <Typography className='content1' sx={{ fontWeight: 'bold', textAlign: 'left' }}> On this page</Typography><br />


                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>What is the mechanism behind a debt consolidation loan?</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>Under what circumstances is a debt consolidation loan a favorable choice?</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>What influence will the Federal Reserve have on interest rates in 2024?</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>How can one obtain a debt consolidation loan?</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>3 major benifits of debt consolidation</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>How to compare debt consolidation loans</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>Debt consolidation vs. debt relief: What's the difference?</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>How your credit score impacts loan rates</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>Alternatives to debt consolidation loans</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>Frequently asked questions</Link><br /><br />
                          <Link href='#' className='green-dot' sx={{ textDecoration: 'none' }}>How we chose the best debt consolidation loans</Link><br /><br />



                      </Grid>

                  </Grid>
              </Box>
          </Container></>
  )
}

export default PersonalLoannn2