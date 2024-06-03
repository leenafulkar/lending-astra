import React from 'react'
import { Container, Grid, Typography, useTheme, Box, Link } from '@mui/material'

const ReasonsToGetPL = () => {
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
        Reasons to get a personal loan 
      </Typography>
        </Grid>



        
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        Personal loans offer versatility, allowing you to finance a wide range of expenses. However, it's important to note that your interest rates and repayment terms might be influenced by the specific purpose for which you intend to use the funds.
        </Typography>
        </Grid>






        <Grid item sx={12}>
        <Typography className='green-dot' sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
         <Link href="#" sx={{textDecoration:'none'}}>Debt consolidation</Link>: If you find it challenging to keep up with debt payments, struggle to maintain consistency with timely payments, or wish to streamline multiple accounts into one, a debt consolidation loan could be a suitable solution for your financial situation.
        </Typography>
        </Grid>





        <Grid item sx={12}>
        <Typography className='green-dot' sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
         <Link  href="#" sx={{textDecoration:'none'}}>Credit card refinancing</Link>: Paying off your credit card balance with a personal loan that offers a lower interest rate could potentially save you hundreds or even thousands of dollars in repayment.    
         </Typography>
        </Grid>







        <Grid item sx={12}>
        <Typography className='green-dot' sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        <Link  href="#"sx={{textDecoration:'none'}}>Home improvement loan</Link>: Homeowners encounter a multitude of expenses. Opting for a personal loan can provide the necessary funding in the short term without jeopardizing your long-term financial stability.     
         </Typography>
        </Grid>






        <Grid item sx={12}>
        <Typography className='green-dot' sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        <Link  href="#"sx={{textDecoration:'none'}}>Large purchase loan</Link>: Personal loans are versatile, serving for both anticipated and unforeseen expenses, such as wedding preparations, relocation expenses, vehicle repairs, medical bills, and other significant purchases.     
        </Typography>
        </Grid>
        </Grid>
        </Box>
        
        </Container>
  )
}

export default ReasonsToGetPL