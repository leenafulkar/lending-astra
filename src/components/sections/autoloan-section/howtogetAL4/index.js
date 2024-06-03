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

                      Certainly, you have the option to have your dealer secure a car loan for you. Alternatively, consider following the steps below, which could assist you in securing the best rate:
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>1.&nbsp;&nbsp;Check your credit score. </span>Prior to shopping for an auto loan, access your complimentary credit score through LendingTree Spring. Understanding your credit score can provide insight into the competitiveness of the offers you receive. Depending on your circumstances, consider investing time to enhance your credit score before making a purchase. Doing so could potentially result in securing a lower interest rate.
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>2.&nbsp;&nbsp;Come up with a budget. </span>The 20/4/10 car-buying rule offers a reliable method to ensure affordability when purchasing a new car. Adhering to this rule entails making a minimum down payment of 20%, selecting a loan term of four years or less, and limiting transportation expenses to no more than 10% of your monthly income. Additionally, utilizing our car affordability calculator can help determine a suitable purchase price, preventing the selection of a vehicle that could lead to financial strain.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>3.&nbsp;&nbsp;Shop and compare loans. </span> Obtaining preapproved car loans from multiple lenders can enhance your negotiating leverage at the dealership. By comparing offers, you can also identify the best auto loan rates available. It's important to note that if you conduct your loan shopping within a 14 to 45-day window, only one hard credit inquiry will impact your credit score.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>4.&nbsp;&nbsp;Apply for your loan. </span>After identifying the car loan that aligns with your requirements, you can proceed with the application process. While online applications are available from certain lenders, others, such as banks and credit unions, may necessitate an in-person visit to a branch. During this visit, you will complete a series of questions, and you may be asked to furnish documents such as pay stubs or utility bills.
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