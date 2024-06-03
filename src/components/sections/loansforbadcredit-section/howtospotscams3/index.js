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

                      Regrettably, some loans for individuals with poor credit are indeed too good to be true. To steer clear of being scammed by an unscrupulous lender, watch out for the following warning signs:                       </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>The lender demands you pay fees upfront: </span>A reputable lending institution won't request payment before you've been approved and received your loan. Although some trustworthy lenders may require an application fee or a credit report fee, these are typically deducted from the loan amount you borrow.
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>The lender requires that you act immediately: </span> If a lender is urging you to make a decision within a short timeframe, that could signal a red flag. A legitimate lender won't pressure you and recognizes that the decision to take out a loan may necessitate some time for consideration.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>The lender has no physical address: </span>A trustworthy lender will display the company's physical address on its website (not just a post office box), and you can verify it using Google Maps or a similar application.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>The lender is not registered in your state: </span>According to the Federal Trade Commission (FTC), whether a lender operates online or in person, it must be registered in your state to conduct business there. Lenders should indicate the states they are registered in or not registered in. If you're wary of a potential scam, you can contact your state attorney general's office to confirm if the lender is registered in your state.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography  className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>The lender contacts you first: </span>If you didn't initiate contact with the lender, you might want to avoid responding to any phone calls or other forms of communication, as it could be an attempt to obtain your financial information. A reputable lender wouldn't contact you out of the blue, soliciting personal information over the phone.

                      </Typography>
                  </Grid>


                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>The lender doesn’t have a secure website: </span>When researching bad credit loans, be vigilant for scammers who may try to steal your information via their website. Ensure that a website's URL includes the letter "s" after "http," and look for a padlock icon on pages where you're asked to provide financial information.

                      </Typography>
                  </Grid>


                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>The lender doesn’t check your payment history: </span>A legitimate lender will not promise guaranteed approval for a loan. Trustworthy lending institutions typically assess factors such as your payment history, credit score, debt-to-income ratio, and other financial information before making a decision.

                      </Typography>
                  </Grid>


                  
                  <Grid item sx={12}>
                      <Typography  sx={{ fontSize: '29px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px' }}>
                      What to do if you’ve been scammed
                      </Typography>
                  </Grid>

               
                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      If you discover you've been scammed, the initial step is to reach out to law enforcement and file a police report. While there may be limitations to what they can do, it's crucial to document the crime as thoroughly as possible.                      </Typography>
                      </Grid>



                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      After filing a police report, it's advisable to report the scam to the FTC Internet Crime Complaint Center as well. By doing so, you may help prevent others from falling victim to the same scam in the future.</Typography>
                   </Grid>


                  
             </Grid></Box>

         
      </Container>
        

         </>
  )
}


export default Howtospotscam3