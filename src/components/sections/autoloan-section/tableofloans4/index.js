import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {  Link, Typography, Button, Container, Box, } from '@mui/material';
import SoutheastFInancial_logo from '../../../../assets/southeast-financial-credit-union-logo.webp'
import NavyFederal_logo from '../../../../assets/Navy_federal_small-2.webp'
import Penfed_logo from '../../../../assets/PenFed_Logo_RGB-300x76-1.webp'
import Autopay_logo from '../../../../assets/autopay-logo_4-25-2024.png'
import Bankofamerica_logo from '../../../../assets/bank-of-america-logo-1-1024x458.webp'
import Capitalone_logo from '../../../../assets/capital-one-logo_April-2024.png'
import PNC_logo from '../../../../assets/PNC-Bank-logo-1024x614.webp'
import DCU_logo from '../../../../assets/dcu.webp'
import Carvana_logo from '../../../../assets/carvana-logo_april-2024.jpg'
import Lightstream_logo from '../../../../assets/lightstream.webp'
import Chase_logo from '../../../../assets/Chase-logo.webp'



function createData(name, fat, carbs, protein, mincreditscore,  Clickhere) {
  return { name,  fat, carbs, protein ,mincreditscore,  Clickhere };
}

const rows = [
  

    createData(
    
        <img src={SoutheastFInancial_logo} alt="img" width={160} height={53} />,
        <Typography sx={{ fontSize: '14px' }}>Short-term loans</Typography>,         
        <Typography sx={{ fontSize: '14px' }}>4.50%</Typography>,
        <Typography sx={{ fontSize: '14px' }}>12-84 months</Typography>,
        <Typography sx={{ fontSize: '14px' }}>Up to $100,000</Typography>,
     
        <Button
          variant="text"
          sx={{
            fontSize: '14px',
            color: '#FFFFFF', 
            padding: '8px',
            bgcolor:'#FF704D',
            maxWidth:'190px',
            textTransform: 'none',
            '&:hover': { bgcolor: '#FF471A' }
          }}
        >
          See Personalized Results
        </Button>
      
    ),
  
    
    
    createData(
    
        <img src={NavyFederal_logo} alt="img" width={150} height={93} />,
       
        <Typography sx={{ fontSize: '14px' }}>Those with military connections</Typography>,         
        <Typography sx={{ fontSize: '14px' }}>4.54%</Typography>,
        <Typography sx={{ fontSize: '14px' }}>36-96 months</Typography>,
        <Typography sx={{ fontSize: '14px' }}>Not disclosed</Typography>,
     
       
        <Button
          variant="text"
          sx={{
            fontSize: '14px',
            color: '#FFFFFF', 
            padding: '8px',
            bgcolor:'#FF704D',
            maxWidth:'190px',
            textTransform: 'none',
            '&:hover': { bgcolor: '#FF471A' }
          }}
        >
          See Personalized Results
        </Button>
      
    ),
    
    
    
    
    
    
    createData(
    
        <img src={Penfed_logo} alt="img" width={150} height={38} />,
        
        <Typography sx={{ fontSize: '14px' }}>Using a car-buying service</Typography>,         
        <Typography sx={{ fontSize: '14px' }}>5.44%</Typography>,
        <Typography sx={{ fontSize: '14px' }}>36-84 months</Typography>,
        <Typography sx={{ fontSize: '14px' }}>Up to $150,000</Typography>,
     
       
        <Button
          variant="text"
          sx={{
            fontSize: '14px',
            color: '#FFFFFF', 
            padding: '8px',
            bgcolor:'#FF704D',
            maxWidth:'190px',
            textTransform: 'none',
            '&:hover': { bgcolor: '#FF471A' }
          }}
        >
          See Personalized Results
        </Button>
      
    ),
    
    
    
  
    createData( <img src={Autopay_logo} alt="img" width={150} height={33} />,
    <Typography sx={{ fontSize: '14px' }}>Bad-credit auto loans</Typography>,         
      <Typography sx={{ fontSize: '14px' }}>5.69%</Typography>,
      <Typography sx={{ fontSize: '14px' }}>24-96 months</Typography>,
      <Typography sx={{ fontSize: '14px' }}>$2,500-$100,000</Typography>,
   
     
     
     <Button
     variant="text"
     sx={{
       fontSize: '14px',
       color: '#FFFFFF', 
       padding: '8px',
       bgcolor:'#FF704D',
       textTransform: 'none',
       '&:hover': { bgcolor: '#FF471A' }
     }}
   >
     See Personalized Results
   </Button>
 
    
  ),


    
  
  
  
    
    
  
    createData( <img src={Bankofamerica_logo} alt="img" width={150} height={67} />,
   <Typography sx={{ fontSize: '14px' }}>Those who prefer large banks</Typography>,         
      <Typography sx={{ fontSize: '14px' }}>5.99%</Typography>,
      <Typography sx={{ fontSize: '14px' }}>48-72 months</Typography>,
      <Typography sx={{ fontSize: '14px' }}>From $7,500</Typography>,
   
     
     <Button
     variant="text"
     sx={{
       fontSize: '14px',
       color: '#FFFFFF', 
       padding: '8px',
       bgcolor:'#FF704D',
       textTransform: 'none',
       '&:hover': { bgcolor: '#FF471A' }
     }}
   >
     See Personalized Results
   </Button>
 
    
  ),


    
  
  
  
    
        
  



    createData( <img src={Capitalone_logo} alt="img" width={150} height={54} />,
   
         <Typography sx={{ fontSize: '14px' }}>Prime and subprime rates</Typography>,         
         <Typography sx={{ fontSize: '14px' }}>6.49%</Typography>,
         <Typography sx={{ fontSize: '14px' }}>36-72 months</Typography>,
         <Typography sx={{ fontSize: '14px' }}>From $4,000</Typography>,
       <Button
       variant="text"
       sx={{
         fontSize: '14px',
         color: '#FFFFFF', 
         padding: '8px',
         bgcolor:'#FF704D',
         textTransform: 'none',
         '&:hover': { bgcolor: '#FF471A' }
       }}
     >
       See Personalized Results
     </Button>
    ),
 


    
    createData( <img src={PNC_logo} alt="img" width={150} height={89} />,
   
         <Typography sx={{ fontSize: '14px' }}>Private-party auto loans</Typography>,         
         <Typography sx={{ fontSize: '14px' }}>6.69% (with autopay)</Typography>,
         <Typography sx={{ fontSize: '14px' }}>12-84 months</Typography>,
         <Typography sx={{ fontSize: '14px' }}>$5,000-$100,000</Typography>,
       <Button
       variant="text"
       sx={{
         fontSize: '14px',
         color: '#FFFFFF', 
         padding: '8px',
         bgcolor:'#FF704D',
         textTransform: 'none',
         '&:hover': { bgcolor: '#FF471A' }
       }}
     >
       See Personalized Results
     </Button>
    ),
 


    
    createData( <img src={DCU_logo} alt="img" width={150} height={53} />,
   
         <Typography sx={{ fontSize: '14px' }}>Used car loans</Typography>,         
         <Typography sx={{ fontSize: '14px' }}>6.74%</Typography>,
         <Typography sx={{ fontSize: '14px' }}>Up to 84 months</Typography>,
         <Typography sx={{ fontSize: '14px' }}>Up to $500,000</Typography>,
       <Button
       variant="text"
       sx={{
         fontSize: '14px',
         color: '#FFFFFF', 
         padding: '8px',
         bgcolor:'#FF704D',
         textTransform: 'none',
         '&:hover': { bgcolor: '#FF471A' }
       }}
     >
       See Personalized Results
     </Button>
    ),
 


    
    createData( <img src={Carvana_logo} alt="img" width={150} height={34} />,
   
         <Typography sx={{ fontSize: '14px' }}>An online experience</Typography>,         
         <Typography sx={{ fontSize: '14px' }}>6.85%</Typography>,
         <Typography sx={{ fontSize: '14px' }}>36-72 months</Typography>,
         <Typography sx={{ fontSize: '14px' }}>From $5,000</Typography>,
       <Button
       variant="text"
       sx={{
         fontSize: '14px',
         color: '#FFFFFF', 
         padding: '8px',
         bgcolor:'#FF704D',
         textTransform: 'none',
         '&:hover': { bgcolor: '#FF471A' }
       }}
     >
       See Personalized Results
     </Button>
    ),
 


    
    createData( <img src={Lightstream_logo} alt="img" width={160} height={40} />,
   
         <Typography sx={{ fontSize: '14px' }}>Unsecured auto loans</Typography>,         
         <Typography sx={{ fontSize: '14px' }}>7.24% (with autopay)</Typography>,
         <Typography sx={{ fontSize: '14px' }}>24-84 months</Typography>,
         <Typography sx={{ fontSize: '14px' }}>$5,000-$100,000*</Typography>,
       <Button
       variant="text"
       sx={{
         fontSize: '14px',
         color: '#FFFFFF', 
         padding: '8px',
         bgcolor:'#FF704D',
         textTransform: 'none',
         '&:hover': { bgcolor: '#FF471A' }
       }}
     >
       See Personalized Results
     </Button>
    ),
 


    
    createData( <img src={Chase_logo} alt="img" width={150} height={28} />,
   
         <Typography sx={{ fontSize: '14px' }}>Dealership purchases</Typography>,         
         <Typography sx={{ fontSize: '14px' }}>Not disclosed</Typography>,
         <Typography sx={{ fontSize: '14px' }}>12-84 months</Typography>,
         <Typography sx={{ fontSize: '14px' }}>From $4,000</Typography>,
       <Button
       variant="text"
       sx={{
         fontSize: '14px',
         color: '#FFFFFF', 
         padding: '8px',
         bgcolor:'#FF704D',
         textTransform: 'none',
         '&:hover': { bgcolor: '#FF471A' }
       }}
     >
       See Personalized Results
     </Button>
    ),
 


    
   
          
          ]

export default function Tableofloans4() {
  return (
    <><Container>
    <Link href='#'  sx={{fontSize:'12px',fontFamily: "'Lato', sans-serif", textDecoration:'none', marginLeft:'10px',display: { sm: 'none', md: 'none', lg:'flex', xs:'none'},}}> How does lending tree Get paid?</Link>

    <TableContainer component={Paper}sx={{ display: { sm: 'none', md: 'none', lg:'flex', xs:'none'}, justifyContent:'center', boxShadow:'none' }}>
      <Table sx={{ minWidth: 650, marginTop: '40px' }} aria-label="simple table">
        <TableHead sx={{height:'98px'}}>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#FFFFFF', padding:' 0px' }}>Lender</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#FFFFFF', padding:' 0px'  }}>Best for...</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#FFFFFF', padding:' 0px'  }}>Starting APRs</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#FFFFFF' , padding:' 11px' }}>Loan term</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#FFFFFF' , padding:' 11px' }}>Loan amounts</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#101F30', padding:'0px',width:'232px'  }}>Clickhere</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center"  sx={{ padding: '6px' }}>{row.fat}</TableCell>
              <TableCell align="center"  sx={{ padding: '6px' }}>{row.carbs}</TableCell>
              <TableCell align="center"  sx={{ padding: '6px' }}>{row.protein}</TableCell>
              <TableCell align="center"  sx={{ padding: '6px' }}>{row.mincreditscore}</TableCell>
              <TableCell align="center"  sx={{ padding: '6px' }}>{row.Clickhere}</TableCell>

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
        sx={{fontSize:'17px',  textAlign:'center', marginTop:'40px',  fontFamily: "'Lato', sans-serif"}}
        >Learn more about <span style={{color:'#00AEEF'}}> how we chose </span>the best auto loans.
        </Typography>
       
        </Box>
   </Container>
      </>

  );
}
