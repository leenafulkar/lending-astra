import React from 'react';
import { Grid, useTheme, Typography, Box ,Link} from '@mui/material';
import disney_debt_chart_logo from '../../../../assets/disney-debt-charts-q3-3.png';
import disney2_debt_chart_logo from '../../../../assets/disney2-debt-charts-q3-11.png';
import disney3_debt_chart_logo from '../../../../assets/disney3-debt-charts-q3-5.png';
import disney4_debt_chart_logo from '../../../../assets/disney4-debt-charts-q3-8.png'
import disney5_debt_chart_logo from '../../../../assets/disney5-debt-charts-q3-6.png'


const MajorityOfSurvey = () => {
  const theme = useTheme();
  return (
    <>
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
           The majority of individuals who frequent amusement parks have visited a Disney park.
          </Typography>
          <Typography
            sx={{
              fontSize: '17px',
              fontFamily: "'Lato', sans-serif",
              color: '#454545',
              margin: '0px 0px 18px',
            }}
          >
            Amusement parks are beloved recreational destinations for consumers, with Disney often hailed as the premier attraction in the industry. Out of all Americans, 87% have experienced a theme park or amusement park, with 74% of this group having visited a Disney park.
          </Typography>
      </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <img
              src={disney_debt_chart_logo}
              alt="Disney Debt Chart"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: '17px',
              fontFamily: "'Lato', sans-serif",
              color: '#454545',
              margin: '20px 0px 18px',
            }}
          >
            Baby boomers aged 57 to 76 emerge as the generation most inclined to visit a Disney park. Among baby boomers who have experienced a theme park, 83% have ventured to a Disney park. In contrast, Gen Zers aged 18 to 25 exhibit the lowest propensity. Among this group, only 69% have visited a Disney park out of those who have visited a theme park.
          </Typography>
          <Typography
            sx={{
              fontSize: '17px',
              fontFamily: "'Lato', sans-serif",
              color: '#454545',
              margin: '0px 0px 18px',
            }}
          >
           While there's virtually no disparity by generation among individuals who have visited a theme park, there are differences among those who have visited a Disney park. While cost likely plays a significant role, consider the trips taken by baby boomers with their grandchildren and other family members. Among those who have visited a Disney park at least once, 85% state that they primarily go with their families, 66% of whom include children. Trips with children are particularly common for individuals with kids under the age of 18 (83%), those with adult children (75%), earners with six-figure incomes (74%), and married Disney visitors (73%).
          </Typography>
          <Typography
            sx={{
              fontSize: '17px',
              fontFamily: "'Lato', sans-serif",
              color: '#454545',
              margin: '0px 0px 30px',
              bgcolor: '#DBF8FD',
              padding: '20px',
            }}
          >
            Disney isn't solely for children, as evidenced by the fact that 28% of attendees primarily embark on adult-only Disney trips, whether with family or friends. Within this demographic, 37% report that they have never been married. Meanwhile, only 1% of attendees typically visit Disney parks alone.
          </Typography>
        </Grid>

      {/* ---------------------------------------------------------------------- */}
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
           Reasons for Non-Attendance at Theme Parks
          </Typography>
          <Typography
            sx={{
              fontSize: '17px',
              fontFamily: "'Lato', sans-serif",
              color: '#454545',
              margin: '0px 0px 18px',
            }}
          >
        What about the 13% of consumers who have never visited a theme park? For this group, costs emerge as the primary reason for abstaining from park visits, with nearly half (48%) citing this factor. Following closely, 30% mention that theme parks are too distant, while 29% indicate a preference for other destinations. </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <img
              src={disney2_debt_chart_logo}
              alt="Disney Debt Chart"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Grid>
      {/* ---------------------------------------------------------------- */}
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
         Do Disney visitors incur debt for one-day, one-park tickets averaging over $140?</Typography>
          <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",   color: '#454545',margin: '0px 0px 18px'}} >
          While most theme park enthusiasts have visited a Disney park, the expenses associated with such visits are considerable. In the upcoming year (from November 2022 through October 2023), the average price for a one-day, one-park ticket at Disney World stands at $141.74 — yet, this is merely the cost of entry.      
           </Typography>
           <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",   color: '#454545',margin: '0px 0px 18px'}} >
           An analysis conducted by Mouse Hacking revealed that the essential Disney World vacation for a family of four (comprising two adults, one child aged 10 or older, and one child aged 3 to 9) amounts to $5,731 in 2022 — equating to $287 per person per night. This encompasses:      
           </Typography>
           <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",   color: '#454545',margin: '0px 0px 18px'}} >
             1.&nbsp;&nbsp;Air Travel<br/><br/>
             2.&nbsp;&nbsp;Transportation to and from Disney World<br/><br/>
             3.&nbsp;&nbsp;A five-night accommodation at Pop Century, a Disney World resort<br/><br/>
             4.&nbsp;&nbsp;Five-day tickets without Park Hopper, but inclusive of Genie+, a paid service for bypassing lines, valid for Magic Kingdom and Hollywood Studios.<br/><br/>
             5.&nbsp;&nbsp;All meals at a comparable cost to the standard Disney dining plan, which was temporarily suspended during the COVID-19 pandemic.<br/><br/>
           </Typography>
           <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",   color: '#454545',margin: '0px 0px 18px'}} >
           Nevertheless, with <Link href="#" sx={{textDecoration:'none'}}>inflation on the rise</Link>, even Mickey is feeling the pinch. According to Mouse Hacking, the essential Disney World vacation for the same family of four will amount to $6,320 in 2023 — equating to $316 per person per night. This reflects a 10% increase in costs from 2022.  
           </Typography>
           <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",   color: '#454545',margin: '0px 0px 18px'}} >
           Despite the expenses, it appears that Disney attendees are making concerted efforts to save up for their trips. Among those who have visited Disney, only 18% report going into debt for one or more of these trips.     
           </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <img
              src={disney3_debt_chart_logo}
              alt="Disney Debt Chart"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
        <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",   color: '#454545',margin: '0px 0px 18px'}} >
        Understandably, parents with children under the age of 18 are the most prone to incurring Disney-related debt, with 30% admitting to it. Meanwhile, individuals earning six-figure incomes are more inclined to accumulate Disney-related debt compared to any other income bracket — 26% of those earning $100,000 or more annually have done so. On the other hand, Disney visitors earning between $35,000 and $49,999 are the least likely, with only 12% admitting to it.
        </Typography>
        
           <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",   color: '#454545',margin: '0px 0px 18px'}} >
           Broken down by generation, millennials aged 26 to 41 (27%) are the most inclined to have accumulated Disney-related debt. Comparatively,   
           </Typography>
           <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",   color: '#454545',margin: '0px 0px 18px'}} >
             1.&nbsp;&nbsp;22% of Gen Xers ages 42 to 56<br/><br/>
             2.&nbsp;&nbsp;19% of Gen Zers<br/><br/>
             3.&nbsp;&nbsp;9% of baby boomers<br/><br/>
           </Typography>
           <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",   color: '#454545',margin: '0px 0px 18px'}} >
           Remarkably, almost a quarter (24%) of men have accrued debt for Disney — a figure 10 percentage points higher than the 14% of women who report the same.     
           </Typography>
           <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",   color: '#454545',margin: '0px 0px 18px'}} >
           The reason why so few individuals accumulate debt to finance their trips? Discounts could be a contributing factor. In fact, 42% of Disney visitors state that they have utilized discounts for their trip. This percentage is highest among parents with young children (51%), millennials (50%), and individuals earning six-figure incomes (49%).      
           </Typography>
        </Grid>
{/* ------------------------------------------------------------------------------------ */}
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
           Disney visitors who have incurred debt do not express regret.
          </Typography>
          <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",color: '#454545',margin: '0px 0px 18px', }}>
          For most of the 182 respondents who have incurred debt for Disney, the expenditure is justified by the enchantment. Just over 7 in 10 (71%) Disney attendees who went into debt report no regrets. This could be attributed to their confidence in managing the payments, as the majority (80%) of indebted Disney visitors state their intention to clear their debt within six months or less.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <img
              src={disney4_debt_chart_logo}
              alt="Disney Debt Chart"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Grid>
        <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",   color: '#454545',margin: '0px 0px 18px'}} >
        According to LendingTree's chief credit analyst Matt Schulz, consumers should not feel remorseful about assuming debt, provided they can promptly repay it.    
           </Typography>
           <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",   color: '#454545',margin: '0px 0px 18px'}} >
           "A Disney trip can create memories that you and your family cherish for a lifetime, and those are the kinds of experiences people are willing to incur debt for," he explains. "While taking on an overwhelming amount of debt or doing so frequently is not advisable, if you need to accrue debt for a few months to afford that unforgettable Disney trip, it can be justifiable."      
           </Typography>
           <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",   color: '#454545',margin: '0px 0px 18px'}} >
           Apart from those who swiftly settle their expenses, only 14% anticipate it will take them seven months or more to repay their Disney debt, while an additional 6% are unsure of the duration required.     
           </Typography>

           {/* -------------------------------------------------------------------------------------- */}
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
           From dining options to entrance fees, here's what ended up costing consumers more than they anticipated.
          </Typography>
          <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",color: '#454545',margin: '0px 0px 18px', }}>
          While many consumers may anticipate incurring debt prior to their Disney trip, unexpected expenses could contribute to some of the debt accrued. Among the 182 respondents who have incurred Disney-related debt, they are most likely to report that in-park food and beverages (56%) were more costly than anticipated.</Typography>
        <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",color: '#454545',margin: '0px 0px 18px', }}>
        Schulz attributes the high dining prices within amusement parks to a lack of competition.</Typography>
        <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",color: '#454545',margin: '0px 0px 18px', }}>
        "Sure, you could return to the car and opt for lunch outside the park to save money, then return for the remainder of the day, but practically nobody would choose to do that," he explains. "With that knowledge, the park essentially has free rein to set its prices, resulting in sky-high costs." </Typography>
        
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <img
              src={disney5_debt_chart_logo}
              alt="Disney Debt Chart"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Grid>
        <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",   color: '#454545',margin: '0px 0px 18px'}} >
        Following that, 48% indicate that admission costs exceeded their expectations. This contrasts with Disney World's promotion of one-day, one-park ticket prices as low as $109. However, our analysis revealed that this price is only accessible for 20 days between November 2022 and October 2023. The average price throughout this period is $141.74, with September boasting the lowest average ($126.50) and December featuring the highest average ($149.03).    
           </Typography>
           <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",   color: '#454545',margin: '0px 0px 18px'}} >
           In addition to in-park meals and admission fees, individuals with Disney-related debt are prone to report that lodging expenses (41%) and travel gas costs (37%) exceeded their initial expectations.     
           </Typography>
           

    </>
  );
};

export default MajorityOfSurvey;
