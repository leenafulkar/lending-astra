import React from 'react'
import { Container, Grid, Typography, useTheme, Box} from '@mui/material'
import '../howtospotscams3/index.css'
const HowtochoseDCL3 = () => {
    const theme = useTheme();

  return (
    <><Container sx={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ flexGrow: 1 ,maxWidth:'840px'}}>
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
                        How we chose the best personal loans for bad credit

                      </Typography>
                  </Grid>


                  <Grid item sx={12}>

                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

                      We reviewed more than 28 lenders that offer personal loans to determine the overall best six lenders with a credit score requirement at or below 640. To make our list, lenders must offer competitive annual percentage rates (APRs). From there, we prioritize lenders based on the following factors:                      
                       </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Accessibility: </span>Lenders are ranked higher if their personal loans are available to more people and require fewer conditions. This may include lower credit requirements, wider geographic availability, faster funding and easier and more transparent prequalification and application processes.
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Rates and terms: </span> We prioritize lenders with more competitive fixed rates, fewer fees and greater options for repayment terms, loan amounts and APR discounts.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Repayment experience: </span>For starters, we consider each lender’s reputation and business practices. We also favor lenders that report to all major credit bureaus, offer reliable customer service and provide any unique perks to customers, like free wealth coaching.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      LendingTree reviews and fact-checks our top lender picks on a monthly basis.  
                      </Typography>                
                       </Grid>
                       
                  
             </Grid></Box>

         
      </Container>
        

         </>
  )
}


export default HowtochoseDCL3