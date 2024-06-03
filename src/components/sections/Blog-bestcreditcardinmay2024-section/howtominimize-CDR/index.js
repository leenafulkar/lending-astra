import React from 'react'
import { Box, Container, Grid,  Typography ,useTheme,Paper,Link} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close'

const HOwtominimizeCDR = () => {
    const theme = useTheme();
  return (
    <Container>
    <Box sx={{ flexGrow: 1, borderBottom: `1px solid #ccc` }}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography
                    sx={{
                        fontSize: '27px',
                        color: '#101F30',
                        fontFamily: "'Lato', sans-serif",
                        textAlign: 'left',
                        margin: '20px 0px',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '22px',
                        },
                    }}
                >
                  How to maximize credit card rewards
                </Typography>
               
            </Grid>



                  <Grid item xs={12}>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 20px' }}>
                        1.&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>Make sure to confirm the availability of award space before initiating any transfers. </span> Once you’ve transferred points, you can’t transfer them back to your credit card’s rewards currency.
                           </Typography>
                           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 20px' }}>
                        2.&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>Utilize transfer bonuses to loyalty programs for added value.</span> Periodically, different airline and hotel partners offer transfer bonuses to get even more value for your points.
                           </Typography>
                           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 20px' }}>
                        3.&nbsp;&nbsp;<span style={{fontWeight:'bold'}}> Leverage multiple cards to optimize category bonuses.</span> You can increase the amount of cash back, points or miles that you earn by rotating cards with different bonus categories. On that note, using cards that earn the same rewards currency (e.g., Chase Ultimate Rewards®) can help you maximize your points or miles in that program.
                           </Typography>
                           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 20px' }}>
                        4.&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>Utilize shopping portals to earn extra rewards when shopping online.</span>When you shop through your card’s shopping portal, you can earn additional rewards on top of the rewards from your credit card. Some programs offer additional incentives during holidays and other sale events, like back-to-school.
                           </Typography>
                           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 20px' }}>
                        5.&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>Enroll all your credit cards in shopping or dining rewards programs.</span> Programs like Dosh, Bumped and Rewards Network provide extra rewards when shopping or eating at participating retailers and restaurants.
                           </Typography>
                           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 20px' }}>
                        6.&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>Involve your spouse or partner as your "Player 2."</span>  When your spouse gets involved, you can double up on rewards by getting the same cards or diversify your points by applying for cards that you’re not eligible for.
                           </Typography>
                           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 20px' }}>
                        7.&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>Utilize credit cards for your business or side hustle.</span> Earn extra rewards by applying for a credit card in the name of your business. Examples of businesses that may qualify for a business credit card include rideshare driver, rental property owner or Etsy shop owner. In most cases, the rewards earned from your business credit card can be combined with your linked personal rewards program accounts.
                           </Typography>
                    </Grid>



                    <Grid item xs={12}>
                <Typography
                    sx={{
                        fontSize: '27px',
                        color: '#101F30',
                        fontFamily: "'Lato', sans-serif",
                        textAlign: 'left',
                        margin: '20px 0px',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '22px',
                        },
                    }}
                >
                 Bottom line: Are rewards credit cards worth it?
                </Typography>
                <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                Rewards credit cards can be beneficial if you pay off your balance monthly and maximize the rewards program. However, they often have higher interest rates, so carrying a balance may negate your rewards. Additionally, many top rewards cards entail annual fees, so it's important to ensure that the card's benefits outweigh this cost.
                        </Typography>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 2px',fontWeight:'bold' }}>
                        Pros and cons of rewards credit cards
                        </Typography>
            </Grid>


            <Grid container spacing={2} sx={{ marginTop: '10px' }}>
        <Grid item xs={12} sm={12} lg={6} md={6}>
          <Paper elevation={0} sx={{ padding: '10px', backgroundColor: '#f9f9f9' }}>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px',fontSize:'16px' }}>
            <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} /> Earn points, miles or cash back on everyday purchases
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px',fontSize:'16px' }}>
            <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} /> Help offset the cost of future purchases or travel by redeeming rewards
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' ,fontSize:'16px'}}>
            <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} /> Typically offer more robust purchase or travel protections than non-rewards cards
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom:'15px' ,fontSize:'16px'}}>
            <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} /> Can accumulate large sums of rewards from sign-up bonuses
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' ,fontSize:'16px'}}>
            <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} /> May offer additional perks and benefits, like status with a particular hotel group or airline
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} lg={6} md={6}>
          <Paper elevation={0} sx={{ padding: '10px', backgroundColor: '#f9f9f9' }}>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px',fontSize:'16px' }}>
            <CloseIcon sx={{ color: '#FF0000', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} />Potentially higher interest rates
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' ,fontSize:'16px'}}>
            <CloseIcon sx={{ color: '#FF0000', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} /> Best rewards cards typically require good to excellent credit
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px',fontSize:'16px' }}>
            <CloseIcon sx={{ color: '#FF0000', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} /> Annual fees over multiple cards can add up
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px',fontSize:'16px'}}>
            <CloseIcon sx={{ color: '#FF0000', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} /> Some rewards programs have earning caps that limit the rewards you can earn in a given year, quarter or billing cycle
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2} marginTop={2} sx={{bgcolor:'#F1F3F3',padding:'20px 30px'}}>
        <Grid item xs={12}>

         <Typography sx={{
                        fontSize: '27px',
                        color: '#101F30',
                        fontFamily: "'Lato', sans-serif",
                        textAlign: 'left',
                        margin: '20px 0px',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '22px',
                        },
                    }}>Alternative cards to consider</Typography>
         <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>If you're not yet prepared for a rewards card, there are numerous other credit card options available to assist you in consolidating debt, building credit, or achieving other financial objectives.</Typography>
         <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>Here are a few categories to check out:</Typography>
           <Link href="#" style={{textDecoration:'none'}}>Best balance transfer credit cards</Link><br/><br/>
           <Link href="#" style={{textDecoration:'none'}}>Best credit cards to build credit</Link><br/><br/>
           <Link href="#" style={{textDecoration:'none'}}>Best low-interest credit cards</Link><br/><br/>
           <Link href="#" style={{textDecoration:'none'}}>Best 0% APR credit cards</Link><br/><br/>
           <Link href="#" style={{textDecoration:'none'}}>Best credit card sign-up bonuses</Link><br/><br/>
           <Link href="#" style={{textDecoration:'none'}}>Best business credit cards</Link><br/><br/>
           <Link href="#" style={{textDecoration:'none'}}>Best student credit cards</Link><br/><br/>
        </Grid>
        
        
        
        </Grid>
      
             </Grid>
             </Box>
             </Container>
  )
}

export default HOwtominimizeCDR