import React from 'react'
import { Container, Grid, Typography, useTheme, Box, Link } from '@mui/material'
import '../howtospotscams3/index.css'
const Howtospotscam3 = () => {
    const theme = useTheme();

  return (
    <><Container sx={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
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
                         How to spot scams for bad credit loans

                      </Typography>
                  </Grid>


                  <Grid item sx={12}>

                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

                      Unfortunately, some poor-credit loans really are too good to be true. To avoid being scammed by a shady lender, be on the lookout for the following signs:                     
                       </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>The lender demands you pay fees upfront: </span>A legitimate lending institution won’t ask for payment before you’ve been approved and receive your loan. While some trustworthy lenders may require that you pay an application fee or a credit report fee, these are typically taken out of the loan you borrowed.
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>The lender requires that you act immediately: </span> If a lender is pressuring you to make a decision within a small window of time, that may be a red flag. A proper lender won’t corner you and understands that the decision to take out a loan may require some time to think over.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>The lender has no physical address: </span>A reputable lender will have the company’s physical address listed on its website (not a post office box), and you’ll be able to confirm it by using Google Maps or a similar app.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>The lender is not registered in your state: </span>Whether a lender is online or in person, in order to do business in your state, it must be registered in your state, according to the Federal Trade Commission (FTC). Lenders should note which states they are or aren’t registered with. If you’re suspicious of a scam, you can reach out to your <Link href="#" sx={{ textDecoration: 'none' }}>state attorney general’s office</Link> to find out if that lender is registered where you live.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography  className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>The lender contacts you first: </span>If you did not initiate contact with the lender, you may not want to answer any phone calls or other types of communication — it may be a ploy to get your financial information. A credible lender won’t cold call you, asking you to disclose your personal information.

                      </Typography>
                  </Grid>


                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>The lender doesn’t have a secure website: </span>Some scammers may attempt to steal your information through their website. When researching bad credit loans, be sure to check that a website’s URL has the letter “s” following “http,” as well as a padlock icon on pages that ask you for your financial information.

                      </Typography>
                  </Grid>


                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>The lender doesn’t check your payment history: </span>A reputable lender won’t guarantee your approval for a loan. Legitimate lending institutions will first want to see your payment history, your credit and DTI ratio and other financial information.

                      </Typography>
                  </Grid>


                  
                  <Grid item sx={12}>
                      <Typography  sx={{ fontSize: '29px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px' }}>
                      What to do if you’ve been scammed
                      </Typography>
                  </Grid>

               
                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      If you find out you’ve been scammed, the first step is to contact law enforcement and file a police report. Unfortunately, there may not be much they can do, but you’ll want to document the crime as much as possible.                  
                      </Typography>
                      </Grid>



                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      Once you’ve filed a police report, you should also report the scam to the <Link href="#" sx={{textDecoration:'none'}}>FTC Internet Crime Complaint Center</Link>. By reporting it, you could potentially prevent others from being scammed in the future.                      </Typography>
                   </Grid>


                  
             </Grid></Box>

         
      </Container>
        

         </>
  )
}


export default Howtospotscam3