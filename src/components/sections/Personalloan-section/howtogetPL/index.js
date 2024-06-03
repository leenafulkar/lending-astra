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
        
        While each lender's application process and eligibility criteria for personal loans may differ, many lenders generally adhere to a similar procedure.         </Typography>
        </Grid>


         
        <Grid item sx={12}>
        <Typography sx={{fontSize:'26px', color:'#101F30', fontFamily:"'Lato', sans-serif"}}>1. Check your credit score</Typography>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        Prior to beginning your search for personal loan lenders, it's crucial to check your credit score to gauge your creditworthiness from the perspective of lenders.        </Typography>    
            </Grid>



              
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        Your credit score can provide insight into the terms and interest rates you might be eligible for. If you have a low score, it might be beneficial to focus on enhancing your credit score before seeking a loan.        </Typography>           
        </Grid>

        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        To evaluate your debt affordability, utilize a personal loan calculator. This tool can help estimate your minimum monthly payments and ascertain the total interest you'll pay throughout the loan term.        </Typography>           
        </Grid>

        
        <Grid item sx={12}>
        <Typography sx={{fontSize:'26px', color:'#101F30', fontFamily:"'Lato', sans-serif"}}>2. Shop around for lenders</Typography>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        By comparing lenders' interest rates, fees, terms, and loan amounts, you can potentially save money over the long term.</Typography>    
            </Grid>
       

        
            <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        Numerous lenders offer prequalification for loans, enabling you to assess your eligibility and potential rates and terms without affecting your credit score.
          </Typography>    
            </Grid>




             
        <Grid item sx={12}>
        <Typography sx={{fontSize:'26px', color:'#101F30', fontFamily:"'Lato', sans-serif"}}>3. Verify your information</Typography>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        After choosing a lender, you'll be required to confirm the details provided in your loan application. Usually, lenders seek verification of your identity, employment status, and income. Therefore, you may need to furnish a government-issued identification along with W-2s or pay stubs.</Typography>    
            </Grid>
       

        
            <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        During this stage of the process, the lender will likely conduct a hard credit inquiry before granting you final approval. This action may result in a temporary decrease of a few points in your credit score.
          </Typography>    
            </Grid>


               
            <Grid item sx={12}>
        <Typography sx={{fontSize:'26px', color:'#101F30', fontFamily:"'Lato', sans-serif"}}>4. Close on your loan</Typography>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        Upon official approval from your lender, you'll be required to sign a personal loan agreement. Subsequently, the lender will either deposit the funds directly into your bank account or issue a check to you. The timeframe for receiving the funds will vary based on both your lender's policies and your bank's processing times.          </Typography>    
            </Grid>


         
           
        </Grid>
        </Box>


        
   
 
 




        </Container>
  )
}

export default HowtogetPL