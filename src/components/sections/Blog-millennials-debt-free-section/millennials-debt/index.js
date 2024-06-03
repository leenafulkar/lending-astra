import React from 'react';
import { Grid, useTheme, Typography, Box ,Link} from '@mui/material';
import debt_free1_chart_logo from '../../../../assets/Debtfree1-Chart-2-Infogram.png'
import debt_free2_chart_logo from '../../../../assets/Debtfree2-Chart-1-Infogram.png'
import debt_free_graphic_logo from '../../../../assets/Debt-free-Graphic-v2-519x1024.png'



const MillennialsDebt = () => {
  const theme = useTheme();
  return (
    <>
         
        <Grid item xs={12}>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <img
              src={debt_free1_chart_logo}
              alt="Disney Debt Chart"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Box>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <img
              src={debt_free2_chart_logo}
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
              fontSize: '27px',
              fontFamily: "'Lato', sans-serif",
              color: '#454545',
              margin: '20px 0px 18px',
              fontWeight:'bold'
            }}
          >
            Many more millennials carrying card debt
          </Typography>
          <Typography
            sx={{
              fontSize: '17px',
              fontFamily: "'Lato', sans-serif",
              color: '#454545',
              margin: '20px 0px 18px',
            }}
          >
            The student loan debt crisis often garners more attention from millennials compared to the growing U.S. credit card debt crisis, primarily due to the substantial amounts owed per student loan borrower.
          </Typography>
          <Typography
            sx={{
              fontSize: '17px',
              fontFamily: "'Lato', sans-serif",
              color: '#454545',
              margin: '0px 0px 18px',
            }}
          >
           In 2018, the typical college graduate exited school burdened with an average of $29,800 in student loan debt, whereas cardholders under 35 carried an average credit card debt balance of $5,808.
          </Typography>
          <Typography
            sx={{
              fontSize: '17px',
              fontFamily: "'Lato', sans-serif",
              color: '#454545',
              margin: '0px 0px 18px',
            }}
          >
          However, when considering the broader perspective, merely 13% of millennials enjoy being entirely debt-free. Even among those who have successfully cleared their student loans or never incurred them, financial challenges persist. Many grapple with various other types of debt, predominantly credit cards, alongside commitments such as auto loans, mortgages, and personal loans.
          </Typography>
          <Typography
            sx={{
              fontSize: '17px',
              fontFamily: "'Lato', sans-serif",
              color: '#454545',
              margin: '0px 0px 18px',
            }}
          >
           Matt Schulz, chief credit analyst at LendingTree, emphasized that there's no universal solution to address the debt challenges faced by millennials. "A 35-year-old juggling responsibilities like two kids, two cars, and a mortgage likely has different financial priorities than a recent college graduate at 24, wrestling with student loans while launching their career. Yet, they're both millennials," Schulz pointed out.
          </Typography>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <img
              src={debt_free_graphic_logo}
              alt="Disney Debt Chart"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Box>
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
          Debt is not solely a challenge for individuals with lower incomes.
          </Typography>
          <Typography
            sx={{
              fontSize: '17px',
              fontFamily: "'Lato', sans-serif",
              color: '#454545',
              margin: '0px 0px 18px',
            }}
          >
         Even households with higher incomes are feeling the strain. Sixteen percent of those earning over $100,000 annually anticipate being in debt at the end of their lives. The rising cost of living is a significant factor contributing to financial challenges for these households.
         </Typography>
         <Typography
            sx={{
              fontSize: '17px',
              fontFamily: "'Lato', sans-serif",
              color: '#454545',
              margin: '0px 0px 18px',
            }}
          >
         In areas with high living costs, covering essentials such as housing, childcare, commuting, and groceries can strain finances, even for households with above-average incomes. Consequently, individuals may become overly dependent on credit cards to meet their needs.
         </Typography>
         <Typography
            sx={{
              fontSize: '17px',
              fontFamily: "'Lato', sans-serif",
              color: '#454545',
              margin: '0px 0px 18px',
            }}
          >
         Another contributing factor is that affluent households often bear a heavier debt burden than lower-income ones due to investments, recreational pursuits, and other financial obligations. Accumulating a substantial credit card balance might not seem unusual for a household capable of comfortably covering monthly debt obligations. Additionally, carrying over a balance and paying interest fees may not significantly impact their finances due to their wealth.
         </Typography>
         <Typography
            sx={{
              fontSize: '17px',
              fontFamily: "'Lato', sans-serif",
              color: '#454545',
              margin: '0px 0px 18px',
            }}
          >
         While maintaining high credit card balances might suit certain households, others could discover it ensnares them in a credit card cycle.
         </Typography>
        </Grid>
        <Grid item xs={12}>
          
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
          >Americans burdened by credit card debt also find themselves indebted in other financial obligations.
         </Typography>
          <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",   color: '#454545',margin: '0px 0px 18px'}} >
          Seventy percent of individuals carrying credit card debt also hold at least one other type of financial obligation, such as auto loans (57%), mortgages (50%), and student loans (34%).
           </Typography>
           <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",   color: '#454545',margin: '0px 0px 18px'}} >
           Interestingly, 23% of individuals grappling with credit card debt also possess a personal loan. This trend might suggest that consumers are opting for personal loans to consolidate debt instead of relying solely on credit card balance transfers. However, personal loans can serve multiple purposes beyond debt consolidation, such as funding home renovations, medical procedures, or other significant expenses.
           </Typography>
          
           <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",   color: '#454545',margin: '0px 0px 18px'}} >
           Schulz cautions against consumers taking on excessive debt. "In a robust economy like the current one, these figures are alarming," Schulz remarked. "The reality is, if you're burdened with substantial debt during prosperous times, it suggests you may not be setting aside enough funds for unforeseen challenges."
           
           </Typography>
           <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",   color: '#454545',margin: '0px 0px 18px'}} >
           While maintaining timely debt payments to maintain positive creditor relationships is crucial, prioritizing savings for unexpected circumstances is equally important. As Schulz emphasized, an economic downturn might be on the horizon, and the situation can deteriorate faster than anticipated.
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
           Regardless of the type of debt, many individuals have become disheartened.
          </Typography>
          <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",color: '#454545',margin: '0px 0px 18px', }}>
          The survey uncovered concerning findings regarding the long-term financial outlook of credit card users. Nearly a quarter of cardholders express the belief that they will carry their debt until the end of their lives. Such a bleak perspective can be disheartening for borrowers who feel there is no hope for financial relief.
          </Typography>
          <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",color: '#454545',margin: '0px 0px 18px', }}>
          "Debt can seem overwhelming, but it's essential not to lose hope and take proactive steps," Schulz advised. He suggests allocating an extra $10 or $20 towards your credit card payment each month or seeking additional income through a side hustle to tackle debt head-on. These small efforts can make a significant difference in managing debt effectively.
          </Typography>
        </Grid>
        
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
         In summary, it's crucial to take action!          
        </Typography>
          <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",color: '#454545',margin: '0px 0px 18px', }}>
          Debt doesn't mean financial ruin. Surrendering and giving up will only exacerbate the situation. Here are some recommendations on how to begin taking proactive steps:
          </Typography>
          <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",color: '#454545',margin: '0px 0px 18px', }}>
        <span style={{fontWeight:'bold'}}>Create a budget.</span>A budget serves as a blueprint for your spending, outlining how you'll allocate your monthly income. By monitoring your expenses, you can identify areas where you can cut back and allocate more funds toward paying off debt. Online budgeting tools like Mint or basic Excel spreadsheets can help you track your income and expenses, allowing for better financial management.
          </Typography>
          <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",color: '#454545',margin: '0px 0px 18px', }}>
        <span style={{fontWeight:'bold'}}>Cut down on expenses.</span>Once you've established your budget, carefully examine areas where you can trim expenses. Consider canceling non-essential services like a landline or subscription memberships. Downsizing your living space or sharing accommodations with a roommate are also viable options. Redirect the savings from these expense reductions towards paying off your debt.
          </Typography>
          <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",color: '#454545',margin: '0px 0px 18px', }}>
        <span style={{fontWeight:'bold'}}>Sell valuable items.</span>Assess your belongings and determine what is essential and what you can part with. Selling furniture, jewelry, old toys, or other items that you no longer need can provide additional funds to allocate towards paying off your debt.
          </Typography>
          <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",color: '#454545',margin: '0px 0px 18px', }}>
        <span style={{fontWeight:'bold'}}>Increase your income through a side hustle or second job.</span>If your current income isn't enough to significantly reduce your debt while covering your expenses, consider exploring options like starting a side hustle, increasing your hours at work, or taking on a second job. These additional sources of income can provide the extra funds needed to make meaningful progress in paying off your debt.
          </Typography>
          <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",color: '#454545',margin: '0px 0px 18px', }}>
        <span style={{fontWeight:'bold'}}>Consider applying for a balance transfer card with a 0% APR introductory offer.</span>Certain credit cards provide a promotional 0% APR offer for a set duration, allowing you to transfer high-interest card debt. This promotional period typically spans from 6 to 21 months, depending on the credit card. Throughout this interest-free period, you can focus on reducing the principal balance without interest charges accruing. It's worth noting that some balance transfer cards may impose a fee ranging from 3% to 5%, which should be taken into account when evaluating the overall cost versus benefits.
          </Typography>
          <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",color: '#454545',margin: '0px 0px 18px', }}>
        <span style={{fontWeight:'bold'}}>Contact your card issuer and request a reduced APR.</span>You can also explore the option of negotiating a lower interest rate with your credit card provider. Surprisingly, your chances of success are quite high; eight out of ten people who request a lower interest rate are approved, as per a LendingTree survey. By reducing your interest rate, a greater portion of your payments can go towards paying down your principal debt rather than being eaten up by interest charges. This simple step has the potential to save you hundreds of dollars.
          </Typography>
          <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",color: '#454545',margin: '0px 0px 18px', }}>
        <span style={{fontWeight:'bold'}}>Make a commitment to take action.</span>Managing debt can feel daunting, but remember, you don't have to eliminate all your debt overnight. By taking small steps today, you can accelerate your debt repayment journey more than you might expect. Consistent actions over time can make a significant dent in your debt balances.
          </Typography>
       
        </Grid>
{/* ----------------------------------------------------- */}
        <Box sx={{ bgcolor: '#003F70', margin: '0px 0px 16px', padding: '16px', display: 'flex', gap: '4px' ,borderRadius:'5px'}}>
      <Link 
        href="#" 
        sx={{
          textDecoration: 'none',
          fontSize: '16px',
          color: '#FFFFFF',
           [theme.breakpoints.down("sm")]: {
            fontSize: "14px"},
        }}
      >
       Discover your ideal card in just 30 seconds.
      </Link>
      <Link 
        href="#" 
        sx={{
          textDecoration: 'none',
          fontSize: '16px',
          color: '#FFFFFF',
          display:{lg:'block',xs:'none',md:'block'}
        }}
      >
       Assess your approval likelihood to make smarter shopping decisions.
      </Link>
    </Box>
       
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
              Methodology          
            </Typography>
          <Typography sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",color: '#454545',margin: '0px 0px 18px', }}>
          LendingTree partnered with Qualtrics to administer an online survey to 1,046 American cardholders, of which 839 reported having at least one debt. The survey was conducted from June 7 to June 11, 2019, with the sample demographics adjusted to reflect the overall population. Generations were categorized as follows:          </Typography>
          <Typography className='black-dot' sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",color: '#454545',margin: '0px 0px 9px', }}>
          Millennials encompass individuals aged 22 to 37.

          </Typography>
          <Typography className='black-dot'  sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",color: '#454545',margin: '0px 0px 9px', }}>
          Generation Xers are individuals aged 38 to 53.
          </Typography>
          <Typography className='black-dot'  sx={{fontSize: '17px',fontFamily: "'Lato', sans-serif",color: '#454545',margin: '0px 0px 9px', }}>
          Baby boomers are individuals aged 54 to 72.
          </Typography><br/><br/>
        </Grid>
        
           
             
       
           

    </>
  );
};


export default MillennialsDebt