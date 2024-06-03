import React from 'react'
import { Container, Grid, Typography, useTheme, Box, Link } from '@mui/material'

const FedInterest = () => {
    const theme = useTheme();

  return (
    <Container sx={{marginTop:'40px'}}>
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
       2024 Fed interest rate changes
      </Typography>
        </Grid>




        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        At its May 2024 meeting, the Federal Reserve did not change the federal funds rate — a number that in turn affects how much consumers and businesses pay to borrow money. The Federal Reserve has indicated they may cut rates later in 2024.       
         </Typography>
        </Grid>


         
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        To combat inflation, <Link href="#" sx={{textDecoration:'none'}}>the Fed increased rates</Link> throughout 2022 and 2023. The target interest rate has been 5.25%-5.50% since July 2023.        
        </Typography>    
            </Grid>



              
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        <span style={{ color: '#454545', fontWeight: 'bold' }}>What this means for you</span>: When the target interest rate goes up, variable interest rates on credit accounts — such as credit cards — may go up as well. When the target interest rate goes down, those rates may go down as well. Personal loans, however, have fixed interest rates, so you shouldn’t see any changes to your payments. If you’re looking to apply for a new personal loan, you may have to accept higher interest rates with a higher target interest rate. 
        </Typography>           
        </Grid>


         
           
        </Grid>
        </Box>


        
   
 
 




        </Container>
  )
}

export default FedInterest