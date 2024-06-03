import React, { useState } from 'react'
import { Container, Grid, Typography, useTheme, Box, Link ,Button} from '@mui/material'
import Slider from '@mui/material/Slider';



const HowtogetAutoloan4 = () => {



    const [loanAmount, setLoanAmount] = useState(5000); // Initial loan amount

    const handleSliderChange = (event, newValue) => {
      setLoanAmount(newValue);
    };
    const theme = useTheme();

  return (
    <>
    <Container sx={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ flexGrow: 1, maxWidth: '810px' }}>
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
                          How to get an auto loan


                      </Typography>
                  </Grid>


                  <Grid item sx={12}>

                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

                      Sure, you could let your dealer <Link href="#" sx={{textDecoration:'none'}}>get a car loan</Link> for you. Or, you could follow the steps below — they might help you get the best rate.                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>1.&nbsp;&nbsp;Check your credit score. </span>Before shopping for an auto loan, get your free credit score with <Link href="#" sx={{textDecoration:'none'}}> LendingTree Spring</Link>. Knowing your credit score can help you better understand if your offers are competitive. Depending on your situation, you may also want to take some time to <Link href="#" sx={{textDecoration:'none'}}> improve your credit score</Link> before buying. If you do, you might get a cheaper rate.
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>2.&nbsp;&nbsp;Come up with a budget. </span>The <Link href="#" sx={{textDecoration:'none'}}>20/4/10 car-buying rule</Link> is a great way to make sure that you can afford a new car. Following this, you would put down at least 20%, choose a term of four years or less and spend no more than 10% of your monthly income on transportation. You should also use our <Link href="#" sx={{textDecoration:'none'}}> car affordability calculator</Link> so you know what purchase price you can handle. That way, you won’t get your heart set on a ride that will cause financial hardship.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>3.&nbsp;&nbsp;Shop and compare loans. </span> Getting a <Link href="#" sx={{ textDecoration: 'none' }}> preapproved car loan </Link> from several lenders can give you negotiating power at the dealership. Comparing offers can also help you find the best auto loan rates. As long as you do your loan shopping within 14 to 45 days, only one hard credit hit will count against you.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>4.&nbsp;&nbsp;Apply for your loan. </span>Once you’ve found the car loan that meets your needs, you can apply. You might be able to apply online, but some banks and credit unions will require you to visit a branch. Here, you’ll fill out a series of questions, and you may need to provide documents like a pay stub or utility bill.
                      </Typography>
                  </Grid>

                  

                  <Box sx={{maxWidth:'860px',width:'100%', height:'auto', margin:'20px auto', padding:'30px',textAlign:'center', border: '2px solid #000000', border: '2px solid #000000',
  '@media (max-width: 960px)': {
    maxWidth: 'calc(100% - 40px)', // Adjust based on your layout needs
    margin: '20px 20px',
  },}}>
      <Grid item sx={12}>
        <Typography sx={{ fontSize: '21px', fontFamily: "'Lato', sans-serif", color: '#000000'}}>
          How much do you need to borrow for your auto loan?                      
        </Typography>
        <Typography sx={{ fontSize: '27px', fontFamily: "'Lato', sans-serif", color: '#0069BA'}}>
          ${loanAmount}+
        </Typography>
        <Slider 
          defaultValue={loanAmount} 
          aria-label="Loan Amount" 
          valueLabelDisplay="auto" 
          onChange={handleSliderChange}
          min={1000}
          max={50000}
          step={1000}
          sx={{marginTop:'10px'}}
        />
        <Button
          variant="text"
          sx={{
              fontSize: '16px',
              color: '#FFFFFF',
              marginTop: '20px',
              padding: '10px 24px',
              marginBottom:'20px',
              fontWeight: 'bold',
              textTransform: 'none',
              fontFamily: "'Lato', sans-serif",
              bgcolor: '#0069BA',
              '&:hover': {
                  bgcolor: '#0069BA',
              },
          }}
        >
            See Personalized Results
        </Button>
          <Typography sx={{ fontSize: '12px', fontFamily: "'Lato', sans-serif", color: '#4B5155'}}>

             Terms & Conditions apply. NMLS#1136                
                 </Typography>
                  </Grid>
                  </Box>


              </Grid>

          </Box>
      </Container></>
  )
}

export default HowtogetAutoloan4