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
        
        Personal loans are a flexible form of credit that can be used to pay for almost any purpose. Keep in mind, your rates and terms may depend on how you plan to use the money.
        </Typography>
        </Grid>






        <Grid item sx={12}>
        <Typography className='green-dot' sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
         <Link href="#" sx={{textDecoration:'none'}}>Debt consolidation</Link>: If you’re struggling to manage your debt, unable to make on-time, consistent payments or just want to group various accounts, a debt consolidation loan may be right for you.        
        </Typography>
        </Grid>





        <Grid item sx={12}>
        <Typography className='green-dot' sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
         <Link  href="#" sx={{textDecoration:'none'}}>Credit card refinancing</Link>: By paying off your credit card with a lower-rate personal loan, you could save hundreds or even thousands of dollars in repayment.       
         </Typography>
        </Grid>







        <Grid item sx={12}>
        <Typography className='green-dot' sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        <Link  href="#"sx={{textDecoration:'none'}}>Home improvement loan</Link>: Homeowners have a wide variety of expenses. A personal loan could give you the funding you need in the short term without harming your finances in the long term.       
         </Typography>
        </Grid>






        <Grid item sx={12}>
        <Typography className='green-dot' sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        <Link  href="#"sx={{textDecoration:'none'}}>Large purchase loan</Link>: Personal loans can be used for a variety of expected and unexpected expenses, from wedding planning, moving costs, car repairs, medical bills and other bigger purchases.        
        </Typography>
        </Grid>
        </Grid>
        </Box>
        
        </Container>
  )
}

export default ReasonsToGetPL