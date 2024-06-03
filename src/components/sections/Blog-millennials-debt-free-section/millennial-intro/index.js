import React from 'react';
import { Stack, Box, Typography, Container, useTheme, Grid,Link } from '@mui/material';
import MillennialsDebt from '../millennials-debt';


const MillennialsIntro = () => {
  const theme = useTheme();

  return (
    <Container sx={{ marginTop: '40px' }}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={9}>
            <Stack spacing={2}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                   <Link href="#" sx={{textDecoration:'none',fontSize:'12px',margin:'0px 0px 6px'}}>Debt Consolidation</Link><br/><br/>
                   <Link href="#" sx={{textDecoration:'none',fontSize:'12px',margin:'0px 0px 6px'}}>How does lendingtree earn revenue?</Link><br/><br/>
                    <Typography
                      sx={{
                        fontSize: '40px',
                        color: '#000000',
                        fontWeight: 'bold',
                        fontFamily: "'Lato', sans-serif",
                        textAlign: 'left',
                        margin: '0px 0px 16px',
                        [theme.breakpoints.down('sm')]: {
                          fontSize: '27px',
                         
                        },
                      }}
                    >
                     Only 13% of Millennials are Debt-Free, with Credit Card Debt Being the Most Common Issue
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

             
{/* --------------------------------------------------------- */}

                   <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        When the words “debt” and “millennial” appear together, it often relates to the nation’s trillion-dollar student loan debt crisis. However, a recent LendingTree survey revealed that credit card debt, not student loan debt, is the most common financial burden for millennials.
                        </Typography>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        According to the survey, 67% of millennials report having credit card debt, while only 36% say they have student loan debt.
                        </Typography>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        The survey also revealed that these cardholders aren't very optimistic about their ability to eliminate the debt. Nearly 25% anticipate never achieving a debt-free status. Additionally, some millennials who intend to clear their debts don't have immediate plans to do so.
                        </Typography>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        Millennials who acquired their oldest existing debt at 24 years old anticipate achieving debt-free status by the age of 49. However, borrowing over such an extended period entails dealing with accumulating interest over decades. Estimating the total long-term cost of borrowing via credit cards is challenging due to the typically variable nature of interest rates.
                        </Typography>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        The average interest rate on credit cards currently stands at approximately 17%, with APRs for new credit card offers spanning from 15% to 24% or even higher. Although Senator Bernie Sanders (D-Vt.) and Representative Alexandria Ocasio-Cortez (D-N.Y.) have advocated for a nationwide cap on credit card interest rates at 15%, the likelihood of this proposal passing remains distant.
                        </Typography>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        Although student loans may not be the predominant form of debt burdening millennials, they still contribute to the overall struggle with debt for many. Balancing payments for student loans alongside credit cards, and possibly a mortgage or auto loan, can create a daunting challenge when it comes to paying off debt.
                        </Typography>
                    </Grid>

                    

                    <Grid item xs={12} >
                    <Typography sx={{ fontSize: '40px', fontFamily: "'Lato', sans-serif", color: '#101F30',fontWeight:'bold',margin:' 0px 0px 16px',
                        [theme.breakpoints.down('sm')]: {
                          fontSize: '27px',
                         
                        },}}>
                       Key findings
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        1.&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>87% of millennial cardholders are burdened by various forms of debt, </span> encompassing mortgages, auto loans, student loans, and other obligations. This figure falls just short of the 89% reported by Gen Xers and significantly exceeds the 71% among baby boomers who face similar financial challenges.
                        </Typography>
                        <Typography className='black-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        <span style={{fontWeight:'bold'}}>Approximately 67% of millennials report having credit card debt, </span>while 36% carry student loan debt, 34% have auto loans, 26% are burdened by mortgages, and 13% hold personal loans.
                        </Typography>
                        <Typography className='black-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        <span style={{fontWeight:'bold'}}>Among individuals grappling with credit card debt across all age groups, 70% also carry at least one additional form of debt.  </span>Auto loans are the most prevalent, with 57% holding them, followed closely by mortgages at 50%. Additionally, 34% of these individuals also contend with student loans, while 23% have personal loans.
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        2.&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>Millennials burdened with debt anticipate achieving debt-free status by the age of 49, </span>having incurred their earliest debt at 24 years old.
                        </Typography>
                        <Typography className='black-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        <span style={{fontWeight:'bold'}}>Gen Xers grappling with debt foresee reaching debt-free status at the age of 67, </span> having acquired their earliest debt at 30 years old.
                        </Typography>
                        <Typography className='black-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        <span style={{fontWeight:'bold'}}>Baby boomers in debt anticipate achieving a debt-free status by the age of 81, </span> with their earliest existing debt dating back to when they were 49 years old.
                        </Typography>

                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        3.&nbsp;&nbsp;In general, 62% of cardholders carry credit card debt, while 31% have a mortgage and an auto loan each. Additionally, 21% hold student loans, 11% have personal loans, and 3% are dealing with other forms of debt.
                        </Typography> <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        4.&nbsp;&nbsp;Almost 25% of cardholders burdened by debt anticipate that they will never achieve a debt-free status.
                        </Typography> <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        5.&nbsp;&nbsp;Only 7% of cardholders who have children under 18 stated that they are free from debt, whereas over 20% of those with older children or no children at all claimed to be debt-free.
                        </Typography> <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        6.&nbsp;&nbsp;Twenty-five percent of women anticipate passing away while still in debt, compared to 19% of men.
                        </Typography> <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px'}}>
                        7.&nbsp;&nbsp;Sixteen percent of those anticipating dying in debt have a household income exceeding $100,000.
                        </Typography>


                        </Grid>

                       <MillennialsDebt/>


            </Stack>
          </Grid>
{/* //////////////////////////////////////////////////////////////////////// */}
          <Grid item xs={12} lg={3}>
            <Stack spacing={2} sx={{ maxWidth: '100%' }}>
             
              <Typography
                      sx={{
                        fontSize: '27px',
                        color: '#101F30',
                        fontFamily: "'Lato', sans-serif",
                        textAlign: 'left',
                        fontWeight:'bold',
                        margin: '0px 0px 3px',
                        [theme.breakpoints.down('sm')]: {
                          fontSize: '22px',
                          
                        },
                      }}
                    >Credit Cards Resources
                      
                    </Typography>
                    <Link sx={{fontSize:'17px',textDecoration:'none',color:'#00AEEF'}}>Top Rewards Credit Cards</Link>
                    <Link sx={{fontSize:'17px',textDecoration:'none',color:'#00AEEF'}}>Top Cashback Credit Cards</Link>
                    <Link sx={{fontSize:'17px',textDecoration:'none',color:'#00AEEF'}}>Top 0% APR Credit Cards</Link>
                    <Link sx={{fontSize:'17px',textDecoration:'none',color:'#00AEEF'}}>Top Balance Transfer Credit Cards</Link>
                    <Link sx={{fontSize:'17px',textDecoration:'none',color:'#00AEEF'}}>Top No Balance Transfer Fee Credit Cards</Link><br/><br/>

            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};



export default MillennialsIntro