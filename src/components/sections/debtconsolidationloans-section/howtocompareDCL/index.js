import React from 'react'
import { Container,Box,Grid,Typography,Link,useTheme,Icon,Stack } from '@mui/material'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';



const HowtocompareDCL = () => {
    const theme = useTheme();
  return (
   <> <Container sx={{ marginTop: '80px' }}>
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
                       How to compare debt consolidation loans   
                      </Typography>
                  </Grid>

                  


                  <Grid item sx={12}>

                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

                      Why bother obtaining multiple loan offers if you're unsure how to evaluate them? When assessing your options, focus particularly on:
                  </Typography>
                  </Grid>

                 
                <Grid item sx={12}>
                <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                <Icon style={{ verticalAlign: 'baseline', marginLeft: '5px',color:'#08C177' }}><PercentOutlinedIcon /></Icon>
                <span style={{ color: '#454545', fontWeight: 'bold' }}> APR: </span>The annual percentage rate (APR) encompasses your interest rate along with any associated fees. A lower APR indicates a more cost-effective loan option.
               </Typography>
      
               </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <Icon style={{ verticalAlign: 'baseline', marginLeft: '5px',color:'#08C177' }}><CalendarMonthOutlinedIcon/></Icon>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}> Loan term: </span>This refers to the duration provided for repaying your debt consolidation loan. Opting for a longer loan term typically leads to reduced monthly payments, as you have more time to distribute your balance. Nonetheless, extending the repayment period may result in paying more overall interest.
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <Icon style={{ verticalAlign: 'baseline', marginRight: '5px', color: '#08C177' }}><PaidOutlinedIcon/></Icon>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Loan amount: </span>When consolidating debt, it's crucial to ensure that the loan you acquire will cover the entirety of your existing debts. If your debt consolidation loan falls short, your only recourse to borrow more is by obtaining another loan.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <Icon style={{ verticalAlign: 'baseline', marginRight: '5px', color: '#08C177' }}><AccountBalanceWalletOutlinedIcon/></Icon>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Fees: </span>Debt consolidation loans often entail fees, with the most common being an origination fee. Generally, the lender will subtract this fee from your loan funds before disbursing them to you or your creditors.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      Typically, borrowers with lower credit scores are more prone to encountering an origination fee. These fees serve to mitigate some of the lender's risk. However, certain lenders levy origination fees regardless of your credit score.   </Typography>
                  </Grid>




                  
                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <Icon style={{ verticalAlign: 'baseline', marginRight: '5px', color: '#08C177' }}><TimerOutlinedIcon/></Icon>
                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Funding timeline: </span>A lender's funding timeline indicates the duration for approving your loan and disbursing the funds to you. While a lender may advertise same-day funding, this timeline might not necessarily apply to debt consolidation loans.
                      </Typography>
                  </Grid>




                  
                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <Icon style={{ verticalAlign: 'baseline', marginRight: '5px', color: '#08C177' }}><AttachMoneyOutlinedIcon/></Icon>
                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Loan disbursement: </span>When a lender disburses your loan, it signifies that they have transferred the funds to you. Alternatively, you may have the option to authorize the lender to pay your creditors directly. This approach could streamline the process, and certain lenders, like Achieve, may even offer an APR discount for opting for this method.
                      </Typography>
                  </Grid>

              </Grid>

          </Box>
      </Container>

    {/* //   ------------------------------------------------------------------------ */}


    <Container sx={{ marginTop: '60px' }}>
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
                    Debt consolidation vs. debt relief: What’s the difference?
                </Typography>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography
                        sx={{
                            fontSize: '17px',
                            fontFamily: "'Lato', sans-serif",
                            color: '#01F30',
                            textAlign: 'center',
                            maxWidth: '862px', // Set maxWidth
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '15px',
                            },
                        }}
                    >
                       While debt consolidation entails acquiring a new loan or credit card to settle existing debt under more favorable terms, debt relief aims to diminish the total debt amount through negotiation or legal strategies.
                        <span style={{ fontWeight: 'bold' }}>Debt relief encompasses various approaches, including credit counseling, debt settlement, and bankruptcy.</span>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    </Box>
</Container>


{/* ------------------- */}

<Container sx={{
    direction: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between', // Center the buttons horizontally
    width: '100%',
    // maxWidth:'1250px',
    height: 'auto',
    flexGrow: 1,
    display: { xs: 'block', md: 'flex' },
    px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints
}}>
    <Box
        sx={{
            bgcolor: '#FFFFFF',
            color: '#000000',
            width: '100%',
            height: 'auto',
            borderRadius: '16px',
        }}
    >
        <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" spacing={6}
            sx={{ width: '100%', height: 'auto', mb: { xs: 3, md: 0 } }}>
            <Box sx={{
                width: '100%', height: 'auto',
            }}>

               
                <Typography
                    sx={{
                        fontSize: '20px',
                        color: '#101F30',
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontWeight: 'bold',
                        fontFamily: "'Lato', sans-serif",
                        marginBottom: '18px',
                        marginTop:'42px',
                       

                    }}
                >

                   <Link href="#" sx={{ textDecoration:'none'}}>Debt consolidation vs. credit counseling</Link>
                </Typography>
                <Typography
                    sx={{
                        fontSize: '17px',
                        color: '#454545',
                        fontFamily: "'Lato', sans-serif",
                    }}
                >
                     <span style={{fontWeight:'bold'}}>Credit counseling</span> is a nonprofit service designed to assist individuals in better managing expenses and debt payments. A credit counselor may establish a debt management plan for you and negotiate debts and monthly payments on your behalf.
                </Typography>
            </Box>

            <Box sx={{
                width: '100%', height: 'auto'
            }}>
                <Typography
                    sx={{
                        fontSize: '20px',
                        color: '#101F30',
                        margin: '40px 0px 2px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontWeight: 'bold',
                        fontFamily: "'Lato', sans-serif",
                        marginBottom: '18px',
                        height: 'auto'
                    }}
                >

                <Link href="#" sx={{ textDecoration:'none'}}>Debt consolidation vs. debt settlement</Link>
                </Typography>
                <Typography
                    sx={{
                        fontSize: '17px',
                        color: '#454545',
                        fontFamily: "'Lato', sans-serif",
                        height: 'auto'
                    }}
                >
                   <span style={{fontWeight:'bold'}}>Debt settlement</span>  entails bargaining with your creditors to decrease the amount of debt you owe and alleviate associated fees. While some companies provide this service, such programs often carry substantial fees and can significantly impact your credit.
                </Typography>
            </Box>



            <Box sx={{
                width: '100%', height: 'auto'
            }}>
                <Box sx={{ width: "30px" }}>
                  
                </Box>
                <Typography
                    sx={{
                        fontSize: '20px',
                        color: '#101F30',
                        margin: '-120px 0px 2px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontWeight: 'bold',
                        fontFamily: "'Lato', sans-serif",
                        
                    }}
                >

              <Link href="#" sx={{ textDecoration:'none'}}>Debt consolidation vs. bankruptcy</Link>
                 </Typography>
                <Typography
                    sx={{
                        fontSize: '17px',
                        color: '#454545',
                        fontFamily: "'Lato', sans-serif",
                        marginTop: '15px',
                        height: 'auto'
                    }}
                >
                  <span style={{fontWeight:'bold'}}>Bankruptcy</span> is a legal procedure providing debt relief for individuals or businesses. Upon filing for bankruptcy, your assets may be liquidated to settle debts with creditors, or you may be placed on a court-mandated debt repayment plan.
                  </Typography>
            </Box>
        </Stack>
    </Box>


</Container></>
  )
}

export default HowtocompareDCL