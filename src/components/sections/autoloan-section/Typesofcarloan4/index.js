import React from 'react'
import { Container, Grid, Typography, useTheme, Box, Link ,Button,Stack} from '@mui/material'
import '../Typesofcarloan4/index.css'



const TypesofCarLoan4 = () => {
    const theme = useTheme();

  return (
    <Container sx={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
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
                        
                    Types of loans for bad credit

                      </Typography>
                  </Grid>

                  <Grid item sx={12}>
                      <Typography  sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      While all auto loans serve the same purpose of assisting you in financing a car through monthly payments, it's beneficial to acquaint yourself with the various types of auto loans. This knowledge will aid you in determining which type of loan best suits your needs when shopping for financing.                  </Typography>
                  </Grid>



                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                         <span style={{ color: '#454545', fontWeight: 'bold' }}>New auto loan: </span> New car loans typically feature the lowest interest rates available. Numerous banks, credit unions, and online lenders extend loans specifically tailored for new cars. Additionally, in certain instances, you may even secure financing directly from the vehicle manufacturer, such as Toyota Motor Credit.
                      </Typography>
                  </Grid>
                  
                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                         <span style={{ color: '#454545', fontWeight: 'bold' }}>Used auto loan: </span> Used auto loans generally come with slightly higher interest rates compared to loans for new cars. Additionally, some lenders impose restrictions on the vehicles they finance. For example, certain lenders may decline financing for vehicles that are 10 years old or older.
                      </Typography>
                  </Grid>
                  
                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                         <span style={{ color: '#454545', fontWeight: 'bold' }}>Private-party auto loan: </span> Securing financing for a car from an individual rather than a dealership necessitates a private-party auto loan. While these loans can be more challenging to obtain, you may have success by exploring options with banks and credit unions.
                      </Typography>
                  </Grid>
                  
                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                         <span style={{ color: '#454545', fontWeight: 'bold' }}>Auto refinance loan: </span> Refinancing an auto loan involves substituting your existing loan with a new one, ideally offering improved terms. This strategy can prove beneficial if interest rates have declined since your original car purchase or if you've enhanced your credit score.
                      </Typography>
                  </Grid>
                  
                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                         <span style={{ color: '#454545', fontWeight: 'bold' }}>Lease buyout: </span>Rather than returning your leased vehicle at the end of your contract, you have the option to purchase the car using a lease buyout loan.
                      </Typography>
                  </Grid>

                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                         <span style={{ color: '#454545', fontWeight: 'bold' }}>Cash-out refinance loan: </span>A cash-out refinance auto loan enables you to refinance your existing loan while also borrowing additional cash from the equity you've built up in your car, which represents the portion of the vehicle's value you've already paid off.
                      </Typography>
                  </Grid>


  

           </Grid>

             </Box>
             </Container>



  )
}

export default TypesofCarLoan4