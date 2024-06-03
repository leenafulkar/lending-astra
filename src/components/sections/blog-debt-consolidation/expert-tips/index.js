import React from 'react';

import { Typography ,Grid, Box,useTheme,Button,Link} from '@mui/material';

const ExpertTips = () => {
    const theme = useTheme();

  return (
    <><Grid item xs={12}>
          <Typography
              sx={{
                  fontSize: '40px',
                  fontFamily: "'Lato', sans-serif",
                  color: '#101F30',
                  fontWeight: 'bold',
                  margin: '16px 0px',
                  [theme.breakpoints.down('sm')]: {
                      fontSize: '27px',
                  },
              }}
          >
             Expert Advice on Managing Debt Incurred from Disney Trips
          </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px' }}>
          While financing that enchanting Disney experience may pose challenges amidst inflation, you can still embark on your journey to the "Most Magical Place on Earth" (or any other park you select) without stressing over expenses. Specifically, Schulz suggests:
          </Typography><Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px' }}>
            1.&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>Create a financial plan.</span>"When you're planning your trip budget, thoroughly research the actual costs within the park," suggests Schulz. "And when estimating expenses for food and beverages during your visit, consider adding an extra 25% or more to your calculation, just to be safe. It's preferable to overestimate rather than underestimate costs."<br/><br/>
             2.&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>Explore the option of obtaining a 0% balance transfer credit card. </span>A <Link href="#" sx={{textDecoration:'none'}}>0% balance transfer credit card</Link> enables your entire monthly payment to be allocated towards the principal balance throughout the introductory APR period. "You'll require a good credit score to qualify for one, but if you do, it can significantly reduce your interest costs," he advises. "It could potentially be your most effective tool in tackling your credit card debt."<br/><br/>
             3.&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>Take advantage of your credit card rewards.</span>"Credit card rewards can contribute to making your Disney trip more budget-friendly," Schulz explains. "Whether it's earning complimentary airfare or hotel accommodations, receiving discounts on gas for your journey to the park, or simply earning cash back on all purchases, the appropriate <Link href="#" sx={{textDecoration:'none'}}>rewards credit card</Link> can have a significant impact."<br/><br/>
             </Typography>
           
          </Grid>
          
          {/* --------------------------------------------------------------- */}
          <Grid item xs={12}>
          <Typography
              sx={{
                  fontSize: '40px',
                  fontFamily: "'Lato', sans-serif",
                  color: '#101F30',
                  fontWeight: 'bold',
                  margin: '16px 0px',
                  [theme.breakpoints.down('sm')]: {
                      fontSize: '27px',
                  },
              }}
          >
             Methodology
          </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px', }}>
          LendingTree partnered with Qualtrics to conduct an online survey involving 1,548 U.S. consumers aged 18 to 76 from October 5-6, 2022. The survey utilized a nonprobability-based sample, with quotas implemented to ensure the sample base accurately reflected the overall population. All responses underwent thorough review by researchers to maintain quality control. </Typography>
      <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px' }}>
      We defined generations as the following ages in 2022:
          </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px' }}>
            1.&nbsp;&nbsp;Generation Z: 18 to 25<br/><br/>
            2.&nbsp;&nbsp;Millennial: 26 to 41<br/><br/>
            3.&nbsp;&nbsp;Generation X: 42 to 56<br/><br/>
            4.&nbsp;&nbsp;Baby boomer: 57 to 76<br/><br/>
       </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 18px' }}>
          To calculate ticket costs, LendingTree analyzed the cost of one-day, one-park Disney World tickets between November 2022 and October 2023. Prices were analyzed on the <Link href="#" sx={{textDecoration:'none'}}>Disney World website</Link> on Oct. 13, 2022.
          </Typography></Grid>
          {/* ------------------------------------------- */}

          <Box  sx={{ bgcolor: '#00AEEF', margin: '0px 0px 20px', padding: '30px 40px' }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={8}>
          <Typography
            sx={{
              fontSize: '20px',
              margin: '0px 0px 5px',
              padding: '0px 20px 0px 0px',
              color: '#FFFFFF',
            }}
          >
            Get Personal Loan Offers Customized for You Today
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'flex-end' } }}>
          <Button
          fullWidth
            variant="contained"
            sx={{ bgcolor: '#FF704D', padding: '10px 17px', fontSize: '17px', textTransform: 'none' }}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Box><br/><br/><br/><br/>
          </>

  )
}

export default ExpertTips