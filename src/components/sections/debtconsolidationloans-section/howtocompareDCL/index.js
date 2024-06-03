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

                      What’s the use of getting multiple loan offers if you aren’t sure what you’re looking at? When reviewing your options, pay special attention to:

                  </Typography>
                  </Grid>

                 
                <Grid item sx={12}>
                <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                <Icon style={{ verticalAlign: 'baseline', marginLeft: '5px',color:'#08C177' }}><PercentOutlinedIcon /></Icon>
                 <Link href="#" sx={{ fontWeight: 'bold',textDecoration:'none' }}> APR: </Link><Link href="#" sx={{textDecoration:'none'}}>Annual percentage rate </Link>— or APR — is your interest rate, plus any fees. The lower the APR, the cheaper the loan.
               </Typography>
      
               </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <Icon style={{ verticalAlign: 'baseline', marginLeft: '5px',color:'#08C177' }}><CalendarMonthOutlinedIcon/></Icon>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}> Loan term: </span>This is the length of time you have to pay off your debt consolidation loan. A longer loan term usually results in lower monthly payments (since you’ll have more time to spread your balance across). However, the longer it takes to repay your loan, the more overall interest you may pay.
                      </Typography>
                  </Grid>




                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <Icon style={{ verticalAlign: 'baseline', marginRight: '5px', color: '#08C177' }}><PaidOutlinedIcon/></Icon>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Loan amount: </span>When consolidating debt, it’s important that the loan you take will cover all that you owe. If your debt consolidation loan comes up short, the only way to borrow more is to take another loan.
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <Icon style={{ verticalAlign: 'baseline', marginRight: '5px', color: '#08C177' }}><AccountBalanceWalletOutlinedIcon/></Icon>

                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Fees: </span>Debt consolidation loans can come with fees, the most common being an origination fee. Typically, the lender will deduct this fee from your loan funds before sending it to you (or your creditors).
                      </Typography>
                  </Grid>





                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>

                      Generally, lower-credit borrowers are more likely to see an origination fee. Origination fees can help offset some of the lender’s risk. But some lenders charge them no matter your score.                      </Typography>
                  </Grid>




                  
                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <Icon style={{ verticalAlign: 'baseline', marginRight: '5px', color: '#08C177' }}><TimerOutlinedIcon/></Icon>
                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Funding timeline: </span>A lender’s funding timeline is how long it takes to approve your loan and send you your funds. Although a lender might advertise same-day funding, that timeline might not apply to debt consolidation loans.
                      </Typography>
                  </Grid>




                  
                  <Grid item sx={12}>
                      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', marginBottom: '20px' }}>
                      <Icon style={{ verticalAlign: 'baseline', marginRight: '5px', color: '#08C177' }}><AttachMoneyOutlinedIcon/></Icon>
                          <span style={{ color: '#454545', fontWeight: 'bold' }}>Loan disbursement: </span>When a lender disburses your loan, that means it has sent it to you. You may have the option to have the lender pay your creditors directly. This might streamline the process, and some lenders (such as Achieve) may give you an APR discount for doing so, too.
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
                        Whereas debt consolidation involves taking out a new loan or credit card to repay debt on better terms,
                        <Link href="#" sx={{ textDecoration: 'none' }}> debt relief </Link>seeks to reduce the amount of debt you owe through negotiation or legal means.
                        <span style={{ fontWeight: 'bold' }}>Debt relief comes in many forms, such as credit counseling, debt settlement and bankruptcy.</span>
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
                     <span style={{fontWeight:'bold'}}>Credit counseling</span> is a nonprofit service to help you manage expenses and debt payments more effectively. A credit counselor may set you up on a debt management plan and even negotiate debts and monthly payments on your behalf.
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
                   <span style={{fontWeight:'bold'}}>Debt settlement</span> involves negotiating with your creditors to lower the amount of debt you owe and reduce fees charged to your account. Some companies offer this service, but these programs may come with high fees and can severely damage your credit.
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
                  <span style={{fontWeight:'bold'}}>Bankruptcy</span> is a legal process offering debt relief for an individual or business. When you file for bankruptcy, your assets may be sold to repay your creditors, or you may be enrolled in a court-ordered debt repayment plan.
                </Typography>
            </Box>
        </Stack>
    </Box>


</Container></>
  )
}

export default HowtocompareDCL