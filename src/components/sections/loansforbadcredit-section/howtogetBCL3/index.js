import React from 'react'
import { Container, Grid, Typography, useTheme, Box, Link } from '@mui/material'
import '../howtogetBCL3/index.css'

const HowtoGetBCL3 = () => {
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
                          How to get a bad credit loan

                      </Typography>
                  </Grid>


                  <Grid item sx={12}>

                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

                      Getting a personal loan with poor or no credit is achievable. Yet, dedicating effort to improving your credit can lead to significant savings through lower interest rates. If you require a personal loan immediately, however, consider these strategies for finding the most suitable option tailored to your bad credit situation:                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>1.&nbsp;&nbsp;Check your credit score: </span>Monitoring your credit score enables you to assess potential lenders you might be eligible for. Utilize tools like LendingTree Spring to determine your standing and explore avenues to enhance your credit score. Additionally, obtain your credit reports from the bureaus via AnnualCreditReport.com.
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>2.&nbsp;&nbsp;Seek lenders that consider more than just your credit: </span> Lenders who consider factors beyond just your FICO Score when evaluating your creditworthiness may offer more accessible qualification criteria. For example, some lenders may factor in your income, employment history, and educational background.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>3.&nbsp;&nbsp;Prequalify for loans online: </span>With loan prequalification, you can assess your likelihood of loan approval and the potential rates available to you. This process doesn't impact your credit score since it only triggers a soft inquiry. It's a useful method for understanding your eligibility and estimating associated costs without affecting your credit standing.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>4.&nbsp;&nbsp;Compare loan offers: </span>After receiving multiple personal loan offers, it's essential to choose the most suitable option for your needs. This involves evaluating interest rates, lender fee arrangements, and available terms.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>5.&nbsp;&nbsp;Submit an application: </span>Once you've shortlisted your options, it's time to proceed with a formal application. This step involves a hard credit inquiry, temporarily impacting your credit score. Following your application submission, you may need to wait several business days to receive a loan decision. If your application is declined, you'll typically receive notification detailing the contributing factors.

                      </Typography>
                  </Grid>


{/* -------------------------------------------------------------------------- */}
                  
                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '29px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px' }}>
                      Where to find bad credit loans
                      </Typography>
                  </Grid>

               
                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      You can find personal loans for bad credit at various types of institutions. Explore LendingTree's personal loan marketplace to compare eligibility criteria, interest rates, terms, and loan amounts. </Typography>
                  </Grid>



                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      Here are several types of lenders available through our platform where you can begin your search:                      </Typography>
                   </Grid>



                   
                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Banks: </span>Certain banks, like Wells Fargo Bank, provide personal loans. However, you might need to visit a local branch to complete the application process. Although online applications offer convenience, visiting a branch can offer a more personal experience when applying for a personal loan.

                      </Typography>
                  </Grid>

                        

                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Credit unions: </span>Obtaining a personal loan from a credit union typically necessitates membership with that institution. For instance, with PenFed Credit Union, membership isn't mandatory to apply, but if you accept an offer, you'll need to become a PenFed member to finalize the loan.

                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Online lenders: </span>When applying for an online personal loan, the process is usually entirely remote. You'll complete an online application and then provide documentation to verify your identity, income, and address.

                      </Typography>
                  </Grid>

                  
             </Grid></Box>

         
      </Container>
        

         </>
  )
}


export default HowtoGetBCL3