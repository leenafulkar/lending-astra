import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Rating , Link, Typography, Button, Container, Box, } from '@mui/material';
import Upstart_logo from '../../../../assets/Upstart-logo.webp'
import Upgrade_logo from '../../../../assets/Upgrade-2023-1536x354.webp'
import Avant_logo from '../../../../assets/Avant-2023-2048x286.webp'
import Happymoney_logo from '../../../../assets/Happy-Money-logo.webp'
import Lendingclub_logo from '../../../../assets/LendingClub-1-e1615271046151.webp'
import OMF_logo from '../../../../assets/OMF_Stacked_Logo_PMS2132.webp'




function createData(name, calories, fat, carbs, protein, mincreditscore,  Clickhere) {
  return { name, calories, fat, carbs, protein ,mincreditscore,  Clickhere };
}

const rows = [
  

    createData(
    
        <img src={Avant_logo} alt="img" width={150} height={21} />,
        <><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /><br /><Link
        href="#"
        sx={{
          fontSize: '10px',
          textTransform: 'none',
          color: '#0069BA',
          '&:hover': { color: '#6C8CC9' },
          textDecoration: 'none'
        }}
      >
        User Ratings & Reviews
      </Link></>,
        <Typography sx={{ fontSize: '14px' }}>Quick funding</Typography>,         
        <Typography sx={{ fontSize: '14px' }}>580</Typography>,
        <Typography sx={{ fontSize: '14px' }}>9.95% - 35.99%</Typography>,
        <Typography sx={{ fontSize: '14px' }}>$2,000 to $35,000</Typography>,
     
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
    
        <img src={Happymoney_logo} alt="img" width={150} height={21} />,
        <><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /><br /><Link
        href="#"
        sx={{
          fontSize: '10px',
          textTransform: 'none',
          color: '#0069BA',
          '&:hover': { color: '#6C8CC9' },
          textDecoration: 'none'
        }}
      >
        User Ratings & Reviews
      </Link></>,
        <Typography sx={{ fontSize: '14px' }}>Debt consolidation</Typography>,         
        <Typography sx={{ fontSize: '14px' }}>640</Typography>,
        <Typography sx={{ fontSize: '14px' }}>11.72% - 17.99%</Typography>,
        <Typography sx={{ fontSize: '14px' }}>$5,000 to $40,000</Typography>,
     
       
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
    
        <img src={Lendingclub_logo} alt="img" width={150} height={31} />,
        <><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /><br /><Link
        href="#"
        sx={{
          fontSize: '10px',
          textTransform: 'none',
          color: '#0069BA',
          '&:hover': { color: '#6C8CC9' },
          textDecoration: 'none'
        }}
      >
        User Ratings & Reviews
      </Link></>,
        <Typography sx={{ fontSize: '14px' }}>Co-borrowers</Typography>,         
        <Typography sx={{ fontSize: '14px' }}>600</Typography>,
        <Typography sx={{ fontSize: '14px' }}>8.98% - 35.99%</Typography>,
        <Typography sx={{ fontSize: '14px' }}>$1,000 to $40,000</Typography>,
     
       
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
    
    
    
  
    createData( <img src={OMF_logo} alt="img" width={150} height={57} />,
    <><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /><br/><Link
     href="#"
      sx={{ fontSize: '10px',
       textTransform: 'none',
        color: '#0069BA', 
        '&:hover': { color: '#6C8CC9' },
         textDecoration: 'none' }}>
          User Ratings & Reviews
        </Link></>
      ,  <Typography sx={{ fontSize: '14px' }}>Secured loans</Typography>,         
      <Typography sx={{ fontSize: '14px' }}>Not Specified</Typography>,
      <Typography sx={{ fontSize: '14px' }}>18.00% - 35.99%</Typography>,
      <Typography sx={{ fontSize: '14px' }}>$1,500 to $20,000</Typography>,
   
     
     
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


    
  
  
  
    
    
  
    createData( <img src={Upgrade_logo} alt="img" width={150} height={34} />,
    <><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /><br/><Link
     href="#"
      sx={{ fontSize: '10px',
       textTransform: 'none',
        color: '#0069BA', 
        '&:hover': { color: '#6C8CC9' },
         textDecoration: 'none' }}>
          User Ratings & Reviews
        </Link></>
      ,   <Typography sx={{ fontSize: '14px' }}>Loan repayment terms</Typography>,         
      <Typography sx={{ fontSize: '14px' }}>580</Typography>,
      <Typography sx={{ fontSize: '14px' }}>8.49% - 35.99%</Typography>,
      <Typography sx={{ fontSize: '14px' }}>$1,000 to $50,000</Typography>,
   
     
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


    
  
  
  
    
        
  



    createData( <img src={Upstart_logo} alt="img" width={150} height={32} />,
    <><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /><br/><Link
     href="#"
      sx={{ fontSize: '10px',
       textTransform: 'none',
        color: '#0069BA', 
        '&:hover': { color: '#6C8CC9' },
         textDecoration: 'none' }}>
          User Ratings & Reviews
         </Link></>,
         <Typography sx={{ fontSize: '14px' }}>Thin credit histories</Typography>,         
         <Typography sx={{ fontSize: '14px' }}>300</Typography>,
         <Typography sx={{ fontSize: '14px' }}>7.80% - 35.99%</Typography>,
         <Typography sx={{ fontSize: '14px' }}>$1,000 to $50,000</Typography>,
      
       
       
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

export default function Tableofloans3() {
  return (
    <><Container>
    <Link href='#'  sx={{fontSize:'12px',fontFamily: "'Lato', sans-serif", textDecoration:'none', marginLeft:'10px',display: { sm: 'none', md: 'none', lg:'flex', xs:'none'},}}> How does lending tree Get paid?</Link>

    <TableContainer component={Paper}sx={{ display: { sm: 'none', md: 'none', lg:'flex', xs:'none'}, justifyContent:'center', boxShadow:'none' }}>
      <Table sx={{ minWidth: 650, marginTop: '40px' }} aria-label="simple table">
        <TableHead sx={{height:'98px'}}>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#FFFFFF', padding:' 0px' }}>Lender</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#FFFFFF', padding:'0px'  }}>User ratings</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#FFFFFF', padding:' 0px'  }}>Best for...</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#FFFFFF', padding:' 0px'  }}>Minimum credit score</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#FFFFFF' , padding:' 11px',width:'112px' }}>APR</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#FFFFFF' , padding:' 11px',width:'125px' }}>Loan amount</TableCell>
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
              <TableCell align="center"  sx={{ padding: '6px' }}>{row.calories} </TableCell>
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






    <Container sx={{ display: { sm: 'none', md: 'none', lg:'flex', xs:'none'},
    justifyContent: 'center',
    alignItems: 'center',}} >
    <Button
      variant="text"
      sx={{
        fontSize: '16px',
        color: '#FFFFFF', 
        padding: '10px 24px',
        textAlign:'center',
        textTransform: 'none',
        bgcolor:'#FF704D',
        fontWeight:'bold',
        marginTop:'25px',
        display:'flex',
        '&:hover': {
          bgcolor: '#FF471A',
        },
      }}
    >
        See  Personalized Offers
      </Button>
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
        >Read more about <span style={{color:'#00AEEF'}}> how we chose the best personal loans for bad credit </span>below.
        </Typography>
       
        </Box>
   </Container>
      </>

  );
}
