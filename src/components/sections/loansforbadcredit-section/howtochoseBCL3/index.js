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

                      We examined over 28 lenders providing personal loans to identify the top six with a credit score requirement of 640 or lower. Our selection criteria included competitive annual percentage rates (APRs), and we further prioritized lenders based on the following factors:                       </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Accessibility: </span>Lenders are positioned higher in rankings if their personal loans are accessible to a broader audience and entail fewer conditions. This encompasses lower credit prerequisites, broader geographic availability, expedited funding, and simplified and transparent prequalification and application procedures.
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Rates and terms: </span> We give priority to lenders offering more competitive fixed rates, minimal fees, and enhanced options for repayment terms, loan amounts, and APR discounts.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Repayment experience: </span>Initially, we evaluate each lender's reputation and business ethics. We also prefer lenders that report to all major credit bureaus, deliver dependable customer service, and offer unique perks to customers, such as complimentary wealth coaching.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      LendingTree conducts monthly reviews and fact-checks on our top lender selections.                      </Typography>                
                       </Grid>
                       
                  
             </Grid></Box>

         
      </Container>
        

         </>
  )
}


export default HowtochoseDCL3