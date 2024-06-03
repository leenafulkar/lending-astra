import React from 'react'
import { Container, Grid, Typography, useTheme, Box, Link } from '@mui/material'
import './index.css'

const InterestRate4 = () => {
    const theme = useTheme();

  return (
    <><Container sx={{marginTop:'40px'}}>
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
       How your credit score impacts auto financing rates
      </Typography>
        </Grid>




        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        While not the sole determinant, your credit score significantly influences your auto loan APR. Typically, borrowers with higher credit scores are statistically less prone to loan defaults. Consequently, lenders offer these borrowers lower financing rates as an incentive to secure their business.
       </Typography>
        </Grid>


         
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        Below, you'll find the average APR for new and used cars in the fourth quarter of 2023. Pay attention to the variance between super prime and deep subprime borrowers, particularly evident in used car loans.         </Typography>    
            </Grid>



              
        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        For instance, a super prime borrower would pay a total of $4,104 in interest on a $25,000 used car loan. In contrast, a deep subprime borrower would pay $12,515.        </Typography>    
            </Grid>



           
        </Grid>
        </Box>



        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={4} >
          <Typography className='interest-head'> Credit score <span style={{ color: '#08C177' }}>
            in&nbsp;&nbsp;&nbsp;(%)
          </span></Typography>
       
          
        </Grid>
        <Grid item xs={4} >
          <Typography  className='interest-head'>Average new car APR  </Typography>
        
          
        </Grid>
        <Grid item xs={4} >
          <Typography  className='interest-head'> Average used car APR</Typography>
        
          
        </Grid>
        </Grid>
        </Box>



        
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} >
        <Grid item xs={4} className='interest-rate-data' sx={{fontWeight:'bold'}}>Super prime (781-850)</Grid>
        <Grid item xs={4}  className='interest-rate-data'>5.64%</Grid>
        <Grid item xs={4}  className='interest-rate-data'>7.66%</Grid>
        </Grid>
        </Box>

        
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} >
        <Grid item xs={4} className='interest-rate-data'  sx={{fontWeight:'bold'}}>Prime (661-780)</Grid>
        <Grid item xs={4}  className='interest-rate-data'>7.01%</Grid>
        <Grid item xs={4}  className='interest-rate-data'>9.73%</Grid>
        </Grid>
        </Box>

        
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} >
        <Grid item xs={4} className='interest-rate-data'  sx={{fontWeight:'bold'}}>Nonprime (601-660)</Grid>
        <Grid item xs={4}  className='interest-rate-data'>9.60%</Grid>
        <Grid item xs={4}  className='interest-rate-data'>14.12%</Grid>
        </Grid>
        </Box>
 

       
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} >
        <Grid item xs={4} className='interest-rate-data'  sx={{fontWeight:'bold'}}>Subprime (501-600)</Grid>
        <Grid item xs={4}  className='interest-rate-data'>12.28%</Grid>
        <Grid item xs={4}  className='interest-rate-data'>18.89%</Grid>
        </Grid>
        </Box>
   
 
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} >
        <Grid item xs={4} className='interest-rate-data'  sx={{fontWeight:'bold'}}>Deep subprime (300-500)</Grid>
        <Grid item xs={4}  className='interest-rate-data'>14.78%</Grid>
        <Grid item xs={4}  className='interest-rate-data'>21.55%</Grid>
        </Grid>
        </Box>


       

        
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} >
        <Grid item xs={12} sx={{fontSize:'17px',fontFamily:"'Lato', sans-serif",padding:'11px', marginTop:'20px',color:'#454545'}}>Source:  Experian’s State of the Automotive Finance Market Q4 2023
       </Grid>
         </Grid>
        </Box>
   
        </Container>



{/* // ------------------------------------------------------------------------------------------ */}
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
Can I get auto financing with bad credit?
</Typography>
 </Grid>




 <Grid item sx={12}>
 <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
 
 Even if your credit score isn't flawless, you can still secure financing, though you may need to focus your search on bad credit car loans. Additionally, here are some strategies to increase your chances of approval:</Typography>
 </Grid>


  
 <Grid item sx={12}>
 <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
 
 <span style={{fontWeight:'bold'}}>Adding a cosigner or co-borrower: </span>Including a cosigner on your auto loan application could enhance your likelihood of approval. However, it's important to note that any late payments will impact both your credit and the cosigner's credit.</Typography>    
     </Grid>



       
 <Grid item sx={12}>
 <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
 
 <span style={{fontWeight:'bold'}}>Making a large down payment: </span> The less you have to borrow, the more likely it is that a lender may approve you. </Typography>    
     </Grid>



    
 </Grid>
 </Box>


</Container>


{/* -------------------------------------------------------------- */}
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
How we chose our picks for best auto loans
</Typography>
 </Grid>




 <Grid item sx={12}>
 <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
 
 We reviewed 25 auto lenders to determine the overall best 11 auto loan lenders. To make our list, lenders must offer auto loans with competitive APRs. From there, we prioritized the following factors:</Typography>
 </Grid>


  
 <Grid item sx={12}>
 <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
 
 <span style={{fontWeight:'bold'}}>Accessibility:  </span>We chose lenders with auto loans that are available to more people and require fewer conditions. This may include lower credit requirements, wider geographic availability, faster funding and easier and more transparent prequalification, preapproval and application processes.</Typography>    
     </Grid>



       
 <Grid item sx={12}>
 <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
 
 <span style={{fontWeight:'bold'}}>Rates and terms: </span> We prioritize lenders with more competitive starting fixed rates, fewer fees and greater loan options for repayment terms, amounts and APR discounts.</Typography>    
     </Grid>
          
 <Grid item sx={12}>
 <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
 
 <span style={{fontWeight:'bold'}}>Repayment experience: </span> For starters, we consider each lender’s reputation and business practices. We also favor lenders that have self-service payment options (such as a mobile app), provide reliable customer service and offer unique perks.</Typography>    
     </Grid>
          
 <Grid item sx={12}>
 <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
 
 Not all lenders we reviewed can be found on LendingTree’s loan marketplace, and your offers may or may not include lenders on this list. Our goal is to give you accurate, helpful information so you can find the best auto loan for your unique financial situation.</Typography>    
     </Grid>



    
 </Grid>
 </Box>


</Container>


</>


  )
}

export default InterestRate4