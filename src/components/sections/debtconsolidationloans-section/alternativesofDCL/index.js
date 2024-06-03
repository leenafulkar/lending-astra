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
     
     While debt consolidation loans could be suitable for certain borrowers, alternative strategies might better suit others. Here are a few options to contemplate:</Typography>
     </Grid>


     {/* /////////////////////////////////  */}
     <Grid item sx={12}>
     <Typography sx={{fontSize:'26px', fontFamily:"'Lato', sans-serif", color:'#101F30'}}>
     
     Balance transfer credit card with 0% APR
    </Typography>    
         </Grid>
           
     <Grid item sx={12}>
     <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#101F30', bgcolor:'#EBF6E3',margin:'0px 0px 20px', padding:'20px'}}>
     
     <span style={{fontWeight:'bold'}}>How it works: </span>A balance transfer credit card with a 0% APR consolidates credit card debt during an initial period with no interest charges.
    </Typography>    
         </Grid>

       


         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} >
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          No interest is incurred provided you clear your balance transfer card within the introductory period, which might extend for up to 21 months.</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Even after the introductory period ends, the non-introductory APR may still be lower than the rates on your current cards.</Item>
     
        </Grid>


        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          APR that fluctuates in response to changes in the economy

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Applicable solely to credit card debt

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Typically necessitates a good-to-excellent credit rating

         </Item>
         <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          You may incur a balance transfer fee of 3% to 5% when transferring debt from your current cards to the balance transfer card.

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
            Utilize your home's equity as collateral to settle debt obligations.       
             </Typography>
    </Grid>
</Grid>


       


         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} >
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          Stable interest rates</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Monthly payments remain consistent.</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Usually offers lower rates compared to unsecured loans.</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Potential to consolidate significant amounts of debt, contingent upon your equity, credit score, and property value.</Item>
     
        </Grid>


        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Ownership of a home with equity is a prerequisite.

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Risk of foreclosure if payments are not met.

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Possibility of negative equity, where the debt surpasses the home's value.

         </Item>
         <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Closing costs may apply, typically ranging from 2% to 5% of the loan amount.
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
            A 401(k) loan entails borrowing funds from your retirement savings plan.        </Typography>
    </Grid>
</Grid>


       


         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} >
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          No credit verification required.</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Interest payments are directed back to your own retirement savings instead of accruing to a lender.</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Failure to repay a 401(k) loan does not negatively impact your credit score.</Item>
          
        </Grid>


        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Not all 401(k) plans permit loans.

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Interest earnings on borrowed funds are forfeited until repayment.

         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Loan repayment may be required in a lump sum upon termination of employment.



         </Item>
         <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Failure to repay the loan may result in income tax obligations on the borrowed amount.


         </Item>
         <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          A 10% penalty is imposed if the borrowed amount is not repaid (unless the borrower is over 59.5 years old).
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
            With the guidance of a certified credit counselor, devise a debt management plan aimed at repaying your debt within a five-year timeframe.        </Typography>
    </Grid>
</Grid>


       


         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} >
        <Grid item xs={6} >
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Pros</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}> 
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />
          Available at no cost or minimal expense.</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Credit counselor may negotiate to reduce fees and interest rates.</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Enables consolidation of various forms of debt.</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000', textAlign:'left' }}>
          <CheckIcon sx={{ color: '#08C177', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Encourages the adoption of sound financial practices.</Item>
          
        </Grid>


        <Grid item xs={6}>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#FFFFFF', fontWeight:'bold', textAlign:'left', bgcolor:'#08C177' }}>Cons</Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Only applicable to debts that do not necessitate collateral.
         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Likely requirement to cease usage or close credit card accounts.
         </Item>
          <Item sx={{ boxShadow: 'none', fontSize:'14px', fontFamily: "'Lato', sans-serif", color:'#000000' , textAlign:'left'}}>
          <CloseIcon sx={{ color: '#FF0000', fontSize: '22px', verticalAlign: 'middle', marginRight: '5px' }} />

          Inability to obtain new credit during plan execution (which may span five years).




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