import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography, useTheme } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';



const TravelRewardCards = () => {
    const theme = useTheme();
  return (
    // 1
    <Container >
    <Box sx={{ flexGrow: 1 , borderBottom: `1px solid #ccc`}}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography
                    sx={{
                        fontSize: '27px',
                        color: '#101F30',
                        fontFamily: "'Lato', sans-serif",
                        textAlign: 'left',
                        margin:'20px 0px',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '22px',
                        },
                    }}
                >
                Best rewards credit cards
                </Typography>
            </Grid>
  
          <Grid item sx={12}>
          <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin:'0px 0px 18px',fontWeight:'bold' }}>
          Capital One Venture Rewards Credit Card </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 20px',padding:'20px' ,fontWeight:'bold', border: '4px solid', 
            borderColor: '#dbf8ed'}}>
         <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} />

         Ideal for occasional travelers seeking to earn rewards. </Typography>
         </Grid>


         <Grid item sx={12}>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
          Standout rewards/notable perks
           </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>

          Earn bonus miles on hotel and rental car bookings through Capital One Travel and get up to $100 credit for Global Entry or TSA PreCheck®.</Typography>
         </Grid>


         <Grid item sx={12}>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
          Welcome offer
           </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>

          Receive a one-time bonus of 75,000 miles when you spend $4,000 on purchases within the first 3 months from account opening, equivalent to $750 in travel.</Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold',margin:'0px 0px 34px' }}>
          Estimated rewards earned*
           </Typography>
         </Grid>



         <Grid item xs={12} bgcolor="#DBF8ED" padding="20px" margin="0px 0px 5px" marginLeft="20px">
         
         <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545'}}>
         First-year rewards value: $1,995
            </Typography>
          <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

          Ongoing rewards value: $645
          </Typography>
         </Grid>

         <Grid item xs={12}>
            <Typography sx={{ color:'#7A7A7A',fontSize:'12px', fontFamily: "'Lato', sans-serif"}}>*See our value  methodology for more details.</Typography>
            </Grid>


        </Grid>
        {/* 2 */}
        {/* ////////////////////////////////////////////////////////////// */}


        <Grid container spacing={2} marginTop={2}>
           
  
          <Grid item sx={12}>
          <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin:'0px 0px 18px',fontWeight:'bold' }}>
          Chase Freedom Flex℠</Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 20px',padding:'20px' ,fontWeight:'bold', border: '4px solid', 
            borderColor: '#dbf8ed'}}>
         <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} />

         Ideal if you prefer rotating cash back categories each quarter. </Typography>
         </Grid>


         <Grid item sx={12}>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
          Standout rewards/notable perks
           </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>

          You'll enjoy a 5% cash back rate on rotating bonus categories and 3% on purchases at drugstores and dining establishments. Benefit from a lengthy 0% introductory APR on purchases for 15 months, followed by a variable APR of 20.49% - 29.24%. This same offer applies to balance transfers.</Typography>
         </Grid>


         <Grid item sx={12}>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
          Welcome offer
           </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>

          Receive a $200 bonus once you make $500 in purchases within the initial 3 months of opening your account.</Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold',margin:'0px 0px 34px' }}>
          Estimated rewards earned*
           </Typography>
         </Grid>



         <Grid item xs={12} bgcolor="#DBF8ED" padding="20px" margin="0px 0px 5px" marginLeft="20px">
         
         <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545'}}>

            First year rewards value: $1,995
            </Typography>
          <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

          Ongoing rewards value:$441
          </Typography>
         </Grid>

         <Grid item xs={12}>
            <Typography sx={{ color:'#7A7A7A',fontSize:'12px', fontFamily: "'Lato', sans-serif"}}>*See our value  methodology for more details.</Typography>
            </Grid>


      </Grid>
      {/* 3 */}
       {/* ////////////////////////////////////////////////////////////// */}


       <Grid container spacing={2} marginTop={2}>
           
  
           <Grid item sx={12}>
           <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin:'0px 0px 18px',fontWeight:'bold' }}>
           Ink Business Preferred® Credit Card</Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 20px',padding:'20px' ,fontWeight:'bold', border: '4px solid', 
             borderColor: '#dbf8ed'}}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} />
 
          Ideal for business owners aiming to accumulate miles during business travel. </Typography>
          </Grid>
 
 
          <Grid item sx={12}>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
           Standout rewards/notable perks
            </Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>
 
           Earn rewards on every purchase and enjoy bonus earnings on travel and select business categories, up to $150,000 per year. Points are valued 25% more when redeemed for travel through Chase TravelSM.</Typography>
          </Grid>
 
 
          <Grid item sx={12}>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
           Welcome offer
            </Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>
 
           Get 100,000 bonus points after spending $8,000 on purchases within the initial 3 months of opening your account.</Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold',margin:'0px 0px 34px' }}>
           Estimated rewards earned*
            </Typography>
          </Grid>
 
 
 
          <Grid item xs={12} bgcolor="#DBF8ED" padding="20px" margin="0px 0px 5px" marginLeft="20px">
          
          <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545'}}>
 
             First year rewards value: $2,393
             </Typography>
           <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>
 
           Ongoing rewards value: $393
           </Typography>
          </Grid>
 
          <Grid item xs={12}>
             <Typography sx={{ color:'#7A7A7A',fontSize:'12px', fontFamily: "'Lato', sans-serif"}}>*See our value  methodology for more details.</Typography>
             </Grid>
 
 
       </Grid>
       {/* 4 */}
        {/* ////////////////////////////////////////////////////////////// */}


        <Grid container spacing={2} marginTop={2}>
           
  
          <Grid item sx={12}>
          <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin:'0px 0px 18px',fontWeight:'bold' }}>
          Citi Custom Cash® Card</Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 20px',padding:'20px' ,fontWeight:'bold', border: '4px solid', 
            borderColor: '#dbf8ed'}}>
         <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} />

         Ideal for commuters or frequent travelers. </Typography>
         </Grid>


         <Grid item sx={12}>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
          Standout rewards/notable perks
           </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>

          Earn cash back on all purchases, plus an impressive 5% in eligible spending categories, including gas, each billing cycle. With the average American spending between $150 to $200 on gas each month, this card could significantly boost your savings. </Typography>
         </Grid>


         <Grid item sx={12}>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
          Welcome offer
           </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>

          Earn $200 in cash back after spending $1500 on purchases within the first 6 months of opening your account. This bonus offer will be fulfilled as 20,000 ThankYou® points, which can be redeemed for $200 cash back.</Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold',margin:'0px 0px 34px' }}>
          Estimated rewards earned*
           </Typography>
         </Grid>



         <Grid item xs={12} bgcolor="#DBF8ED" padding="20px" margin="0px 0px 5px" marginLeft="20px">
         
         <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545'}}>

            First year rewards value: $610
            </Typography>
          <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

          Ongoing rewards value: $410
          </Typography>
         </Grid>

         <Grid item xs={12}>
            <Typography sx={{ color:'#7A7A7A',fontSize:'12px', fontFamily: "'Lato', sans-serif"}}>*See our value  methodology for more details.</Typography>
            </Grid>


      </Grid>
      {/* 5 */}
       {/* ////////////////////////////////////////////////////////////// */}


       <Grid container spacing={2} marginTop={2}>
           
  
           <Grid item sx={12}>
           <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin:'0px 0px 18px',fontWeight:'bold' }}>
           Blue Cash Preferred® Card from American Express </Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 20px',padding:'20px' ,fontWeight:'bold', border: '4px solid', 
             borderColor: '#dbf8ed'}}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} />
 
          Ideal if you seek a generous cash back rate that applies to most everyday purchases.</Typography>
          </Grid>
 
 
          <Grid item sx={12}>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
           Standout rewards/notable perks
            </Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>
 
           Earn 6% Cash Back at U.S. supermarkets on up to $6,000 per year in purchases (then 1%), 6% Cash Back on select U.S. streaming subscriptions, 3% Cash Back at U.S. gas stations and on transit (including taxis/rideshare, parking, tolls, trains, buses, and more), and 1% Cash Back on other purchases. Terms apply. Redeem rewards for statement credits or at Amazon.com checkout. </Typography>
          </Grid>
 
 
          <Grid item sx={12}>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
           Welcome offer
            </Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>
 
           Receive a $250 statement credit after spending $3,000 on purchases with your new Card within the initial 6 months.</Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold',margin:'0px 0px 34px' }}>
           Estimated rewards earned*
            </Typography>
          </Grid>
 
 
 
          <Grid item xs={12} bgcolor="#DBF8ED" padding="20px" margin="0px 0px 5px" marginLeft="20px">
          
          <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545'}}>
 
             First year rewards value: $943
             </Typography>
           <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>
 
           Ongoing rewards value: $598
           </Typography>
          </Grid>
 
          <Grid item xs={12}>
             <Typography sx={{ color:'#7A7A7A',fontSize:'12px', fontFamily: "'Lato', sans-serif"}}>*See our value  methodology for more details.</Typography>
             </Grid>
 
 
       </Grid>
       {/* 6 */}
        {/* ////////////////////////////////////////////////////////////// */}


        <Grid container spacing={2} marginTop={2}>
           
  
          <Grid item sx={12}>
          <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin:'0px 0px 18px',fontWeight:'bold' }}>
          American Express® Gold Card</Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 20px',padding:'20px' ,fontWeight:'bold', border: '4px solid', 
            borderColor: '#dbf8ed'}}>
         <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} />

         Best for foodies
      </Typography>
         </Grid>


         <Grid item sx={12}>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
          Standout rewards/notable perks
           </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>

          Earn 4X Membership Rewards® Points at U.S. restaurants, including takeout and delivery, and 4X Membership Rewards® points at U.S. supermarkets (on up to $25,000 per calendar year in purchases, then 1X). Additionally, earn 3X Membership Rewards® points on flights booked directly with airlines or through amextravel.com. Terms apply. Furthermore, this card provides various credits, including a monthly dining credit (enrollment required) and hotel credit. You'll also enjoy a range of travel and shopping protections with this card.</Typography>
         </Grid>


         <Grid item sx={12}>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
          Welcome offer
           </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>

          Receive 60,000 Membership Rewards® Points after spending $6,000 on eligible purchases with your new Card within the first 6 months of Card Membership.</Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold',margin:'0px 0px 34px' }}>
          Estimated rewards earned*
           </Typography>
         </Grid>



         <Grid item xs={12} bgcolor="#DBF8ED" padding="20px" margin="0px 0px 5px" marginLeft="20px">
         
         <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545'}}>

            First year rewards value: $1,861
            </Typography>
          <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

          Ongoing rewards value: $661
          </Typography>
         </Grid>

         <Grid item xs={12}>
            <Typography sx={{ color:'#7A7A7A',fontSize:'12px', fontFamily: "'Lato', sans-serif"}}>*See our value  methodology for more details.</Typography>
            </Grid>


      </Grid>
      {/* 7 */}
       {/* ////////////////////////////////////////////////////////////// */}


       <Grid container spacing={2} marginTop={2}>
           
  
           <Grid item sx={12}>
           <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin:'0px 0px 18px',fontWeight:'bold' }}>
           Discover it® Secured Credit Card </Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 20px',padding:'20px' ,fontWeight:'bold', border: '4px solid', 
             borderColor: '#dbf8ed'}}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} />
 
          Ideal for individuals with limited or poor credit who want to earn cash back on purchases. </Typography>
          </Grid>
 
 
          <Grid item sx={12}>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
           Standout rewards/notable perks
            </Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>
 
           Enjoy a robust rewards program, an introductory APR on balance transfers, and a generous welcome offer. </Typography>
          </Grid>
 
 
          <Grid item sx={12}>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
           Welcome offer
            </Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>
 
           Discover will match all the cash back you’ve earned at the end of your first year.

            </Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold',margin:'0px 0px 34px' }}>
           Estimated rewards earned*
            </Typography>
          </Grid>
 
 
 
          <Grid item xs={12} bgcolor="#DBF8ED" padding="20px" margin="0px 0px 5px" marginLeft="20px">
          
          <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545'}}>
 
             First year rewards value: $592
             </Typography>
           <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>
 
           Ongoing rewards value: $252
           </Typography>
          </Grid>
 
          <Grid item xs={12}>
             <Typography sx={{ color:'#7A7A7A',fontSize:'12px', fontFamily: "'Lato', sans-serif"}}>*See our value  methodology for more details.</Typography>
             </Grid>
 
 
       </Grid>
       {/* 8 */}
        {/* ////////////////////////////////////////////////////////////// */}


        <Grid container spacing={2} marginTop={2}>
           
  
          <Grid item sx={12}>
          <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin:'0px 0px 18px',fontWeight:'bold' }}>
          Petal® 2 Cash Back, No Fees Visa® Credit Card </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 20px',padding:'20px' ,fontWeight:'bold', border: '4px solid', 
            borderColor: '#dbf8ed'}}>
         <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} />
         Ideal for those seeking to establish or build credit history while earning rewards. </Typography>
         </Grid>


         <Grid item sx={12}>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
          Standout rewards/notable perks
           </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>

          This card offers 2% to 10% cash back at chosen merchants with no fees. Additionally, it reports your credit activity to the three major credit bureaus, aiding in building your credit history. </Typography>
         </Grid>


         <Grid item sx={12}>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
          Welcome offer
           </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>

         N/A </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold',margin:'0px 0px 34px' }}>
          Estimated rewards earned*
           </Typography>
         </Grid>



         <Grid item xs={12} bgcolor="#DBF8ED" padding="20px" margin="0px 0px 5px" marginLeft="20px">
         
         <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545'}}>

            First year rewards value: $200
            </Typography>
          <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

          Ongoing rewards value: $200
          </Typography>
         </Grid>

         <Grid item xs={12}>
            <Typography sx={{ color:'#7A7A7A',fontSize:'12px', fontFamily: "'Lato', sans-serif"}}>*See our value  methodology for more details.</Typography>
            </Grid>


      </Grid>
      {/* 9 */}
       {/* ////////////////////////////////////////////////////////////// */}


       <Grid container spacing={2} marginTop={2}>
           
  
           <Grid item sx={12}>
           <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin:'0px 0px 18px',fontWeight:'bold' }}>
           Capital One SavorOne Student Cash Rewards Credit Card </Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 20px',padding:'20px' ,fontWeight:'bold', border: '4px solid', 
             borderColor: '#dbf8ed'}}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} />
 
          Ideal for students seeking their inaugural rewards credit card. </Typography>
          </Grid>
 
 
          <Grid item sx={12}>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
           Standout rewards/notable perks
            </Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>
 
           Receive an unrestricted 3% Cash Back on dining, entertainment, popular streaming services, and grocery store purchases (excluding superstores like Walmart® and Target®); 5% Cash Back on hotels and rental cars booked through Capital One Travel (terms apply); 8% Cash Back on Capital One Entertainment purchases; and 1% Cash Back on all other purchases.</Typography>
          </Grid>
 
 
          <Grid item sx={12}>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
           Welcome offer
            </Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>
 
           Earn $50 Cash Back upon spending $100 within the initial three months.</Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold',margin:'0px 0px 34px' }}>
           Estimated rewards earned*
            </Typography>
          </Grid>
 
 
 
          <Grid item xs={12} bgcolor="#DBF8ED" padding="20px" margin="0px 0px 5px" marginLeft="20px">
          
          <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545'}}>
 
             First year rewards value: $487
             </Typography>
           <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>
 
           Ongoing rewards value: $437
           </Typography>
          </Grid>
 
          <Grid item xs={12}>
             <Typography sx={{ color:'#7A7A7A',fontSize:'12px', fontFamily: "'Lato', sans-serif"}}>*See our value  methodology for more details.</Typography>
             </Grid>
 
 
       </Grid>
       {/* 10 */}
        {/* ////////////////////////////////////////////////////////////// */}


        <Grid container spacing={2} marginTop={2}>
           
  
          <Grid item sx={12}>
          <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin:'0px 0px 18px',fontWeight:'bold' }}>
          Prime Visa</Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 20px',padding:'20px' ,fontWeight:'bold', border: '4px solid', 
            borderColor: '#dbf8ed'}}>
         <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} />

         Best for Amazon Prime members </Typography>
         </Grid>


         <Grid item sx={12}>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
          Standout rewards/notable perks
           </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>

          Receive 5% back on purchases at Amazon, Amazon Fresh, and Whole Foods, and earn rewards on all purchases made outside the Amazon network, including enhanced rates on dining, gas stations, transit, and Chase TravelSM purchases. </Typography>
         </Grid>


         <Grid item sx={12}>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
          Welcome offer
           </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>

          Receive a $100 Amazon Gift Card immediately upon approval, exclusively for Prime members.</Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold',margin:'0px 0px 34px' }}>
          Estimated rewards earned*
           </Typography>
         </Grid>



         <Grid item xs={12} bgcolor="#DBF8ED" padding="20px" margin="0px 0px 5px" marginLeft="20px">
         
         <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545'}}>

            First year rewards value: $515
            </Typography>
          <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

          Ongoing rewards value: $315
          </Typography>
         </Grid>

         <Grid item xs={12}>
            <Typography sx={{ color:'#7A7A7A',fontSize:'12px', fontFamily: "'Lato', sans-serif"}}>*See our value  methodology for more details.</Typography>
            </Grid>


      </Grid>
      {/* 11 */}
       {/* ////////////////////////////////////////////////////////////// */}


       <Grid container spacing={2} marginTop={2}>
           
  
           <Grid item sx={12}>
           <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin:'0px 0px 18px',fontWeight:'bold' }}>
           Chase Sapphire Preferred® Card </Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 20px',padding:'20px' ,fontWeight:'bold', border: '4px solid', 
             borderColor: '#dbf8ed'}}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} />
 
          Ideal for frequent travelers seeking flexibility. </Typography>
          </Grid>
 
 
          <Grid item sx={12}>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
           Standout rewards/notable perks
            </Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>
 
           Accumulate valuable, versatile travel points with every purchase, particularly notable with 5x points on travel booked through Chase TravelSM. These points offer multiple redemption options or can be transferred to one of Chase’s 10+ travel partners.</Typography>
          </Grid>
 
 
          <Grid item sx={12}>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
           Welcome offer
            </Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>
 
           Receive 75,000 bonus points after spending $4,000 on purchases within the initial 3 months from account opening. That equates to over $900 when redeemed through Chase Travel℠.</Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold',margin:'0px 0px 34px' }}>
           Estimated rewards earned*
            </Typography>
          </Grid>
 
 
 
          <Grid item xs={12} bgcolor="#DBF8ED" padding="20px" margin="0px 0px 5px" marginLeft="20px">
          
          <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545'}}>
 
             First year rewards value: $2,102
             </Typography>
           <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>
 
           Ongoing rewards value:$602
           </Typography>
          </Grid>
 
          <Grid item xs={12}>
             <Typography sx={{ color:'#7A7A7A',fontSize:'12px', fontFamily: "'Lato', sans-serif"}}>*See our value  methodology for more details.</Typography>
             </Grid>
 
 
       </Grid>
       {/* 12 */}
        {/* ////////////////////////////////////////////////////////////// */}


        <Grid container spacing={2} marginTop={2}>
           
  
          <Grid item sx={12}>
          <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin:'0px 0px 18px',fontWeight:'bold' }}>
          Hilton Honors American Express Surpass® Card </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 20px',padding:'20px' ,fontWeight:'bold', border: '4px solid', 
            borderColor: '#dbf8ed'}}>
         <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} />

         Ideal for those who often stay at Hilton properties.</Typography>
         </Grid>


         <Grid item sx={12}>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
          Standout rewards/notable perks
           </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>

          Earn 12X Hilton Honors Bonus Points for every dollar spent on eligible purchases directly with a hotel or resort within the Hilton Portfolio. Earn 6X Hilton Honors Bonus Points for every dollar spent on eligible purchases at U.S. restaurants, U.S. supermarkets, and U.S. gas stations. Earn 4X Points for every dollar spent on U.S. Online Retail Purchases. Earn 3X Hilton Honors Bonus Points for all other eligible purchases made with your Card. Enjoy automatic Hilton Honors Gold status (enrollment required), receive a free night award each year, and gain access to Priority Pass lounges (enrollment required).</Typography>
         </Grid>


         <Grid item sx={12}>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
          Welcome offer
           </Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>

          Receive 130,000 Hilton Honors Bonus Points after spending $3,000 on purchases with the Hilton Honors American Express Surpass® Card within the first 6 months of Card Membership.</Typography>
          <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold',margin:'0px 0px 34px' }}>
          Estimated rewards earned*
           </Typography>
         </Grid>



         <Grid item xs={12} bgcolor="#DBF8ED" padding="20px" margin="0px 0px 5px" marginLeft="20px">
         
         <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545'}}>

            First year rewards value:  $1,174
            </Typography>
          <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>

          Ongoing rewards value: $1,074
          </Typography>
         </Grid>

         <Grid item xs={12}>
            <Typography sx={{ color:'#7A7A7A',fontSize:'12px', fontFamily: "'Lato', sans-serif"}}>*See our value  methodology for more details.</Typography>
            </Grid>


      </Grid>
      {/* 13 */}
       {/* ////////////////////////////////////////////////////////////// */}


       <Grid container spacing={2} marginTop={2}>
           
  
           <Grid item sx={12}>
           <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin:'0px 0px 18px',fontWeight:'bold' }}>
           AAdvantage® Aviator® Red World Elite Mastercard®</Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 20px',padding:'20px' ,fontWeight:'bold', border: '4px solid', 
             borderColor: '#dbf8ed'}}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} />
 
          Ideal for frequent flyers with American Airlines.</Typography>
          </Grid>
 
 
          <Grid item sx={12}>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
           Standout rewards/notable perks
            </Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>
 
           Earn 2X miles on eligible American Airlines purchases. Additionally, enjoy 25% savings on in-flight food and beverages and a complimentary first checked bag for yourself and up to 4 companions.</Typography>
          </Grid>
 
 
          <Grid item sx={12}>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
           Welcome offer
            </Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>
 
           Receive 50,000 AAdvantage® bonus miles upon making your first purchase and paying the $99 annual fee in full, both within the initial 90 days.</Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold',margin:'0px 0px 34px' }}>
           Estimated rewards earned*
            </Typography>
          </Grid>
 
 
 
          <Grid item xs={12} bgcolor="#DBF8ED" padding="20px" margin="0px 0px 5px" marginLeft="20px">
          
          <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545'}}>
 
             First year rewards value:$1,347
             </Typography>
           <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>
 
           Ongoing rewards value: $453
           </Typography>
          </Grid>
 
          <Grid item xs={12}>
             <Typography sx={{ color:'#7A7A7A',fontSize:'12px', fontFamily: "'Lato', sans-serif"}}>*See our value  methodology for more details.</Typography>
             </Grid>
 
 
       </Grid>
         {/* 14 */}
       {/* ////////////////////////////////////////////////////////////// */}


       <Grid container spacing={2} marginTop={2}>
           
  
           <Grid item sx={12}>
           <Typography sx={{ fontSize: '18px', fontFamily: "'Lato', sans-serif", color: '#101F30', margin:'0px 0px 18px',fontWeight:'bold' }}>
           Capital One VentureOne Rewards Credit Card</Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 20px',padding:'20px' ,fontWeight:'bold', border: '4px solid', 
             borderColor: '#dbf8ed'}}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '32px', verticalAlign: 'middle', marginRight: '5px' }} />
 
          Best for travel credit card beginners.</Typography>
          </Grid>
 
 
          <Grid item sx={12}>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
           Standout rewards/notable perks
            </Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>
 
           Earn 1.25 Miles per dollar on every purchase, every day, and 5 Miles per dollar on hotels and rental cars booked through Capital One Travel. Additionally, points can be transferred to over 15 travel loyalty programs.</Typography>
          </Grid>
 
 
          <Grid item sx={12}>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold' }}>
           Welcome offer
            </Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545', margin:'0px 0px 34px' }}>
 
           Receive a bonus of 20,000 miles after spending $500 on purchases within the first 3 months from account opening, equivalent to $200 in travel.</Typography>
           <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#454545',fontWeight:'bold',margin:'0px 0px 34px' }}>
           Estimated rewards earned*
            </Typography>
          </Grid>
 
 
 
          <Grid item xs={12} bgcolor="#DBF8ED" padding="20px" margin="0px 0px 5px" marginLeft="20px">
          
          <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545'}}>
 
             First year rewards value:$836
             </Typography>
           <Typography className='black-dot' sx={{ fontSize: '15px', fontFamily: "'Lato', sans-serif", color: '#454545' }}>
 
           Ongoing rewards value: $476
           </Typography>
          </Grid>
 
          <Grid item xs={12}>
             <Typography sx={{ color:'#7A7A7A',fontSize:'12px', fontFamily: "'Lato', sans-serif"}}>*See our value  methodology for more details.</Typography>
             </Grid>
 
 
       </Grid>

       
    </Box>
    </Container>
  )
}

export default TravelRewardCards
