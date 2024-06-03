import React from 'react'
import { Container, Grid, Typography, useTheme, Box, Link } from '@mui/material'
import '../scoreimpacts/index.css'
const ScoreImpacts = () => {
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
        How your credit score impacts loan rates
      </Typography>
        </Grid>




        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        In acquiring most forms of credit, such as personal loans, a higher credit score generally correlates with more favorable interest rates offered by lenders.</Typography>
        </Grid>


         
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        Lenders assess your credit score to gauge the probability of you repaying a loan promptly and fully. Every time a lender extends a loan, they assume a level of risk; higher credit scores indicate lower perceived risk.
       </Typography>    
            </Grid>



              
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        Nevertheless, borrowers seeking a personal loan with poor credit can still locate lenders willing to accommodate them. It's important to note that you may not qualify for the lender's most competitive interest rates in this scenario.
      </Typography>    
            </Grid>

            <Grid item sx={12}>
        <Typography sx={{fontSize:'26px', fontFamily:"'Lato', sans-serif", color:'#101F30', marginBottom:'20px',fontWeight:'bold'}}>
        
        Average APR and loan amounts by credit score
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


export default ScoreImpacts