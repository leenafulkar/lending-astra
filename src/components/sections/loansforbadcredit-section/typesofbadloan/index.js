import React from 'react'
import { Container, Grid, Typography, useTheme, Box, Link} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';




const Typesofbadloan = () => {
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

                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

                      Bad credit loans extend beyond conventional unsecured loans. Here are the various types of loans accessible to individuals with poor credit.
                      </Typography>
                  </Grid>




                  <Grid item sx={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography sx={{ fontSize: '30px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px' }}>

                      Secured loans
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px',padding:'20px', margin:'0px 0px 30px', bgcolor:'#EBF6E3' }}>

                      Ideal for individuals with poor credit who possess valuable collateral they can afford to forfeit in case of loan default.                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      In a secured loan, you'll need to provide your lender with an asset as collateral, such as a car, a home, or even a savings account. Secured loans are typically easier to secure than unsecured loans and often come with better rates because the lender faces less risk due to the valuable collateral.                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to like:</span>Individuals with poor credit might qualify for lower interest rates because they're offering collateral.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to watch out for: </span>In the event of default on a secured loan, your lender has the legal right to seize your collateral to recoup the funds. If the sale of your assets doesn't cover the loan amount, you might be liable for the remaining balance.

                      </Typography>
                  </Grid>

{/* -------------------------------------------------------------------------------------- */}

<Grid item sx={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography sx={{ fontSize: '30px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px' }}>

                      Unsecured loans
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px',padding:'20px', margin:'0px 0px 30px', bgcolor:'#EBF6E3' }}>

                      Ideal for borrowers who lack collateral to secure a loan.                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      As unsecured loans don't necessitate collateral from borrowers, lenders primarily assess factors like credit history, income, and debt obligations to determine eligibility. Unlike secured loans, in the event of default on an unsecured loan, lenders cannot seize your assets.
                 </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to like:</span>  If you're unable to repay your unsecured loan, your lender cannot seize your assets.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to watch out for: </span>Due to the absence of collateral, lenders providing unsecured loans heavily weigh your creditworthiness in the approval process and in determining offers. Consequently, individuals without good or excellent credit may struggle to qualify or secure favorable interest rates. Defaulting on such loans typically results in a significant negative impact on your credit score.

                      </Typography>
                  </Grid>

{/* -------------------------------------------------------------------------------------- */}
<Grid item sx={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography sx={{ fontSize: '30px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px' }}>

                      Joint personal loans
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px',padding:'20px', margin:'0px 0px 30px', bgcolor:'#EBF6E3' }}>

                      Ideal for borrowers who have a supportive family member or friend willing to cosign their loan application.  </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      If your credit score falls short of lender requirements, contemplate seeking the assistance of a loved one and apply for a joint personal loan. This option allows you to submit a personal loan application alongside another individual.
                 </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to like:</span> This strategy can facilitate loan eligibility for consumers with poor credit by reducing the risk for the primary borrower.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to watch out for: </span>If you default on this loan type, your lender can pursue repayment from both you and your co-borrower, potentially affecting both of your credit scores.

                      </Typography>
                  </Grid>

{/* -------------------------------------------------------------------------------------- */}
<Grid item sx={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography sx={{ fontSize: '30px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px' }}>

                      Payday loans
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px',padding:'20px', margin:'0px 0px 30px', bgcolor:'#EBF6E3' }}>

                      Ideal for individuals capable of covering the exorbitant fees and repaying the loan promptly. However, it's advisable to steer clear of this loan type altogether.</Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      Payday loans are often regarded as questionable due to their remarkably high fees and interest rates. Typically amounting to less than $500, these loans are expected to be repaid within two to four weeks. Unfortunately, many borrowers find themselves trapped in a cycle of debt, needing to take out additional loans to settle the original payday loan.                
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to like:</span>Payday loans typically don't involve credit checks, and you can often receive the funds immediately.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to watch out for: </span>Such loans are frequently predatory and may carry interest rates as high as 400% APR.

                      </Typography>
                  </Grid>

{/* -------------------------------------------------------------------------------------- */}
<Grid item sx={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography sx={{ fontSize: '30px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px' }}>

                      Cash advances
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px',padding:'20px', margin:'0px 0px 30px', bgcolor:'#EBF6E3' }}>

                      Ideal for individuals facing financial emergencies and urgently requiring funds.                      
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      Cash advances are short-term loans obtained from your credit card company, allowing you to withdraw cash from your available credit line.                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to like:</span>No credit check is required, and you can swiftly access funds if needed.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to watch out for: </span>You might incur a fee, and the APRs for cash advances are substantially higher compared to standard credit card purchases.

                      </Typography>
                  </Grid>

{/* -------------------------------------------------------------------------------------- */}
<Grid item sx={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography sx={{ fontSize: '30px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px' }}>

                      Bank agreements
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px',padding:'20px', margin:'0px 0px 30px', bgcolor:'#EBF6E3' }}>

                      Ideal for consumers with a positive banking history.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      If you maintain a solid relationship with your bank, you might qualify for a bank agreement, which could include options such as a small, short-term loan or overdraft privileges on your account (up to a specified limit).</Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to like:</span> If you require a temporary solution, you can leverage an existing positive relationship to obtain financial support.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to watch out for: </span>This option might not be available at every bank.

                      </Typography>
                  </Grid>

{/* -------------------------------------------------------------------------------------- */}
<Grid item sx={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography sx={{ fontSize: '30px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px' }}>

                      Bad credit home equity loans
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px',padding:'20px', margin:'0px 0px 30px', bgcolor:'#EBF6E3' }}>

                      Ideal for individuals seeking substantial amounts of funds and possessing equity in their home.     </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      Individuals with bad credit might tap into the equity accrued in their home through a home equity loan. These loans offer fixed rates and are generally repaid over a period ranging from five to 30 years. Similar to personal loans, a home equity loan provides the borrowed funds in a lump sum.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to like:</span>  Enables borrowers to access up to 80% of their home's appraised value.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to watch out for: </span> Since your home serves as collateral, defaulting on your home equity loan could lead to the loss of your property.

                      </Typography>
                  </Grid>

{/* -------------------------------------------------------------------------------------- */}
<Grid item sx={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography sx={{ fontSize: '30px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px' }}>

                      HELOC loans for bad credit
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px',padding:'20px', margin:'0px 0px 30px', bgcolor:'#EBF6E3' }}>

                      Ideal for borrowers who are uncertain about the exact amount of funds needed and prefer the flexibility to borrow from their home's equity over a period of time.                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      A home equity line of credit (HELOC) operates akin to a credit card; borrowers can access funds as needed (up to a predetermined limit) based on their home's equity and are required to repay only the amount withdrawn. Unlike home equity loans, HELOCs generally feature variable interest rates.                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to like:</span>  Consumers have the flexibility to borrow and repay as necessary, and can reuse the line of credit as needed.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to watch out for: </span>Due to variable interest rates, borrowers might encounter elevated monthly payments.

                      </Typography>
                  </Grid>

{/* -------------------------------------------------------------------------------------- */}
<Grid item sx={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography sx={{ fontSize: '30px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px' }}>

                      Student loans for bad credit
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px',padding:'20px', margin:'0px 0px 30px', bgcolor:'#EBF6E3' }}>

                      Ideal for individuals seeking financing for educational pursuits.                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      If you're currently in school or planning to enroll in college, and you have poor credit, you might still qualify for student loans designed for individuals with bad credit to assist with expenses. While some lenders restrict the use of personal loans for educational financing, lenders such as Upstart permit it.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to like:</span> Certain student loan lenders may finance the entire cost of your tuition.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to watch out for: </span>Some lenders offer rigid or unclear forbearance and deferment programs, or may not offer them at all, in the event you're unable to repay the loan in the future.

                      </Typography>
                  </Grid>

{/* -------------------------------------------------------------------------------------- */}


           </Grid>

             </Box>
             </Container>



  )
}

export default Typesofbadloan