import React from 'react'
import { Container, Grid, Typography, useTheme, Box, Link,styled,Paper } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close'

const AlternativesofDCL = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));


    const theme = useTheme();
  return (
    <Container sx={{marginTop:'40px'}}>
    <Box sx={{ flexGrow: 1 }}>
   <Grid container spacing={2}>
     <Grid item xs={12}>
     <Typography
     sx={{
       fontSize: '40px',
       color: '#101F30',
       fontFamily: "'Georgia', 'Times New Roman', Times, serif",
       textAlign: 'center',
       marginBottom: '40px',
       [theme.breakpoints.down('sm')]: {
         fontSize: '30px',
       },
     }}
   >
     Alternatives to debt consolidation loans

   </Typography>
     </Grid>




     <Grid item sx={12}>
     <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
     
     Debt consolidation loans may be the right choice for some borrowers, but there are other options out there that might be better suited to others. Here are a few alternative strategies to consider:</Typography>
     </Grid>


     {/* /////////////////////////////////  */}
     <Grid item sx={12}>
     <Typography sx={{fontSize:'26px', fontFamily:"'Lato', sans-serif", color:'#101F30'}}>
     
     Balance transfer credit card with 0% APR
    </Typography>    
         </Grid>
           
     <Grid item sx={12}>
     <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#101F30', bgcolor:'#EBF6E3',margin:'0px 0px 20px', padding:'20px'}}>
     
     <span style={{fontWeight:'bold'}}>How it works: </span>A <Link href="#" sx={{textDecoration:'none'}}>0% APR balance transfer credit card</Link> consolidates credit card debt with an introductory no-interest period.
    </Typography>    
         </Grid>

       


         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} >
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          No interest as long as you pay off your balance transfer card during the introductory period (which could last as long as 21 months)</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Non-introductory APR may still be lower than your current cards</Item>
     
        </Grid>


        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

         Variable APR that goes up and down based on the economy

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Only works for credit card debt

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Usually requires good-to-excellent credit

         </Item>
         <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          May pay a 3% to 5% balance transfer fee to move the debt from your existing cards to the balance transfer card

         </Item>
        </Grid>
        
      </Grid>
     </Box>
 
     {/* /////////////////////////////////  */}
     <Grid container spacing={2}>
    {/* First Typography */}
    <Grid item xs={12}>
        <Typography sx={{ fontSize: '26px', fontFamily: "'Lato', sans-serif", color: '#101F30' }}>
            Home equity loan
        </Typography>
    </Grid>

    {/* Second Typography */}
    <Grid item xs={12}>
        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', bgcolor: '#EBF6E3', margin: '0px 0px 20px', padding: '20px' }}>
            <span style={{ fontWeight: 'bold' }}>How it works: </span>
            Tap into your <Link href="#" sx={{ textDecoration: 'none' }}>home's equity</Link> to pay off debt by using your home as collateral.
        </Typography>
    </Grid>
</Grid>


       


         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} >
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          Fixed interest rates</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Payments are the same each month</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Typically lower rates than a loan that doesn’t require collateral</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          May be able to consolidate a lot of debt, depending on your equity, credit score and property value</Item>
     
        </Grid>


        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Must be a homeowner with equity

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Can lose your home if you don't pay

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          May go underwater, which means you owe more on your home than it’s worth

         </Item>
         <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          May require closing costs (2% to 5% of your loan amount)
         </Item>
        </Grid>
        
      </Grid>
     </Box>





     {/* /////////////////////////////////  */}
     <Grid container spacing={2} >
    {/* First Typography */}
    <Grid item xs={12} >
        <Typography sx={{ fontSize: '26px', fontFamily: "'Lato', sans-serif", color: '#101F30',marginTop:'20px' }}>
        401(k) loan
        </Typography>
    </Grid>

    {/* Second Typography */}
    <Grid item xs={12}>
        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', bgcolor: '#EBF6E3', margin: '0px 0px 20px', padding: '20px' }}>
            <span style={{ fontWeight: 'bold' }}>How it works: </span>
            A <Link href="#" sx={{ textDecoration: 'none' }}> 401(k) loan</Link> involves borrowing money from your retirement savings plan.
        </Typography>
    </Grid>
</Grid>


       


         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} >
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          No credit check</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          You pay the interest back to yourself instead of losing it to a lender</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Won’t hurt your credit if you can’t pay back your 401(k) loan</Item>
          
        </Grid>


        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Not all 401(k) plans allow loans

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Won’t earn money on investments on the money you borrow (at least until you pay it back)

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          May need to pay back your loan in a lump sum if you leave your job



         </Item>
         <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          If you can’t pay back your loan, you’ll have to pay income tax on what you borrowed


         </Item>
         <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          10% penalty if you don’t pay back what you borrowed (unless you’re older than 59.5 years old)
         </Item>
        
        </Grid>
        
      </Grid>
     </Box>





     {/* /////////////////////////////////  */}
     <Grid container spacing={2}>
    {/* First Typography */}
    <Grid item xs={12}>
        <Typography sx={{ fontSize: '26px', fontFamily: "'Lato', sans-serif", color: '#101F30' }}>
        Debt management plan
        </Typography>
    </Grid>

    {/* Second Typography */}
    <Grid item xs={12}>
        <Typography sx={{ fontSize: '17px', fontFamily: "'Lato', sans-serif", color: '#101F30', bgcolor: '#EBF6E3', margin: '0px 0px 20px', padding: '20px' }}>
            <span style={{ fontWeight: 'bold' }}>How it works: </span>
            With the help of a certified credit counselor, create a <Link href="#" sx={{ textDecoration: 'none' }}> debt management plan</Link> to repay your debt within five years.
        </Typography>
    </Grid>
</Grid>


       


         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} >
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          Free or low cost</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Credit counselor may be able to negotiate to bring down fees and interest rates</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Can consolidate many types of debt</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Promotes healthy financial habits</Item>
          
        </Grid>


        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Can only be used for debts that don’t require collateral
         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Will probably have to stop using or close your credit cards
         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Can’t open up new credit while working through the plan (which can take five years)




         </Item>
        
        
        </Grid>
        
      </Grid>
     </Box>


    
        
        
        {/* ----------------- */}
         </Grid>
         </Box></Container>



  )
}

export default AlternativesofDCL