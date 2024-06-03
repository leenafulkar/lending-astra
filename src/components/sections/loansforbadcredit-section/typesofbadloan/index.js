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

                      Bad credit loans aren’t just limited to traditional, unsecured loans. Here are the types of loans you can get with bad credit.
                      </Typography>
                  </Grid>




                  <Grid item sx={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography sx={{ fontSize: '30px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px' }}>

                      Secured loans
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', marginBottom: '20px',padding:'20px', margin:'0px 0px 30px', bgcolor:'#EBF6E3' }}>

                      Best for consumers with bad credit who own valuable collateral they can afford to lose should they default on the loan.                      
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      With a <Link href="#" sx={{textDecoration:'none'}}>secured loan</Link>, you’ll have to offer your lender an asset as collateral, like a car, a home or even a savings account. Because secured loans require valuable collateral, they’re often easier to obtain than unsecured loans and generally offer better rates, since the lender is at less risk.                      
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to like:</span> Borrowers with poor credit may qualify for lower interest rates since they’re putting up collateral.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to watch out for: </span>If you default on a secured loan, your lender may legally confiscate your collateral to recover the money. And if your lender doesn’t recoup the cost of the loan by redeeming your assets, you may be responsible for the difference.

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

                      Best for borrowers who don’t have collateral to secure a loan.                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      Since <Link href="#" sx={{textDecoration:'none'}}>unsecured loan </Link>don’t require borrowers to offer up collateral, lenders of these types of loans mostly rely on factors such as credit history, income and debt obligations to determine your eligibility. Unlike secured loans, if you default on an unsecured loan, your lender cannot seize your assets.
                 </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to like:</span>  If you’re unable to repay your unsecured loan, your lender cannot seize your assets.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to watch out for: </span>Because these types of loans don’t require collateral, lenders that offer unsecured loans rely heavily on your creditworthiness when it comes to approval and offers. This means that if you don’t have good or excellent credit, you may have a hard time qualifying or receiving low interest rates. If you default, your credit score is likely to take a major hit.

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

                      Best for borrowers who have a supportive family member or friend willing to back their loan request.                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      If your credit score isn’t quite high enough to get you approved by a lender, consider getting the support of a loved one and file for a <Link href="#" sx={{textDecoration:'none'}}>joint personal loan</Link>. This enables you to apply for a personal loan with a second person.
                 </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to like:</span> This approach can make it easier for consumers with bad credit to be eligible for a loan, as it lowers the primary borrower’s risk.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to watch out for: </span>If you’re unable to make payments on this type of loan, not only can your lender attempt to collect from you, they can also try to collect on the loan from your co-borrower. This can also impact both of your and your co-borrower’s credit scores.

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

                      Best for those who can afford the sky-high fees and can pay the loan back right away — though it’s better to avoid this type of loan altogether.                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      <Link href="#" sx={{textDecoration:'none'}}>Payday loans </Link>are considered a more dubious type of loan, with astoundingly high fees and interest rates. These loans are typically less than $500 and are expected to be paid back within two to four weeks. Many people who take out payday loans often have to take out additional loans to pay off the original payday loan, trapping them in a cycle of debt.                 
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to like:</span>Payday loans don’t require credit checks, and you can often get your money right away.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to watch out for: </span>These types of loans are often predatory and may charge as much as 400% APR.

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

                      Best for those who are in financial emergencies and quickly need money.                      
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      <Link href="#" sx={{textDecoration:'none'}}>Cash advances </Link>are small, short-term loans that you can get from your credit card company. In these instances, you can withdraw cash from your credit card from your total balance.                  
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to like:</span>You won’t have to go through a credit check and can receive money fast if you need it.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to watch out for: </span>You may have to pay a fee, and you’ll pay much higher APRs than you would on typical credit card purchases.

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

                      Best for consumers who have a good history with their bank.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      If you have a strong relationship with your bank, you may be able to get what’s known as a bank agreement. This can take the form of a small, short-term loan or even the ability to overdraft on your account (up to a certain amount).                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to like:</span> If you’re in need of a short-term fix, you can use an already favorable relationship for financial assistance.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to watch out for: </span>This option may not be offered at all banks.

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

                      Best for those who need large sums of money and have equity in their home.                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      If you have bad credit, you may be able to cash in on the equity you’ve built into your home using a <Link href="#" sx={{textDecoration:'none'}}>home equity loan</Link>. These loans have fixed rates and are typically paid off between five and 30 years. Like personal loans, with a home equity loan, you’ll be given the money in a lump sum.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to like:</span>  Allows borrowers to take out up to 80% of their home’s value.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to watch out for: </span> Because you’re using your home as collateral, defaulting on your home equity loan may result in losing your home.

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

                      Best for borrowers who aren’t sure how much money they need and want to be able to borrow from their home’s equity over a period of time.                   
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      A <Link href="#" sx={{textDecoration:'none'}}>home equity line of credit </Link>(HELOC) works similarly to a credit card; consumers can borrow as much as they need (up to a limit) against their home’s equity and only have to pay back the amount they took out. Unlike home equity loans, HELOCs typically have variable interest rates.                   
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to like:</span>  Consumers can borrow and pay back as needed, and reuse the line of credit.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to watch out for: </span>Since interest rates are variable, borrowers may experience high monthly payments.

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

                      Best for those who are pursuing financing for educational purposes.                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      If you’re in school or preparing to attend college and have poor credit, you may be able to get<Link href="#" sx={{textDecoration:'none'}}> student loans </Link>for bad credit to help cover expenses. While many lenders don’t allow borrowers to use a personal loan toward education financing, lenders like Upstart do allow for it.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to like:</span> Some student loan lenders will cover up to the entire cost of your tuition.

                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>What to watch out for: </span>Some lenders have strict or vague forbearance and deferment programs — or none at all — in case you’re unable to repay the loan down the road.

                      </Typography>
                  </Grid>

{/* -------------------------------------------------------------------------------------- */}


           </Grid>

             </Box>
             </Container>



  )
}

export default Typesofbadloan