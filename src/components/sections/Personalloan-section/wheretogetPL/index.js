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
        
        The <Link href="#" sx={{textDecoration:'none'}}> best place to get a personal loan</Link> will depend on your borrowing needs. Typically, there are three types of financial institutions that offer personal loans.       
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
        
        Before launching into your search for a loan, consider checking with your current bank first. Some banks, like <Link href="#" sx={{textDecoration:'none'}}>Wells Fargo Bank</Link>, require you to be a current customer in order to access personal loan products.        
        </Typography>           
        </Grid>


              
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        The personal loan application process may take a bit longer to complete compared to online lenders, but you may access perks like no-fee loans. Banks may also require that you visit a local branch in person in order to close on your loan.
        </Typography>           
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
        
        To get a loan from a credit union, you’ll typically need to become a member of the credit union first. This may require a small fee or deposit. Check membership requirements before applying for a <Link href="#" sx={{textDecoration:'none'}}>credit union personal loan</Link>, as some credit unions only cater to certain groups, such as people with military ties.
        </Typography>           
        </Grid>


        
             
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        Credit unions also typically tend to offer smaller loan amounts than banks and online lenders. Navy Federal Credit Union, for instance, offers loans as small as $250. Another benefit to credit unions is that the APR is capped at 18%, which is particularly good news if you’re having trouble finding lower rates elsewhere.

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
        
        <Link href="#" sx={{textDecoration:'none'}}>Personal loans online </Link>offer flexibility to consumers who don’t want to become a credit union member or bank customer. Because everything is done online and you don’t have to worry about creating a membership or banking account, online lenders may take less time to approve and fund your personal loan.

       </Typography>           
        </Grid>


         
           
        </Grid>
        </Box>


        
   
 
 




        </Container>
  )
}

export default WheretogetPL