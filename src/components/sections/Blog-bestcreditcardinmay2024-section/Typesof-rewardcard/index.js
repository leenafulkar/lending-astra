import React from 'react';
import { Container, Box, Grid, Typography,Link} from '@mui/material';
import {  useTheme } from '@mui/system'; // Import useTheme
import '../Typesof-rewardcard/index.css'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TypesofRewardCard = () => {
    const rows = [
        { program: <Link sx={{textDecoration:'none'}}>American Express Membership Rewards</Link>, value: '$0.02' },
        { program: <Link sx={{textDecoration:'none'}}>Chase Ultimate Rewards®</Link>, value: '$0.02' },
        { program: <Link sx={{textDecoration:'none'}}>Citi ThankYou® Rewards</Link>, value: '$0.018' },
        { program: <Link sx={{textDecoration:'none'}}>World of Hyatt</Link>, value: '$0.017' },
        { program: <Link sx={{textDecoration:'none'}}>Southwest Rapid Rewards</Link>,value: '$0.014' },
        { program: <Link sx={{textDecoration:'none'}}>Delta SkyMiles</Link>, value: '$0.011' },
        { program: <Link sx={{textDecoration:'none'}}>United MileagePlus</Link>, value: '$0.013' },
        { program: <Link sx={{textDecoration:'none'}}>American Airlines AAdvantage</Link>, value: '$0.018' },
        { program: <Link sx={{textDecoration:'none'}}>Marriott Bonvoy</Link>, value: '$0.009' },
        { program: <Link sx={{textDecoration:'none'}}>Hilton Honors</Link>, value: '$0.005' },
        { program: <Link sx={{textDecoration:'none'}}>IHG Rewards Club</Link>, value: '$0.005' }
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
                          What is a rewards credit card?
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 34px' }}>
                        A rewards credit card offers cash back, points, or miles as incentives for using the card for purchases. While cash back is preferred by many, frequent travelers might find greater value in a travel card's points or miles. The top rewards credit cards offer flexible redemption choices, enticing sign-up bonuses, and valuable additional benefits.                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '27px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '20px 0px' }}>
                        Types of rewards cards
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 34px' }}>
                        Rewards credit cards generally fall into two main categories: cash back cards and travel cards. Cash back credit cards provide a percentage of your purchases back as cash rewards, whereas travel cards offer valuable points or airline miles.                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '27px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '20px 0px' }}>
                        Cash back rewards credit cards
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 34px' }}>
                        Various types of cash back cards exist, each with its own rewards structure. With numerous options available in each category, the optimal cash back rewards card will match your lifestyle and spending patterns.                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px',fontWeight:'bold' }}>
                        Types of cash back cards
                        </Typography>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px', fontWeight:'bold' }}>
                        FLAT-RATE CASH BACK CREDIT CARDS
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        Flat-rate cards offer a consistent percentage of cash back on all purchases, regardless of category. A key advantage of these cards is the avoidance of tracking bonus categories or quarterly promotions. The Wells Fargo Active Cash® Card, renowned for its unlimited 2% cash rewards on purchases, stands out as one of the most sought-after flat-rate cash back cards.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px', fontWeight:'bold' }}>
                        TIERED CASH BACK CREDIT CARDS
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        These cards offer higher rewards rates in specific categories alongside a lower flat rate on all other purchases. A notable example of a tiered cash back card is the Blue Cash Preferred® Card from American Express. It provides 6% Cash Back at U.S. supermarkets on up to $6,000 per year in purchases (then 1%), 6% Cash Back on select U.S. streaming subscriptions, 3% Cash Back at U.S. gas stations and on transit (including taxis/rideshare, parking, tolls, trains, buses, and more), and 1% Cash Back on other purchases. Terms apply.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px', fontWeight:'bold' }}>
                        ROTATING CASH BACK CREDIT CARDS
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        Rotating cash back cards provide elevated cash back rates on specific categories for a limited duration, typically on a quarterly basis. Many of these cards mandate opting in to receive the higher rewards rate, often with a spending cap. The Discover it® Cash Back stands out as one of the most favored rotating cash back cards, offering 5% cash back (on up to $1,500) on varying categories each quarter (activation required). Upon reaching the spending cap, you'll earn the card's base rate of 1% on those purchases.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px', fontWeight:'bold' }}>
                        How to earn cash back rewards
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        Earning cash back rewards is straightforward: use your cash back card for purchases. Generally, you'll earn rewards on every purchase, with tiered and rotating rewards cards offering bonus rates on specific categories. Another way to earn rewards is by capitalizing on your card's sign-up bonus. While earning requirements vary, you'll typically need to spend a certain amount with the card within the initial few months.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px', fontWeight:'bold' }}>
                        How to redeem cash back rewards
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        Redemption options for cash back vary among cards, but some of the most common choices include:
                        </Typography>
                        <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        A statement credit on your monthly bill
                        </Typography>
                        <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        Direct deposit into your bank account
                        </Typography>
                        <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        A check
                        </Typography>
                        <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        Gift cards
                        </Typography>
                        <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        Merchandise
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px', fontWeight:'bold' }}>
                        Travel rewards credit cards
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        There are three primary types of travel rewards cards: general travel cards, airline credit cards, and hotel credit cards. The top travel cards typically offer:                        </Typography>
                        <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        Increased earning rates on travel expenditures
                        </Typography>
                        <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        A generous sign-up bonus
                        </Typography>
                        <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        Flexible redemption options
                        </Typography>
                        <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        No foreign transaction fees
                        </Typography>
                        <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        Valuable travel perks (e.g., free nights, airport lounge access)
                        </Typography>
                        <Typography className='green-dot' sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        Travel protections (e.g., trip insurance, rental car insurance)
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px',fontWeight:'bold' }}>
                        Types of travel cards
                        </Typography>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px', fontWeight:'bold' }}>
                        GENERAL TRAVEL CARDS
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        Ideal for travelers without allegiance to a specific airline or hotel chain, these cards offer versatile points for every dollar spent. While some issuers (such as Capital One) term these points as "miles," the principle remains consistent. Depending on the card, you can utilize these points or miles to book travel via your issuer's travel portal, transfer them to travel partners, or redeem them for cash back or gift cards.                        </Typography>
                    </Grid>



                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px', fontWeight:'bold' }}>
                        AIRLINE CREDIT CARDS
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        For frequent flyers loyal to a specific airline, co-branded cards offer generous rewards for their dedication. Alongside earning valuable miles on flights and other travel-related expenses, airline cards frequently provide airline-specific advantages. Perks such as complimentary checked bags, priority boarding, and in-flight discounts greatly enhance the card's worth. Some cards even expedite your progression to elite status based on your yearly spending.                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px', fontWeight:'bold' }}>
                        HOTEL CREDIT CARDS
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        Similar to airline cards, hotel cards provide significant value for travelers committed to a particular brand. Alongside earning points through stays at preferred hotels and resorts, you'll also enjoy hotel-specific benefits such as elite status, complimentary nights, and early check-in. Major hotel groups like Marriott and Hilton boast thousands of properties worldwide, enabling you to accrue points on a global level.                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px', fontWeight:'bold' }}>
                        How to earn travel rewards
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        Travel rewards cards allow you to accumulate points or miles with each card usage. Typically, you'll earn a higher rate on travel-related expenses, particularly purchases from the affiliated hotel chain or airline. Additionally, travel cards often feature some of the most lucrative sign-up bonuses available, so be sure to capitalize on your card's offer. For instance, with the Chase Sapphire Preferred® Card, you can earn 75,000 bonus points after spending $4,000 on purchases within the first 3 months from account opening, equivalent to over $900 when redeemed through Chase Travel℠.                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px', fontWeight:'bold' }}>
                        How to calculate travel rewards
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        In contrast to cash back rewards, which have a set value, the worth of points and miles fluctuates depending on how you redeem them. Furthermore, prices for flights and hotel accommodations can vary based on factors such as date, location, and the type of seat or room. Despite this complexity, straightforward calculations can aid in determining the value of points or miles for any given situation.                        </Typography>
                    </Grid>
{/* ------------------------------------------------------------- */}
                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '16px', fontFamily: "'Lato', sans-serif", color: '#000000', margin: '0px 0px 18px' }}>
                        AIRLINE MILES
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 34px' }}>
                        To calculate the value of an airline mile, divide the cost of the flight (minus taxes and fees) by the number of points required to book it.                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 20px',bgcolor:"#DBF8ED",padding:'20px' }}>
                        <span style={{fontWeight:'bold'}}>Mile value </span> = Cost in cash (minus taxes and fees) ÷ Number of points needed for booking
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 34px' }}>
                        For instance, if you need 30,000 miles to cover a $400 flight, each mile is worth approximately $0.013.                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '16px', fontFamily: "'Lato', sans-serif", color: '#000000', margin: '0px 0px 18px' }}>
                        HOTEL POINTS
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 34px' }}>
                        The calculation is similar for hotel points, except that you use the total price, including taxes and fees.                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 20px',bgcolor:"#DBF8ED",padding:'20px' }}>
                        <span style={{fontWeight:'bold'}}>Point value </span> = Cost in cash (including taxes and fees) ÷ Number of points needed for booking
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 34px' }}>
                        For instance, if you need 30,000 points to cover a $215 hotel reservation, each point is worth $0.007.                         </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 34px' }}>
                        As a reference, here's a comparison of some of the most popular reward programs:</Typography>
                    </Grid>
{/* //////////////////////////////////////////////////////////////// */}

<TableContainer component={Paper} sx={{padding:'16px 0px 0px 16px'}}>
      <Table aria-label="loyalty program table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ bgcolor: '#08C177', color: 'white', fontWeight: 'bold',fontSize:'15px' }}>Loyalty program</TableCell>
            <TableCell align="left" sx={{ bgcolor: '#08C177', color: 'white', fontWeight: 'bold',fontSize:'15px' }}>Average point/mile value*</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.program}>
              <TableCell align="left" sx={{fontSize:'14px'}}>{row.program}</TableCell>
              <TableCell align="left" sx={{fontSize:'14px'}}>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography sx={{ fontSize: '12px', color: '#7A7A7A', padding: '16px' }}>
        *Estimates based on LendingTree's value methodology.
      </Typography>
    </TableContainer>
    {/* --------------------------------------------------- */}




                   <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px', fontWeight:'bold' }}>
                        How to redeem travel rewards
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        Redeeming rewards with travel rewards cards can be more intricate compared to cash back cards. The process depends on the card type and your preferred method of using rewards, but typically involves redeeming points or miles through the card's rewards portal or the affiliated loyalty program.                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px', fontWeight:'bold' }}>
                        GENERAL TRAVEL CARDS
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        Maximize the value of your points by redeeming them through your card issuer's travel portal or transferring them to an airline or hotel partner. While most travel cards offer options to redeem points for cash back, statement credits, and gift cards, these alternatives typically result in a lower point value.                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px', fontWeight:'bold' }}>
                        AIRLINE CARDS
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        For optimal value, redeem your points for free flights through the airline's loyalty program. Other popular redemption choices include flight upgrades, car rentals, and even transferring miles to a hotel partner.                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin: '0px 0px 18px', fontWeight:'bold' }}>
                        HOTEL CARDS
                        </Typography>
                        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin: '0px 0px 31px' }}>
                        To maximize the value of your points, use them to book stays through the hotel's loyalty program. While some hotel cards permit point transfers to airline partners, the options are typically limited, and the transfer rates may not be favorable.                        </Typography>
                    </Grid>



                </Grid>
            </Box>


        </Container>
    );
};

export default TypesofRewardCard;
