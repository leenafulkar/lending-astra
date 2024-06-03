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
        
        During its May 2024 meeting, the Federal Reserve opted to keep the federal funds rate unchanged, impacting the borrowing costs for consumers and businesses. However, the Federal Reserve has hinted at potential rate cuts later in 2024.      
         </Typography>
        </Grid>


         
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        To address inflationary pressures, the Federal Reserve raised interest rates consistently throughout 2022 and 2023. Since July 2023, the target interest rate has remained at 5.25%-5.50%.        </Typography>    
            </Grid>



              
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        <span style={{ color: '#454545', fontWeight: 'bold' }}>What this means for you</span>: When the target interest rate increases, variable interest rates on credit accounts, like credit cards, may also rise. Conversely, when the target interest rate decreases, these rates may also decline. However, personal loans typically have fixed interest rates, meaning your payments shouldn't be affected by changes in the target interest rate. If you're considering applying for a new personal loan, be prepared to encounter higher interest rates if the target interest rate is elevated.
        </Typography>           
        </Grid>


         
           
        </Grid>
        </Box>


        
   
 
 




        </Container>
  )
}

export default FedInterest