import React from 'react'
import { Container, Grid, Typography, useTheme, Box, Link } from '@mui/material'


const HowtogetPL = () => {
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
      How to get a personal loan
      </Typography>
        </Grid>




        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        Each lender will have a different application process for getting a personal loan as well as varied eligibility requirements. However, many lenders follow a similar approach when it comes to <Link href="#" sx={{textDecoration:'none'}}>applying for a personal loan</Link>.       
         </Typography>
        </Grid>


         
        <Grid item sx={12}>
        <Typography sx={{fontSize:'26px', color:'#101F30', fontFamily:"'Lato', sans-serif"}}>1. Check your credit score</Typography>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        Before you start shopping around for personal loan lenders, it’s important to check your <Link href="#" sx={{textDecoration:'none'}}>credit score</Link> to understand how creditworthy you are in the eyes of lenders.      
        </Typography>    
            </Grid>



              
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        Your credit score can give you an idea of the terms and interest rates you may qualify for. If you have a low score, you may want to work on <Link href="#" sx={{textDecoration:'none'}}>improving your credit score</Link> before applying for a loan.
        </Typography>           
        </Grid>

        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        To help assess how much debt you can afford, you can use a <Link href="#" sx={{textDecoration:'none'}}>personal loan calculator</Link> to estimate your minimum monthly payments and determine how much interest you’ll pay over the life of the loan.
        </Typography>           
        </Grid>

        
        <Grid item sx={12}>
        <Typography sx={{fontSize:'26px', color:'#101F30', fontFamily:"'Lato', sans-serif"}}>2. Shop around for lenders</Typography>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        Comparing lenders’ interest rates, fees, terms and loan amounts can save you money in the long run.</Typography>    
            </Grid>
       

        
            <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        Many lenders allow consumers to <Link href="#" sx={{textDecoration:'none'}}>prequalify for a loan</Link> — meaning you can check to see whether you’re eligible for a loan and what your potential rates and terms could be without any impact to your credit score.

          </Typography>    
            </Grid>




             
        <Grid item sx={12}>
        <Typography sx={{fontSize:'26px', color:'#101F30', fontFamily:"'Lato', sans-serif"}}>3. Verify your information</Typography>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        Once you select a lender, you’ll need to verify the information you provided in your loan application. Typically, lenders want to verify your identity, employment and income, so you may need to provide a government-issued form of identification, plus W-2s or pay stubs.</Typography>    
            </Grid>
       

        
            <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        During this part of the process, you’ll likely need to submit to a <Link href="#" sx={{textDecoration:'none'}}>hard credit pull</Link> before the lender offers you final approval. This can cause your credit score to temporarily drop by a handful of points.

          </Typography>    
            </Grid>


               
            <Grid item sx={12}>
        <Typography sx={{fontSize:'26px', color:'#101F30', fontFamily:"'Lato', sans-serif"}}>4. Close on your loan</Typography>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        Once your lender officially approves you for a loan, you’ll need to sign a personal loan agreement. The lender will either deposit the funds into your bank account or send you a check. The amount of time it takes to receive funds will depend on both your lender and bank.
          </Typography>    
            </Grid>


         
           
        </Grid>
        </Box>


        
   
 
 




        </Container>
  )
}

export default HowtogetPL