import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {  Typography, Button, Container, Box,useTheme ,Rating} from '@mui/material';

import Venture_logo from '../../../../assets/venture-rewards_default_main.jpg'
import flex_default_logo from '../../../../assets/flex_default_All_main.jpg'
import ink_business_preferred_logo from '../../../../assets/ink-business-preferred_default_All_main.jpg'
import citi_custom_logo from '../../../../assets/citi-custom-cash_default_All_main.jpg'
import blue_cash_preferred_logo from '../../../../assets/blue-cash-preferred_default_main.jpg'
import gold_card_default_logo from '../../../../assets/gold-card_default_main.jpg'
import discover_it_logo from '../../../../assets/discover-it-secured_default_main.jpg'
import petal_2_default_logo from '../../../../assets/petal-2_default_main.jpg'
import savorone_student_logo  from '../../../../assets/savorone-student-cash-rewards_default_main.jpg'
import visa_signature_logo from '../../../../assets/visa-signature-card_default_main.jpg'
import chase_sapphire_preferred_default_logo from '../../../../assets/chase-sapphire-preferred_default_All_main.jpg'
import hilton_honors_default_logo from '../../../../assets/hilton-honors_default_main.jpg'
import aadvantage_aviator_logo from '../../../../assets/aadvantage-aviator-red-mastercard_default_All_main.jpg'
import ventureOne_logo from '../../../../assets/ventureone-rewards_default_main.jpg'

function createData(name, fat, carbs, protein, mincreditscore,  Clickhere) {
  return { name,  fat, carbs, protein ,mincreditscore,  Clickhere };
}

const rows = [
  
     //  Row 1
    createData(
    
       <><img src={Venture_logo} alt="img" width={106} height={66.5} style={{margin:'0px 0px 8px'}} />
       <Typography sx={{fontSize:'12px',color:'#0069BA',fontWeight:'bold'}}>Capital One Venture Rewards Credit Card</Typography>
       </> ,
        <> <Rating name="read-only" readOnly precision={3.1} />
       <br/><Typography sx={{color:'#4B5155',fontSize:'12px'}}>Winner</Typography></>,
        <Typography sx={{ fontSize: '14px' }}>Earn 2 miles per dollar on every purchase, every day; and 5 miles per dollar on hotels and rental cars booked through Capital One Travel.</Typography>,
        <Typography sx={{ fontSize: '14px' }}>Enjoy a one-time bonus of 75,000 miles after spending $4,000 on purchases within the first 3 months from account opening, equivalent to $750 in travel.</Typography>,
        <Typography sx={{ fontSize: '14px' }}>Good/Excellent Credit </Typography>,
     
     <><Button variant="contained" style={{ width: '183px',marginTop:'10px',textTransform:'none'}}>Apply Now</Button>
     <Typography sx={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#687073', marginTop: '5px' }}>on Capital One's secure site</Typography>
     <Button variant="text" style={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#0069BA', textTransform: 'none' }}>Rates & Fees</Button></>
  
      
    ),
  
    
     //  Row 2
    createData(
    
      <><img src={flex_default_logo} alt="img" width={106} height={66.5} style={{margin:'0px 0px 8px'}} />
      <Typography sx={{fontSize:'12px',color:'#0069BA',fontWeight:'bold'}}>Chase Freedom Flex℠*</Typography>
      </> ,
       
        <><Rating/><br/><Typography sx={{color:'#4B5155',fontSize:'12px'}}>Best no-fee rewards credit card</Typography></>,   
         <Typography sx={{ fontSize: '14px' }}>Earn 5% cash back on up to $1,500 in combined purchases in bonus categories each quarter you activate, with new 5% categories available every quarter. Additionally, get 5% cash back on travel purchased through Chase Ultimate Rewards®, 3% on dining and drugstores, and 1% on all other purchases.</Typography>,
        <Typography sx={{ fontSize: '14px' }}>Receive a $200 bonus after spending $500 on purchases within the first 3 months of account opening.</Typography>,
        <Typography sx={{ fontSize: '14px' }}>Good/Excellent Credit</Typography>,
     
        <><Button variant="outlined" style={{ width: '183px',marginTop:'10px',textTransform:'none'}}>Learn more</Button>
        <Typography sx={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#687073', marginTop: '5px' }}>on Chase's secure site</Typography></>
     
      
    ),
    
 
     //  Row 3
    createData(
    
      <><img src={ink_business_preferred_logo} alt="img" width={106} height={66.5} style={{margin:'0px 0px 8px'}} />
      <Typography sx={{fontSize:'12px',color:'#0069BA',fontWeight:'bold'}}>Ink Business Preferred® Credit Card</Typography>
      </> ,
        
        <><Rating/><br/><Typography sx={{color:'#4B5155',fontSize:'12px'}}>Top business rewards credit card</Typography></>,        
        <Typography sx={{ fontSize: '14px' }}>Get 3 points per $1 on the initial $150,000 spent in combined purchases on travel, shipping, Internet, cable and phone services, as well as advertising purchases made with social media sites and search engines each account anniversary year. Earn 1 point per $1 on all other purchases—with unlimited earning potential.</Typography>,
        <Typography sx={{ fontSize: '14px' }}>Earn a bonus of 100,000 points after spending $8,000 on purchases within the initial 3 months from account opening.</Typography>,
        <Typography sx={{ fontSize: '14px' }}>Excellent</Typography>,
     
       
        <><Button variant="contained" style={{ width: '183px',marginTop:'10px',textTransform:'none'}}>Apply Now</Button>
        <Typography sx={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#687073', marginTop: '5px' }}>on Chase's secure site</Typography>
       </>
           
    ),
    
    
    
   //  Row 4
    createData( <><img src={citi_custom_logo} alt="img" width={106} height={66.5} style={{margin:'0px 0px 8px'}} />
    <Typography sx={{fontSize:'12px',color:'#0069BA',fontWeight:'bold'}}>Citi Custom Cash® Card</Typography>
    </> ,
    <><Rating/><br/><Typography sx={{color:'#4B5155',fontSize:'12px'}}>Best gas rewards credit card</Typography></>,       
      <Typography sx={{ fontSize: '14px' }}>Receive 5% cash back on purchases in your highest eligible spending category each billing cycle, up to the first $500 spent, then 1% cash back thereafter. Additionally, earn unlimited 1% cash back on all other purchases. Plus, take advantage of a special Travel Offer: Earn an extra 4% cash back on hotels, car rentals, and attractions booked through the Citi Travel℠ portal until 6/30/2025.</Typography>,
      <Typography sx={{ fontSize: '14px' }}>Get $200 in cash back after spending $1,500 on purchases within the initial 6 months of opening your account. This bonus will be delivered as 20,000 ThankYou® points, which can be redeemed for $200 cash back.</Typography>,
      <Typography sx={{ fontSize: '14px' }}>Fair/Good/Excellent</Typography>,
   
      <><Button variant="contained" style={{ width: '183px',marginTop:'10px',textTransform:'none'}}>Apply Now</Button>
      <Typography sx={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#687073', marginTop: '5px' }}>on Citibank's secure site</Typography>
      <Button variant="text" style={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#0069BA', textTransform: 'none' }}>Rates & Fees</Button></>
    
    
  ),


  
//  Row 5
    createData(<><img src={blue_cash_preferred_logo} alt="img" width={106} height={66.5} style={{margin:'0px 0px 8px'}} />
    <Typography sx={{fontSize:'12px',color:'#0069BA',fontWeight:'bold'}}>Blue Cash Preferred® Card from American Express</Typography>
    </> ,
   
    <><Rating/><br/><Typography sx={{color:'#4B5155',fontSize:'12px'}}>Best grocery rewards credit card</Typography></>,      
         <Typography sx={{ fontSize: '14px' }}>Earn 6% Cash Back at U.S. supermarkets on up to $6,000 per year in purchases (then 1%), 6% Cash Back on select U.S. streaming subscriptions, 3% Cash Back at U.S. gas stations and on transit (including taxis/rideshare, parking, tolls, trains, buses, and more), and 1% Cash Back on all other purchases. Terms and conditions apply.</Typography>,
         <Typography sx={{ fontSize: '14px' }}>Receive a $250 statement credit after spending $3,000 on purchases with your new Card within the initial 6 months.	</Typography>,
         <Typography sx={{ fontSize: '14px' }}>Good/Excellent</Typography>,
         <><Button variant="contained" style={{ width: '183px',marginTop:'10px',textTransform:'none'}}>Apply Now</Button>
         <Typography sx={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#687073', marginTop: '5px' }}>on American Express's secure site</Typography>
         <Button variant="text" style={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#0069BA', textTransform: 'none' }}>Rates & Fees</Button></>
          ),
 

    //  Row 6
    createData( <><img src={gold_card_default_logo} alt="img" width={106} height={66.5} style={{margin:'0px 0px 8px'}} />
    <Typography sx={{fontSize:'12px',color:'#0069BA',fontWeight:'bold'}}>American Express® Gold Card</Typography>
    </> ,
   
    <><Rating/><br/><Typography sx={{color:'#4B5155',fontSize:'12px'}}>Best dining rewards card</Typography></>,         
         <Typography sx={{ fontSize: '14px' }}>Earn 4X Membership Rewards® Points at Restaurants, including takeout and delivery in the U.S., and earn 4X Membership Rewards® points at U.S. supermarkets (on up to $25,000 per calendar year in purchases, then 1X), and 3X Membership Rewards® points on flights booked directly with airlines or on amextravel.com. Terms and conditions apply.</Typography>,
         <Typography sx={{ fontSize: '14px' }}>Receive 60,000 Membership Rewards® Points after spending $6,000 on eligible purchases with your new Card within the initial 6 months of Card Membership.</Typography>,
         <Typography sx={{ fontSize: '14px' }}>Good/Excellent</Typography>,
         <><Button variant="contained" style={{ width: '183px',marginTop:'10px',textTransform:'none'}}>Apply Now</Button>
         <Typography sx={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#687073', marginTop: '5px' }}>on Capital One's secure site</Typography>
         <Button variant="text" style={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#0069BA', textTransform: 'none' }}>Rates & Fees</Button></>
          ),
 


     //  Row 7
    createData( <><img src={discover_it_logo} alt="img" width={106} height={66.5} style={{margin:'0px 0px 8px'}} />
    <Typography sx={{fontSize:'12px',color:'#0069BA',fontWeight:'bold'}}>Discover it® Secured Credit Card</Typography>
    </> ,
   
    <><Rating/><br/><Typography sx={{color:'#4B5155',fontSize:'12px'}}>Best rewards credit card for bad credit</Typography></>,       
         <Typography sx={{ fontSize: '14px' }}>Earn 2% cash back at Gas Stations and Restaurants on up to $1,000 in combined purchases each quarter, automatically. Additionally, earn unlimited 1% cash back on all other purchases.</Typography>,
         <Typography sx={{ fontSize: '14px' }}>Discover will match all the cash back you've earned at the end of your first year.	</Typography>,
         <Typography sx={{ fontSize: '14px' }}>Limited/Poor</Typography>,
         <><Button variant="contained" style={{ width: '183px',marginTop:'10px',textTransform:'none'}}>Apply Now</Button>
         <Typography sx={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#687073', marginTop: '5px' }}>on Discover's secure site</Typography>
         <Button variant="text" style={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#0069BA', textTransform: 'none' }}>Rates & Fees</Button></>
          ),
 


    //  Row 8
    createData( <><img src={petal_2_default_logo} alt="img" width={106} height={66.5} style={{margin:'0px 0px 8px'}} />
    <Typography sx={{fontSize:'12px',color:'#0069BA',fontWeight:'bold'}}>Petal® 2 Cash Back, No Fees Visa® Credit Card*</Typography>
    </> ,
   
    <><Rating/><br/><Typography sx={{color:'#4B5155',fontSize:'12px'}}>Best rewards credit card for fair credit</Typography></>,       
         <Typography sx={{ fontSize: '14px' }}>Earn 1% cash back on eligible purchases immediately, and 2% to 10% cash back at participating merchants.</Typography>,
         <Typography sx={{ fontSize: '14px' }}>N/A</Typography>,
         <Typography sx={{ fontSize: '14px' }}>N/A</Typography>,
         <><Button variant="outlined" style={{ width: '183px',marginTop:'10px',textTransform:'none'}}>Learn more</Button>
         <Typography sx={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#687073', marginTop: '5px' }}>on Petal's secure site</Typography>
         </>
          ),
 


    //  Row 9
    createData(<><img src={savorone_student_logo} alt="img" width={106} height={66.5} style={{margin:'0px 0px 8px'}} />
    <Typography sx={{fontSize:'12px',color:'#0069BA',fontWeight:'bold'}}>Capital One SavorOne Student Cash Rewards Credit Card</Typography>
    </> ,
   
    <><Rating/><br/><Typography sx={{color:'#4B5155',fontSize:'12px'}}>Best student rewards credit card</Typography></>,        
         <Typography sx={{ fontSize: '14px' }}>Earn 3% Cash Back on dining, entertainment, select streaming services, and at grocery stores (excluding superstores like Walmart® and Target®); 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply); 8% Cash Back on Capital One Entertainment purchases; 1% Cash Back on all other purchases.</Typography>,
         <Typography sx={{ fontSize: '14px' }}>Earn $50 Cash Back when you spend $100 in the first three months</Typography>,
         <Typography sx={{ fontSize: '14px' }}>Limited/Fair</Typography>,
         <><Button variant="contained" style={{ width: '183px',marginTop:'10px',textTransform:'none'}}>Apply Now</Button>
         <Typography sx={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#687073', marginTop: '5px' }}>on Capital One's secure site</Typography>
         <Button variant="text" style={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#0069BA', textTransform: 'none' }}>Rates & Fees</Button></>
          ),
 


     //  Row 10
    createData( <><img src={visa_signature_logo} alt="img" width={106} height={66.5} style={{margin:'0px 0px 8px'}} />
    <Typography sx={{fontSize:'12px',color:'#0069BA',fontWeight:'bold'}}>Prime Visa*</Typography>
    </> ,
   
    <><Rating/><br/><Typography sx={{color:'#4B5155',fontSize:'12px'}}>Best Amazon rewards credit card</Typography></>,       
         <Typography sx={{ fontSize: '14px' }}>Earn unlimited 5% cash back at Amazon.com, Amazon Fresh, Whole Foods Market, and on Chase Travel purchases with an eligible Prime membership. Additionally, earn unlimited 2% cash back at gas stations, restaurants, and on local transit and commuting (including rideshare), and unlimited 1% cash back on all other purchases.</Typography>,
         <Typography sx={{ fontSize: '14px' }}>Receive a $100 Amazon Gift Card instantly upon approval, exclusively for Prime members.</Typography>,
         <Typography sx={{ fontSize: '14px' }}>Good/Excellent</Typography>,
         <><Button variant="contained" style={{ width: '183px',marginTop:'10px',textTransform:'none'}}>Learn more</Button>
         <Typography sx={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#687073', marginTop: '5px' }}>on Chase's secure site</Typography>
        </>
          ),
    
           //  Row 11
    createData( <><img src={chase_sapphire_preferred_default_logo} alt="img" width={106} height={66.5} style={{margin:'0px 0px 8px'}} />
    <Typography sx={{fontSize:'12px',color:'#0069BA',fontWeight:'bold'}}>Chase Sapphire Preferred® Card</Typography>
    </> ,
   
    <><Rating/><br/><Typography sx={{color:'#4B5155',fontSize:'12px'}}>Best runner-up travel rewards credit card</Typography></>,       
         <Typography sx={{ fontSize: '14px' }}>Experience benefits such as earning 5x points on travel purchased through Chase Travel℠, 3x points on dining, select streaming services, and online groceries, 2x points on all other travel purchases, and 1x points on all other purchases. Additionally, receive a $50 Annual Chase Travel Hotel Credit, among other perks.</Typography>,
         <Typography sx={{ fontSize: '14px' }}>Earn 75,000 bonus points after spending $4,000 on purchases within the first 3 months from account opening. That's equivalent to over $900 when redeemed through Chase Travel℠.</Typography>,
         <Typography sx={{ fontSize: '14px' }}>Excellent</Typography>,
         <><Button variant="contained" style={{ width: '183px',marginTop:'10px',textTransform:'none'}}>Apply Now</Button>
         <Typography sx={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#687073', marginTop: '5px' }}>on Chase's secure site</Typography>
        </>
          ),


          
           //  Row 12
    createData(<><img src={hilton_honors_default_logo} alt="img" width={106} height={66.5} style={{margin:'0px 0px 8px'}} />
    <Typography sx={{fontSize:'12px',color:'#0069BA',fontWeight:'bold'}}>Hilton Honors American Express Surpass® Card</Typography>
    </> ,
   
    <><Rating/><br/><Typography sx={{color:'#4B5155',fontSize:'12px'}}>Best hotel rewards credit card</Typography></>,       
         <Typography sx={{ fontSize: '14px' }}>Earn 12X Hilton Honors Bonus Points for every dollar of eligible purchases made directly with a hotel or resort within the Hilton Portfolio using your Card. Get 6X Hilton Honors Bonus Points for every dollar of eligible purchases at U.S. restaurants, U.S. supermarkets, and U.S. gas stations. Earn 4X Points for every dollar spent on U.S. Online Retail Purchases. Additionally, receive 3X Hilton Honors Bonus Points for all other eligible purchases made with your Card.</Typography>,
         <Typography sx={{ fontSize: '14px' }}>Receive 130,000 Hilton Honors Bonus Points after spending $3,000 on purchases with the Hilton Honors American Express Surpass® Card within your first 6 months of Card Membership.</Typography>,
         <Typography sx={{ fontSize: '14px' }}>Good/Excellent</Typography>,
         <><Button variant="contained" style={{ width: '183px',marginTop:'10px',textTransform:'none'}}>Apply Now</Button>
         <Typography sx={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#687073', marginTop: '5px' }}>on American Express's secure site</Typography>
         <Button variant="text" style={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#0069BA', textTransform: 'none' }}>Rates & Fees</Button></>
          ),


           //  Row 13
    createData( <><img src={aadvantage_aviator_logo} alt="img" width={106} height={66.5} style={{margin:'0px 0px 8px'}} />
    <Typography sx={{fontSize:'12px',color:'#0069BA',fontWeight:'bold'}}>AAdvantage® Aviator® Red World Elite Mastercard®*</Typography>
    </> ,
   
    <><Rating/><br/><Typography sx={{color:'#4B5155',fontSize:'12px'}}>Best airline rewards credit card</Typography></>,       
         <Typography sx={{ fontSize: '14px' }}>Earn 2 AAdvantage® miles for every $1 spent on eligible purchases with American Airlines, and earn 1 AAdvantage® mile per $1 spent on all other purchases.</Typography>,
         <Typography sx={{ fontSize: '14px' }}>Earn 50,000 AAdvantage® bonus miles after your first purchase and full payment of the $99 annual fee within the initial 90 days.</Typography>,
         <Typography sx={{ fontSize: '14px' }}>Good/Excellent</Typography>,
         <><Button variant="outlined" style={{ width: '183px',marginTop:'10px',textTransform:'none'}}>Learn more</Button>
         <Typography sx={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#687073', marginTop: '5px' }}>on Barclays's secure site</Typography>
        </>
          ),


           //  Row 14
    createData( <><img src={ventureOne_logo} alt="img" width={106} height={66.5} style={{margin:'0px 0px 8px'}} />
    <Typography sx={{fontSize:'12px',color:'#0069BA',fontWeight:'bold'}}>Capital One VentureOne Rewards Credit Card</Typography>
    </> ,
   
    <><Rating/><br/><Typography sx={{color:'#4B5155',fontSize:'12px'}}>Best travel card with no fee</Typography></>,       
         <Typography sx={{ fontSize: '14px' }}>Earn 1.25 Miles per dollar on every purchase, every day, and 5 Miles per dollar on hotels and rental cars booked through Capital One Travel.</Typography>,
         <Typography sx={{ fontSize: '14px' }}>Receive a bonus of 20,000 miles after spending $500 on purchases within 3 months from account opening, which is equivalent to $200 in travel.</Typography>,
         <Typography sx={{ fontSize: '14px' }}>Good/Excellent</Typography>,
         <><Button variant="contained" style={{ width: '183px',marginTop:'10px',textTransform:'none'}}>Apply Now</Button>
         <Typography sx={{ fontSize: '12px', fontFamily: "'Lato', sans-serif'", color: '#687073', marginTop: '5px' }}>on Capital One's secure site</Typography>
        </>
          ),
 


    
   
          
          ]

export default function ComparisonTable() {
    const theme = useTheme();

  return (
    <><Container sx={{display:{lg:'block',md:'block',xs:'none'}}}>
     <Typography sx={{fontSize:'27px',fontFamily:"'Lato', sans-serif",margin:'20px 0px',color:'#101F30',  [theme.breakpoints.down("sm")]: {
                fontSize: "20px",
              },}}>Comparison summary of the best rewards credit cards</Typography>
    <TableContainer component={Paper}sx={{ justifyContent:'center' }}>
      <Table sx={{ minWidth: 650, marginTop: '40px' }} aria-label="simple table">
        <TableHead sx={{height:'98px'}}>
          <TableRow >
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '16px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#E3E6E8', padding:'15px 0px 10px 16px',width:'148px'  }}>Credit Cards</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '16px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#E3E6E8', padding:'15px 0px 10px 16px',width:'90px'   }}>Our Ratings</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '16px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#E3E6E8', padding:'15px 0px 10px 16px',width:'116px'  }}>Rewards Rate</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '16px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#E3E6E8' , padding:'15px 0px 10px 16px',width:'116px'  }}>Welcome</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '16px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#E3E6E8' , padding:'15px 0px 10px 16px',width:'116px' }}>Recommended Credit</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '16px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#101F30', padding:'15px 0px 10px 16px',width:'230px'  }}>Clickhere</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center"  sx={{ verticalAlign: 'top',textAlign:'left',padding:'16px 0px 16px 16px' }}>  {row.name}</TableCell>
              <TableCell align="center"  sx={{ verticalAlign: 'top',textAlign:'left',padding:'16px 0px 16px 16px' }} >{row.fat}</TableCell>
              <TableCell align="center" sx={{ verticalAlign: 'top',textAlign:'left',padding:'16px 0px 16px 16px'  }}>{row.carbs}</TableCell>
              <TableCell align="center" sx={{ verticalAlign: 'top' ,textAlign:'left',padding:'16px 0px 16px 16px' }}>{row.protein}</TableCell>
              <TableCell align="center" sx={{ verticalAlign: 'top' ,textAlign:'left',padding:'16px 0px 16px 16px' }}>{row.mincreditscore}</TableCell>
              <TableCell align="center" sx={{ verticalAlign: 'top' ,padding:'16px 0px 16px 16px' }}>{row.Clickhere}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>





    {/* --------------------------------------------------------------
    ------------------------------------------------------------- */}


<Container
        sx={{
        direction: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center', // Center the buttons horizontally
        width: '100%',
        height: 'auto',
        flexGrow: 1,
        display: { sm: 'none', md: 'none', lg:'flex', xs:'none'},
        px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints

      }}>
      <Box> 
        
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'12px',  textAlign:'left', marginTop:'24px',  fontFamily: "'Lato', sans-serif",color:'#7A7A7A'}}
        >*The information for the Chase Freedom Flex℠, Petal® 2 Cash Back, No Fees Visa® Credit Card, Prime Visa and AAdvantage® Aviator® Red World Elite Mastercard® has been collected by LendingTree and has not been reviewed or provided by the issuer of this card prior to publication. Terms Apply.
        </Typography>
       
        </Box>
   </Container>
      </>

  );
}


