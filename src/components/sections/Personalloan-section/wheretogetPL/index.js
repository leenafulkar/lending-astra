import React from 'react'
import { Container, Grid, Typography, useTheme, Box, Link } from '@mui/material'
import '../wheretogetPL/index.css'
import BankIcon from '@mui/icons-material/AccountBalance';
import { Handshake } from '@mui/icons-material';
import { Computer } from '@mui/icons-material';




const WheretogetPL = () => {
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
       Where to get a personal loan
      </Typography>
        </Grid>




        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        Where you should obtain a personal loan depends on your specific borrowing requirements. Generally, personal loans are available from three types of financial institutions.        
         </Typography>
        </Grid>


        

         
      <Grid item sx={12}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <BankIcon sx={{ fontSize: 32, color: '#08C177', verticalAlign: 'bottom',alignItems:'baseline',marginRight:'5px'  }} />
          <Typography sx={{
            fontSize: '26px',
            color: '#101F30',
            fontFamily: "'Lato', sans-serif"
          }}>
            Banks
          </Typography>
          
        </Box>
          
      <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
      Before embarking on your quest for a loan, it's wise to start by checking with your current bank. Certain banks, such as Wells Fargo Bank, may require you to have an existing account in order to access their personal loan offerings.        </Typography>           
        </Grid>


              
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        Applying for a personal loan through traditional banks might entail a slightly lengthier process compared to online lenders, but it can come with benefits such as no-fee loans. Additionally, banks may insist on an in-person visit to a local branch to finalize your loan.        </Typography>           
        </Grid>



             
        <Grid item sx={12}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Handshake sx={{ fontSize: 36, color: '#08C177', marginRight: '5px' }} />
          <Typography sx={{
            fontSize: '26px',
            color: '#101F30',
            fontFamily: "'Lato', sans-serif"
          }}>
           Credit unions
          </Typography>
        </Box>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        In order to secure a loan from a credit union, you'll usually need to become a member first. This may entail a small fee or deposit. Prior to applying for a credit union personal loan, it's essential to review their membership requirements, as some credit unions serve specific groups, such as individuals with military affiliations.        </Typography>           
        </Grid>


        
             
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        Credit unions often provide smaller loan amounts compared to banks and online lenders. For instance, Navy Federal Credit Union offers loans starting as low as $250. Another advantage of credit unions is that they cap the Annual Percentage Rate (APR) at 18%, which is beneficial if you're struggling to secure lower rates elsewhere.
       </Typography>           
        </Grid>



         
             
      
        <Grid item xs={12}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Computer sx={{ fontSize: 36, color: '#08C177', marginRight: '5px' }} />
          <Typography sx={{
            fontSize: '26px',
            color: '#101F30',
            fontFamily: "'Lato', sans-serif"
          }}>
            Online lender
          </Typography>
        </Box>
           <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
           Online personal loans provide flexibility to consumers who prefer not to join a credit union or become a bank customer. Since the entire process is conducted online and doesn't require creating a membership or banking account, online lenders may approve and fund your personal loan more quickly.
       </Typography>           
        </Grid>


         
           
        </Grid>
        </Box>


        
   
 
 




        </Container>
  )
}

export default WheretogetPL