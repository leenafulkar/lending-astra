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
                      All auto loans do essentially the same thing — help you pay for a car via monthly payments. Still, you should familiarize yourself with the different <Link href="#" sx={{textDecoration:'none'}}> types of auto loans</Link> so you know which one to shop for.
                  </Typography>
                  </Grid>



                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                         <span style={{ color: '#454545', fontWeight: 'bold' }}>New auto loan: </span> New car loans tend to have the lowest rates. Many banks, credit unions and online lenders offer loans for new cars. In some cases, you could even get a loan from your vehicle’s manufacturer (such as<Link href="#" sx={{textDecoration:'none'}}>Toyota Motor Credit</Link>).
                      </Typography>
                  </Grid>
                  
                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                         <span style={{ color: '#454545', fontWeight: 'bold' }}>Used auto loan: </span> <Link href="#" sx={{textDecoration:'none'}}>Used auto loans </Link>usually have slightly higher rates than new car loans. Also, some lenders have rules about the vehicles they will finance. For instance, some won’t finance a vehicle that is 10 years old or older.
                      </Typography>
                  </Grid>
                  
                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                         <span style={{ color: '#454545', fontWeight: 'bold' }}>Private-party auto loan: </span> Financing a car from a person instead of a dealership requires a<Link href="#" sx={{textDecoration:'none'}}> Private-party auto loan. </Link>These loans can be harder to find, but you may have luck searching with banks and credit unions.
                      </Typography>
                  </Grid>
                  
                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                         <span style={{ color: '#454545', fontWeight: 'bold' }}>New auto loan: </span> <Link href="#" sx={{textDecoration:'none'}}>Refinancing an auto loan </Link> means you’re replacing your current loan with a new one (hopefully with better terms). Refinancing can be a good idea if rates have dropped since you bought your car or if you’ve improved your credit score.
                      </Typography>
                  </Grid>
                  
                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                         <span style={{ color: '#454545', fontWeight: 'bold' }}>New auto loan: </span>Instead of turning in your lease at the end of your contract, you could choose to buy the car with a<Link href="#" sx={{textDecoration:'none'}}>lease buyout loan</Link>.
                      </Typography>
                  </Grid>

                  <Grid item sx={12}>
                      <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                         <span style={{ color: '#454545', fontWeight: 'bold' }}>New auto loan: </span>A <Link href="#" sx={{textDecoration:'none'}}> cash-out refinance auto loan </Link>is a refinance loan that also lets you borrow cash from your equity. Equity is what you’ve already paid toward your car.
                      </Typography>
                  </Grid>


  

           </Grid>

             </Box>
             </Container>



  )
}

export default TypesofCarLoan4