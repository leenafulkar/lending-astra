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
        
        Given the abundance of choices available in the personal loan market, it's crucial to compare terms and pricing offered by various lenders. This ensures you secure a loan that aligns with your circumstances and assists you in achieving your objectives.        </Typography>
        </Grid>


         
        <Grid item sx={12}>
        <Typography className='green-dot'  sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        <span style={{ color: '#454545', fontWeight: 'bold' }}>APR</span>: The Annual Percentage Rate (APR) of a personal loan encompasses the complete expense of the loan, comprising both the interest rate and any associated fees. It's imperative to compare APRs from multiple lenders before making a commitment, as this factor significantly influences the total amount you'll repay throughout the loan term.    
         </Typography>    
            </Grid>



              
        <Grid item sx={12}>
        <Typography className='green-dot'  sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        <span style={{ color: '#454545', fontWeight: 'bold' }}>Fees</span>: Common fees associated with personal loans include origination fees, late fees, and returned payment fees. An origination fee, charged by some lenders, is a one-time administrative fee deducted from your loan balance upon receiving your lump sum. Another fee to be mindful of is a prepayment penalty, which is incurred for paying off a loan ahead of schedule. While most personal loan lenders do not impose prepayment penalties, it's always wise to confirm with your lender to ensure clarity.    
        </Typography>           
        </Grid>



              
        <Grid item sx={12}>
        <Typography className='green-dot'  sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        <span style={{ color: '#454545', fontWeight: 'bold' }}>Terms</span>: Your repayment terms significantly impact the total cost of your personal loan. Opting for a longer loan term results in smaller monthly payments but entails paying more interest over time. Conversely, a shorter loan term leads to lower overall interest expenses, albeit with higher monthly payments. As a general guideline, it's advisable to choose the shortest loan term that aligns with your financial capabilities.    
        </Typography>           
        </Grid>




              
        <Grid item sx={12}>
        <Typography className='green-dot'  sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        <span style={{ color: '#454545', fontWeight: 'bold' }}>Funding timeline</span>: The duration to obtain a personal loan varies among lenders. Upon approval and signing of your loan contract, some lenders may disburse your funds on the same day. Typically, it takes one to seven business days after approval before you receive your funds.     
        </Typography>           
        </Grid>




              
        <Grid item sx={12}>
        <Typography className='green-dot'  sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        <span style={{ color: '#454545', fontWeight: 'bold' }}>Unique perks</span>: Certain lenders provide unique benefits to their borrowers, such as zero-fee loans, autopay discounts, or the ability to skip a payment after a specified number of on-time payments. These perks can lead to savings throughout the loan term. When evaluating lenders, inquire about any special rate discounts or advantages they offer.    
        </Typography>           
        </Grid>




        

           
        </Grid>
        </Box>



        


       




        
     

        </Container>
  )
}

export default HowtocomparePL