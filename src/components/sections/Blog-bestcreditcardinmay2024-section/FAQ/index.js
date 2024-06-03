import React ,{useState} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Container, Grid, useTheme ,Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const FandQs = () => {
    const theme = useTheme();
    const [expanded0, setExpanded0] = useState(false);
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    const [expanded4, setExpanded4] = useState(false);
    const [expanded5, setExpanded5] = useState( false);

  return (
    <Container>
         <Typography
                    sx={{
                        fontSize: '27px',
                        color: '#101F30',
                        fontFamily: "'Lato', sans-serif",
                        textAlign: 'left',
                        margin: '30px 0px',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '22px',
                        },
                    }}
                >
                 Frequently asked questions
                </Typography>
    <Grid>
        <Accordion  sx={{ boxShadow: 'none',padding:'20px' }}>
            <AccordionSummary
                expandIcon={expanded0 ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                className='accordionn-headd'
                sx={{ color: '#00AEEF', fontSize:'15px'}}
                onClick={() => setExpanded0(!expanded0)} 
            >
               Do credit card rewards have an expiration date?
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'15px',color:'#454545',margin:'0px 0px 22px'}}>For most cards, rewards won’t expire as long as your account remains open and in good standing. However, some cards can withdraw your rewards if you don’t redeem them or use your card within a given time period. You should always read a card’s terms and conditions before applying.</Typography>

            </AccordionDetails>

        </Accordion>
        <Accordion sx={{ boxShadow: 'none' ,padding:'20px'}}>
            <AccordionSummary
                expandIcon={expanded1 ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                className='accordionn-headd'
                sx={{ color: '#00AEEF', fontSize:'15px'}}
                onClick={() => setExpanded1(!expanded1)} 
            >
              What credit card offers the most generous cash back rewards?
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'15px',color:'#454545',margin:'0px 0px 22px'}}>The Capital One SavorOne Cash Rewards Credit Card provides an exceptional 8% cash back on Capital One Entertainment purchases, along with elevated rewards rates on everyday categories such as dining, groceries, and popular streaming services. Alternatively, if you prefer a consistent cash back rate, consider the Wells Fargo Active Cash® Card, which offers 2% cash back on all purchases.</Typography>

            </AccordionDetails>

        </Accordion>
        <Accordion sx={{ boxShadow: 'none' ,padding:'20px'}}>
            <AccordionSummary
                expandIcon={expanded2 ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                className='accordionn-headd'
                sx={{ color: '#00AEEF', fontSize:'15px'}}
                onClick={() => setExpanded2(!expanded2)} 
            >
               Do rewards cards build credit?
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'15px',color:'#454545',margin:'0px 0px 22px'}}>Reward cards, when used responsibly, contribute positively to credit building. However, they don't expedite the process. To build credit, it's crucial to consistently pay off balances on time and in full, while keeping credit utilization low. If your primary focus is credit building, exploring the top credit cards designed for this purpose may be more beneficial.</Typography>

            </AccordionDetails>

        </Accordion>
        <Accordion  sx={{ boxShadow: 'none',padding:'20px' }}>
            <AccordionSummary
                expandIcon={expanded3 ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                className='accordionn-headd'
                sx={{ color: '#00AEEF', fontSize:'15px'}}
                onClick={() => setExpanded3(!expanded3)} 
            >
             Is it possible to merge rewards points earned from multiple credit cards?
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'15px',color:'#454545',margin:'0px 0px 22px'}}>The ability to combine rewards earned on two different credit cards depends on the type of rewards. If the rewards are of the same type (e.g. American Airlines AAdvantage miles), then combining them together is likely possible. However, if the rewards are of different types, they usually can’t be combined. Flexible points can be transferred to multiple loyalty programs and may be combined with rewards earned within those partner programs.</Typography>

            </AccordionDetails>

        </Accordion>
        <Accordion  sx={{ boxShadow: 'none',padding:'20px' }}>
            <AccordionSummary
                expandIcon={expanded4 ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                className='accordionn-headd'
                sx={{ color: '#00AEEF', fontSize:'15px'}}
                onClick={() => setExpanded4(!expanded4)} 
            >
             What credit score is required to qualify for a rewards credit card?
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'15px',color:'#454545',margin:'0px 0px 22px'}}>Typically, you’ll need good to excellent credit (a FICO Score of 670 or higher) to be approved for a rewards credit card. The better your credit, the more options you’ll have. That said, there are rewards cards designed for students, people with fair credit and even people with bad credit. Most of these cards offer clear guidelines for upgrading to cards with better terms and rewards once you’ve established a responsible credit history.</Typography>

            </AccordionDetails>

        </Accordion>
        <Accordion sx={{ boxShadow: 'none' ,padding:'20px'}}>
            <AccordionSummary
                expandIcon={expanded5 ? <RemoveIcon sx={{ color: '#00AEEF' }} /> : <AddIcon sx={{ color: '#00AEEF' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                className='accordionn-headd'
                sx={{ color: '#00AEEF', fontSize:'15px'}}
                onClick={() => setExpanded5(!expanded5)} 
            >
             Are rewards earned from credit cards subject to taxation?
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'15px',color:'#454545',margin:'0px 0px 22px'}}>Normally, credit card rewards aren't classified as taxable income by the IRS. They're viewed more like rebates or discounts since they're typically earned as a result of your spending. However, if a reward doesn't necessitate a specific spending threshold to acquire it (such as an instant sign-up bonus), the IRS might consider it taxable income. If you're uncertain about a particular scenario, it's best to consult with a tax professional.</Typography>

            </AccordionDetails>

        </Accordion>
        
        </Grid>



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
                 How we chose the best rewards credit cards
                </Typography>
                <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px',color:'#454545',margin:'0px 0px 34px'}}>To compile our list of the top rewards credit cards, we employ an unbiased rating and ranking system. This system evaluates features across a wide array of credit cards, totaling over 200 from more than 50 issuers. Our methodology involves calculations to assess the estimated value of each card for the average cardholder, drawing on data from sources like LendingTree and the U.S. Bureau of Labor Statistics. Cards are ranked based on the following criteria:
                </Typography>
                <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'14px',color:'#454545',margin:'0px 0px 34px'}}><span style={{fontWeight:'bold'}}> Average value over two years (80% of rating): </span>We calculate the rewards earned for the average cardholder using Bureau of Labor statistics data and an annual spend of $20,000, minus the annual fee. This value includes sign-up bonus and annual bonuses (including annual free night certificates). We look at the average rewards earned over two years to balance out a card’s ongoing value with its first-year value.
                </Typography>
                <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'14px',color:'#454545',margin:'0px 0px 34px'}}><span style={{fontWeight:'bold'}}>Flexibility of rewards (15% of rating): </span>We consider how easy the rewards are to use, looking at factors like expiration dates, minimum redemption thresholds, blackout dates and the availability of flexible redemption options like travel statement credits and cash back.
                </Typography>

                <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'14px',color:'#454545',margin:'0px 0px 34px'}}><span style={{fontWeight:'bold'}}>Other features (5% of rating):  </span>We also compare a card’s benefits — such as purchase protections, travel protections, elite status benefits and travel credits — against benefits from other cards.
                </Typography>
                <Typography sx={{ fontFamily: "'Lato', sans-serif",fontSize:'17px',color:'#454545',margin:'0px 0px 34px'}}>Please be aware that our ratings serve as a foundation for comparing and selecting the optimal rewards credit card. Nevertheless, your individual requirements may deviate from those of the typical cardholder. It's crucial to evaluate the amount you anticipate spending in a card's bonus categories and prioritize the benefits that hold significance for you when determining the best card for your needs.
                </Typography>




               
            </Grid>
            </Grid>
        </Container>
  )
}

export default FandQs