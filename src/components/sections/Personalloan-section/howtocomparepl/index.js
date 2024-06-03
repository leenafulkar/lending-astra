import React from 'react'
import { Container, Grid, Typography, useTheme, Box, Link } from '@mui/material'
import '../../Personalloan-section/benifitsofPL/index.css'



const HowtocomparePL = () => {
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
     How to compare personal loans
      </Typography>
        </Grid>




        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        With so many options to choose from in the personal loan marketplace, it’s important to compare terms and pricing from a variety of lenders to make sure you get a loan that fits your situation and helps you meet your goals.        
        </Typography>
        </Grid>


         
        <Grid item sx={12}>
        <Typography className='green-dot'  sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        <span style={{ color: '#454545', fontWeight: 'bold' }}>APR</span>: The <Link href="#" sx={{textDecoration:'none'}}> annual percentage rate</Link> (APR) of a personal loan is the total cost of a loan, including the interest rate and any fees. Be sure to compare APRs from multiple lenders before committing to one, as this can play a huge role in how much you end up paying over the life of the loan.       
         </Typography>    
            </Grid>



              
        <Grid item sx={12}>
        <Typography className='green-dot'  sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        <span style={{ color: '#454545', fontWeight: 'bold' }}>Fees</span>: The most common fees encountered with personal loans are <Link href="#" sx={{textDecoration:'none'}}> origination fees</Link>, late fees and returned payment fees. Some lenders charge an origination fee, which is a one-time administrative fee that’s taken out of the total balance of your loan when you receive your lump sum. Another fee to watch out for is a <Link href="#" sx={{textDecoration:'none'}}>prepayment penalty</Link>, which is charged for a loan that’s paid back early. Most personal loan lenders do not charge prepayment penalties, but it never hurts to check with your lender to be sure.        
        </Typography>           
        </Grid>



              
        <Grid item sx={12}>
        <Typography className='green-dot'  sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        <span style={{ color: '#454545', fontWeight: 'bold' }}>Terms</span>: Your loan repayment terms can also determine how much you spend overall on your personal loan. With a long loan term, you’ll make smaller monthly payments but you’ll pay more in interest by the time you’re done paying off the loan. However, if you have a  <Link href="#" sx={{textDecoration:'none'}}>short-term loan</Link>, you’ll pay less in interest overall but your monthly payments will be higher. The best rule of thumb is to apply for the shortest loan term you can reasonably afford.       
        </Typography>           
        </Grid>




              
        <Grid item sx={12}>
        <Typography className='green-dot'  sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        <span style={{ color: '#454545', fontWeight: 'bold' }}>Funding timeline</span>: <Link href="#" sx={{textDecoration:'none'}}> How long does it take to get a personal loan</Link>? The amount of time it takes varies from lender to lender. Once you’re approved and sign your loan contract, some lenders may disburse your loan funds that same day. Generally, it takes one to seven business days after official approval before you receive your funds.        
        </Typography>           
        </Grid>




              
        <Grid item sx={12}>
        <Typography className='green-dot'  sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        <span style={{ color: '#454545', fontWeight: 'bold' }}>Unique perks</span>: Some lenders offer special perks to their borrowers, including <Link href="#" sx={{textDecoration:'none'}}>zero-fee loans</Link>, autopay discounts or even the option to skip a payment after you’ve made a certain number of in-full, on-time payments. Such features can save you money over the life of your loan. When comparing lenders, ask about any special rate discounts or benefits.        
        </Typography>           
        </Grid>




        

           
        </Grid>
        </Box>



        


       




        
     

        </Container>
  )
}

export default HowtocomparePL