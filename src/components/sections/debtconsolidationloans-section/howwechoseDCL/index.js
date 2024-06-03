import React from 'react'
import { Container, Grid, Typography, useTheme, Box, Link } from '@mui/material'

const HowwechoseDCL = () => {
    const theme = useTheme();

  return (
    <Container sx={{marginTop:'80px'}}>
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
       How we chose the best debt consolidation loans

      </Typography>
        </Grid>




        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        We assessed over a dozen lenders providing debt consolidation loans to identify the top 11 lenders. Our selection criteria focused on competitive annual percentage rates (APRs). Additionally, we prioritized lenders based on the following factors:
      </Typography>
        </Grid>


         
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        <span style={{fontWeight:'bold'}}>Accessibility: </span>Lenders receive higher rankings if their personal loans are accessible to a broader audience and involve fewer conditions. This encompasses lower credit requirements, wider geographic availability, expedited funding, as well as simpler and more transparent prequalification and application procedures.
        </Typography>    
            </Grid>



              
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        <span style={{fontWeight:'bold'}}>Rates and terms: </span>We give priority to lenders offering more competitive fixed rates, minimal fees, and extensive options for repayment terms, loan amounts, and APR discounts. </Typography>
        </Grid>



      
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        <span style={{fontWeight:'bold'}}>Repayment experience: </span>To begin, we evaluate each lender's reputation and ethical conduct. Additionally, we prioritize lenders that report to all major credit bureaus, deliver dependable customer service, and offer unique benefits to customers, such as complimentary wealth coaching.
        </Typography>           
        </Grid>



      
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        LendingTree conducts monthly reviews and fact-checks on our top lender selections.
      </Typography>           
        </Grid>


         
           
        </Grid>
        </Box>


        
   
 
 




        </Container>
  )
}


export default HowwechoseDCL