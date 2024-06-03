import React from 'react'
import { Container, Grid, Typography, useTheme, Box, Link } from '@mui/material'
import './index.css'

const InterestRate3 = () => {
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
        What is considered a bad credit score?
      </Typography>
        </Grid>




        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        If you have bad credit, your score in most scoring models likely falls somewhere between 300 and 579. Poor credit may be a result of the lack of time or opportunity to build up your credit, financial missteps — such as missing payments or having a high debt-to-income ratio — or perhaps being a victim of a scam or identity theft.
        </Typography>
        </Grid>


         
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        Whatever the reason, lenders often consider your credit score as a signal of your creditworthiness, or how likely you are to pay them back. As a result, poor-credit borrowers often have to pay higher APR rates than those with good or excellent credit.        </Typography>    
            </Grid>



              
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        If you’re looking for a personal loan, here are some of our most recent statistics on what kind of APR you may expect based on your credit score.</Typography>    
            </Grid>


            <Grid item sx={12}>
        <Typography sx={{fontSize:'26px', fontFamily:"'Lato', sans-serif", color:'#101F30', marginBottom:'20px'}}>
        
        Average personal loan APR by credit score         
        </Typography>    
            </Grid>

           
        </Grid>
        </Box>



        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={4} >
          <Typography className='interest-head'> Credit score range</Typography>
       
          
        </Grid>
        <Grid item xs={4} >
          <Typography  className='interest-head'>Average APR  <span style={{ color: '#08C177' }}>
            in&nbsp;&nbsp;&nbsp;(%)
          </span></Typography>
        
          
        </Grid>
        <Grid item xs={4} >
          <Typography  className='interest-head'> Average loan amount</Typography>
        
          
        </Grid>
        </Grid>
        </Box>



        
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} >
        <Grid item xs={4} className='interest-rate-data'>720+</Grid>
        <Grid item xs={4}  className='interest-rate-data'>16.01%</Grid>
        <Grid item xs={4}  className='interest-rate-data'>$18,594</Grid>
        </Grid>
        </Box>

        
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} >
        <Grid item xs={4} className='interest-rate-data'>680-719</Grid>
        <Grid item xs={4}  className='interest-rate-data'>25.78%</Grid>
        <Grid item xs={4}  className='interest-rate-data'>$15,302</Grid>
        </Grid>
        </Box>

        
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} >
        <Grid item xs={4} className='interest-rate-data'>660-679</Grid>
        <Grid item xs={4}  className='interest-rate-data'>37.57%</Grid>
        <Grid item xs={4}  className='interest-rate-data'>$11,160</Grid>
        </Grid>
        </Box>
 

       
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} >
        <Grid item xs={4} className='interest-rate-data'>640-659</Grid>
        <Grid item xs={4}  className='interest-rate-data'>51.61%</Grid>
        <Grid item xs={4}  className='interest-rate-data'>$8,088</Grid>
        </Grid>
        </Box>
   
 
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} >
        <Grid item xs={4} className='interest-rate-data'>620-639</Grid>
        <Grid item xs={4}  className='interest-rate-data'>71.55%</Grid>
        <Grid item xs={4}  className='interest-rate-data'>$6,300</Grid>
        </Grid>
        </Box>


        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} >
        <Grid item xs={4} className='interest-rate-data'>580-619	</Grid>
        <Grid item xs={4}  className='interest-rate-data'>112.28%	</Grid>
        <Grid item xs={4}  className='interest-rate-data'>$4,397</Grid>
        </Grid>
        </Box>


        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} >
        <Grid item xs={4} className='interest-rate-data'>560-579	</Grid>
        <Grid item xs={4}  className='interest-rate-data'>152.35%	</Grid>
        <Grid item xs={4}  className='interest-rate-data'>$3,071</Grid>
        </Grid>
        </Box>


        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} >
        <Grid item xs={4} className='interest-rate-data'>Less than 560	</Grid>
        <Grid item xs={4}  className='interest-rate-data'>175.16%	</Grid>
        <Grid item xs={4}  className='interest-rate-data'>$2,405</Grid>
        </Grid>
        </Box>


        
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} >
        <Grid item xs={12} sx={{fontSize:'17px',fontFamily:"'Lato', sans-serif",padding:'11px', marginTop:'20px'}}>Source: <Link sx={{textDecoration:'none'}}>LendingTree user data </Link>on closed personal loans for the fourth quarter of 2023.
       </Grid>
         </Grid>
        </Box>
   
 
 




        </Container>
  )
}

export default InterestRate3