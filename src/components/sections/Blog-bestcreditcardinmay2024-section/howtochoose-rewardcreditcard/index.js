import React from 'react'
import { Box, Container, Grid, Link, Typography, useTheme } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,  Paper } from '@mui/material';



const HowtochooseRewardCD = () => {
    const rows = [
        {
          feature: 'Welcome offer',
          venture: 'Enjoy a one-time bonus of 75,000 miles once you spend $4,000 on purchases within 3 months from account opening, equal to $750 in travel',
          blueCash: 'Earn a $250 statement credit after you spend $3,000 in purchases on your new Card within the first 6 months.'
        },
        {
          feature: 'Earning rate',
          venture: '2 Miles per dollar on every purchase, every day; 5 Miles per dollar on hotels and rental cars booked through Capital One Travel',
          blueCash: 'Earn 6% Cash Back at U.S. supermarkets on up to $6,000 per year in purchases (then 1%), 6% Cash Back on select U.S. streaming subscriptions, 3% Cash Back at U.S. gas stations and on transit (including taxis/rideshare, parking, tolls, trains, buses and more), 1% Cash Back on other purchases. Terms apply.'
        },
        {
          feature: 'Rewards earned on $6,000 in groceries',
          venture: '12,000 points worth at least $120',
          blueCash: '$360'
        },
        {
          feature: 'Rewards earned on $3,000 in gas',
          venture: '6,000 points worth at least $60',
          blueCash: '$90'
        },
        {
          feature: 'Rewards earned on $11,000 in other spend',
          venture: '22,000 points worth at least $220',
          blueCash: '$110'
        },
        {
          feature: 'Annual fee',
          venture: '$95*',
          blueCash: '$0 intro annual fee for the first year, then $95.'
        },
        {
          feature: 'First year value (rewards minus annual fee)',
          venture: '$1,055*',
          blueCash: '$715'
        }
      ];
    

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
                  How to choose the best rewards credit card
                </Typography>
               
            </Grid>



                  <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px', fontWeight:'bold' }}>
                        PICK YOUR REWARDS
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        To select the ideal rewards card, start by determining the type of rewards you prefer: cash back, points, or miles. If your travel frequency is limited, a cash back card is more suitable. However, if you frequently travel by air or road, you might find points and miles to be more advantageous.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px', fontWeight:'bold' }}>
                        MATCH REWARDS WITH YOUR SPENDING
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        Discover a card that incentivizes your regular spending habits. For instance, if you frequently dine out or order food, opt for a dining rewards credit card. Conversely, if you prefer preparing meals at home, a grocery rewards credit card would be more beneficial.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px', fontWeight:'bold' }}>
                        FIND OUT WHAT CARDS YOU CAN QUALIFY FOR
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        Understanding your credit score enables you to target rewards credit cards for which you're likely to be approved. While the top rewards credit cards typically necessitate good to excellent credit (a FICO Score of 670 or higher, or VantageScore of 661 or higher), there are appealing options available for individuals with varying credit profiles. Even those with fair credit or those in the process of rebuilding their credit can access cards offering valuable rewards and perks.
                        </Typography>
                        
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px', fontWeight:'bold' }}>
                        DECIDE HOW MUCH TIME YOU’LL SPEND MAXIMIZING REWARDS
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        While credit card rewards can become complex, there are straightforward options available. For a hassle-free experience, consider opting for a cash back card tailored to your primary spending categories. You can enhance your rewards by pairing it with a card like the Citi Double Cash® Card, which offers cash back on every purchase, ensuring simplicity and value.
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        For those willing to dedicate effort to maximize rewards, combining a travel credit card with a cash back card suited for daily expenses can be advantageous. You might even opt for multiple rewards cards, but it's crucial to ensure that the benefits and rewards outweigh any associated annual fees.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px', fontWeight:'bold' }}>
                        DO THE MATH TO DECIDE WHICH CARD IS BEST FOR YOU
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        Once you've narrowed down your options, compare the expected earnings from each rewards card for the first year. Take into account the sign-up bonus, rewards accumulated from spending, and any annual credits. Then, deduct the annual fee to assess your net benefit from each card. For instance, let's contrast the Capital One Venture Rewards Credit Card with the Blue Cash Preferred® Card from American Express.
                        </Typography>
                    </Grid>
                    


                    <TableContainer component={Paper} sx={{padding:'16px 0px 0px 16px'}}>
      <Table aria-label="credit card comparison table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ bgcolor: '#08C177', color: 'white', fontWeight: 'bold' }}>Feature</TableCell>
            <TableCell sx={{ bgcolor: '#08C177', color: 'white', fontWeight: 'bold' }}>Capital One Venture Rewards Credit Card</TableCell>
            <TableCell sx={{ bgcolor:  '#08C177', color: 'white', fontWeight: 'bold' }}>Blue Cash Preferred® Card from American Express</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.feature}>
              <TableCell>{row.feature}</TableCell>
              <TableCell>{row.venture}</TableCell>
              <TableCell>{row.blueCash}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography sx={{ fontSize: '12px', color: '#7A7A7A', padding: '16px' }}>
        *To see rates & fees for Capital One Venture Rewards Credit Card, please <Link href="#">click here</Link>.
        <br /><br/>
        *To see rates & fees for Blue Cash Preferred® Card from American Express, please <Link href="#">click here</Link>.
        <br /><br/>
        *Estimate based on LendingTree's value methodology.
      </Typography>
      <Typography sx={{ fontSize: '17px', color: '#454545', margin: '0px 0px 21px',padding:"16px 0px 0px 16px" }}>
      In this scenario, the Capital One Venture Rewards Credit Card provides the highest value in the initial year of card membership. Nonetheless, the comparison takes a different turn in the second year, where there's no sign-up bonus:
      </Typography>
    </TableContainer>

{/* -------------------------------------------------------------------------- */}


<TableContainer component={Paper} sx={{boxShadow:'none',padding:'16px 0px 0px 16px'}}>
      <Table aria-label="credit card comparison table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ bgcolor: '#08C177', color: '#08C177', fontWeight: 'bold' }}>Feature</TableCell>
            <TableCell sx={{ bgcolor: '#08C177', color: 'white', fontWeight: 'bold' }}>Capital One Venture Rewards Credit Card</TableCell>
            <TableCell sx={{ bgcolor:  '#08C177', color: 'white', fontWeight: 'bold' }}>Blue Cash Preferred® Card from American Express</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
            <TableRow >
              <TableCell>Second year value</TableCell>
              <TableCell> $305</TableCell>
              <TableCell>$465</TableCell>

              
            </TableRow>
        
        </TableBody>
      </Table>
      <Typography sx={{ fontSize: '12px', color: '#7A7A7A', padding: '16px' }}>
      *Estimate based on LendingTree’s value methodology.
        
      </Typography>
      <Typography sx={{ fontSize: '17px', color: '#454545', margin: '0px 0px 21px',padding:"16px 0px 0px 16px" }}>
      In this case, the Blue Cash Preferred® Card from American Express is the clear winner in terms of ongoing value.
      </Typography>
      <Typography sx={{ fontSize: '17px', color: '#101F30', margin: '0px 0px 30px',padding:"20px",bgcolor:'#DBF8ED' }}>
      Keep in mind: The worth of points and miles can fluctuate significantly based on your redemption method. Take, for instance, the Capital One Venture Rewards Credit Card, which allows you to enhance your miles by transferring them to external loyalty programs. With adeptness in transferring Capital One miles, you can elevate their value and surpass the two cash back cards mentioned earlier.</Typography>
    </TableContainer>


            </Grid>
            </Box>
            </Container>
  )
}

export default HowtochooseRewardCD