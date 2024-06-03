import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Rating , Link, Typography, Button, Container, Box, } from '@mui/material';

import Reach_Financial_logo from '../../../../assets/Reach_Financial_logo.webp'
import lightstream from '../../../../assets/lightstream.webp'
import Upstart_logo from '../../../../assets/Upstart-logo.webp'
import PenFed_logo from '../../../../assets/PenFed_Logo_RGB-300x76-1.webp'
import Discover_Personal_loans_logo from '../../../../assets/Discover-Personal-Loans-Logo-as-of-2023.webp'
import LendingPoint_logo from '../../../../assets/LendingPoint-logo-2024-170x64-1.webp'
import Upgrade_logo from '../../../../assets/Upgrade-2023-1536x354.webp'
import Lendingclub_logo from '../../../../assets/LendingClub-1-e1615271046151.webp'
import Sofi_logo from '../../../../assets/sofilogonew.webp'
import Prosper_logo from '../../../../assets/prosper.webp'
import Bestegg_logo from '../../../../assets/Best-Egg-2023-200x44-1.webp'
import Aachieve_logo from '../../../../assets/Achieve-2023-2048x509.webp'
import Avant_logo from '../../../../assets/Avant-2023-2048x286.webp'
import Happymoney_logo from '../../../../assets/Happy-Money-logo.webp'
import BHGmoney_logo from '../../../../assets/bhg-money-logo-300x87-1.webp'


function createData(name, calories, fat, carbs, protein, mincreditscore, bestfor, Clickhere) {
  return { name, calories, fat, carbs, protein ,mincreditscore, bestfor, Clickhere };
}

const rows = [
  createData(
    
      <img src={Reach_Financial_logo} alt="img" width={120} height={53} />,
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
      <Typography sx={{ fontSize: '14px' }}>5.99% - 35.99%</Typography>,
      <Typography sx={{ fontSize: '14px' }}>24 to 60 months</Typography>,
      <Typography sx={{ fontSize: '14px' }}>$3,500 to $40,000</Typography>
    ,
    'Not Specified',
    
     ' Consolidating debt',
     
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






  createData( <img src={lightstream} alt="img" width={120} height={30} />,
  <><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /><br/><Link
   href="#"
    sx={{ fontSize: '10px',
     textTransform: 'none',
      color: '#0069BA', 
      '&:hover': { color: '#6C8CC9' },
       textDecoration: 'none' }}>
        User Ratings & Reviews
        </Link></>
        ,  <Typography sx={{ fontSize: '14px' }}>6.99% - 25.49% <br/>(with autoplay)</Typography>,
        <Typography sx={{ fontSize: '14px' }}>24 to 84 months</Typography>,
        <Typography sx={{ fontSize: '14px' }}>$5,000 to $100,000</Typography>
      ,
      'Not Specified',
     
       'Applicants with excellent credit',
        
        
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
  





    createData( <img src={Upstart_logo} alt="img" width={120} height={30} />,
    <><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /><br/><Link
     href="#"
      sx={{ fontSize: '10px',
       textTransform: 'none',
        color: '#0069BA', 
        '&:hover': { color: '#6C8CC9' },
         textDecoration: 'none' }}>
          User Ratings & Reviews
         </Link></>
        ,  <Typography sx={{ fontSize: '14px' }}>7.80% - 35.99%</Typography>,
        <Typography sx={{ fontSize: '14px' }}>36 to 60 months</Typography>,
        <Typography sx={{ fontSize: '14px' }}>$1,000 to $50,000</Typography>
      ,
      300,
    
       'Building credit',
       
       
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
  

    
  
  
  
  
      createData( <img src={PenFed_logo} alt="img" width={120} height={30} />,
      <><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /><br/><Link
       href="#"
        sx={{ fontSize: '10px',
         textTransform: 'none',
          color: '#0069BA', 
          '&:hover': { color: '#6C8CC9' },
           textDecoration: 'none' }}>
            User Ratings & Reviews
          </Link></>
        ,  <Typography sx={{ fontSize: '14px' }}>7.99% - 35.99%</Typography>,
        <Typography sx={{ fontSize: '14px' }}>12 to 60 months</Typography>,
        <Typography sx={{ fontSize: '14px' }}>$6000 to $50,000</Typography>
      ,
      760,
      
       'Small loan amounts',
       
       
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
  

      
    
    
    
    
        createData( <img src={Discover_Personal_loans_logo} alt="img" width={130} height={70} />,
        <><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /><br/><Link
         href="#"
          sx={{ fontSize: '10px',
           textTransform: 'none',
            color: '#0069BA', 
            '&:hover': { color: '#6C8CC9' },
             textDecoration: 'none' }}>
              User Ratings & Reviews
              </Link></>
              ,  <Typography sx={{ fontSize: '14px' }}>7.99% - 24.99%</Typography>,
              <Typography sx={{ fontSize: '14px' }}>36 to 84 months</Typography>,
              <Typography sx={{ fontSize: '14px' }}>$2,500 to $40,000</Typography>
            ,
           720,
           
              'No originated fees', 
        
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
        
      
      
      
      
          createData( <img src={LendingPoint_logo} alt="img" width={130} height={50} />,
          <><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /><br/><Link
           href="#"
            sx={{ fontSize: '10px',
             textTransform: 'none',
              color: '#0069BA', 
              '&:hover': { color: '#6C8CC9' },
               textDecoration: 'none' }}>
                User Ratings & Reviews
                </Link></>
                ,  <Typography sx={{ fontSize: '14px' }}>7.99% - 35.99%</Typography>,
                <Typography sx={{ fontSize: '14px' }}>24 to 72 months</Typography>,
                <Typography sx={{ fontSize: '14px' }}>$2,00 to $36,000</Typography>
              ,
              360,
              
               'mid - sized expenses',
                
        
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
          
        
        
        
        
            createData( <img src={Upgrade_logo} alt="img" width={120} height={30} />,
            <><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /><br/><Link
             href="#"
              sx={{ fontSize: '10px',
               textTransform: 'none',
                color: '#0069BA', 
                '&:hover': { color: '#6C8CC9' },
                 textDecoration: 'none' }}>
                  User Ratings & Reviews
                  </Link></>
                  ,  <Typography sx={{ fontSize: '14px' }}>8.49% - 35.99% (with discounts)</Typography>,
                  <Typography sx={{ fontSize: '14px' }}>24 to 84 months</Typography>,
                  <Typography sx={{ fontSize: '14px' }}>$1,000 to $50,000</Typography>
                ,
                580,
                
                  'Flexible loan term durations ',                
       
                   
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





              createData(
    
                <img src={Lendingclub_logo} alt="img" width={120} height={25} />,
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
                <Typography sx={{ fontSize: '14px' }}>8.98% - 35.99%</Typography>,
                <Typography sx={{ fontSize: '14px' }}>24 to 60 months</Typography>,
                <Typography sx={{ fontSize: '14px' }}>$1,500 to $40,000</Typography>
              ,
              600,
              
               'Applying with a co-borrower',
               
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
    
              <img src={Sofi_logo} alt="img" width={120} height={62} />,
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
              <Typography sx={{ fontSize: '14px' }}>8.99% - 29.99%(with discounts)*</Typography>,
              <Typography sx={{ fontSize: '14px' }}>24 to 84 months</Typography>,
              <Typography sx={{ fontSize: '14px' }}>$5,000 to $100,000</Typography>
            ,
            '680',
            
             ' Overall experience',
             
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
    
            <img src={Prosper_logo} alt="img" width={120} height={19} />,
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
            <Typography sx={{ fontSize: '14px' }}>8.99% - 35.99%</Typography>,
            <Typography sx={{ fontSize: '14px' }}>24 to 60 months</Typography>,
            <Typography sx={{ fontSize: '14px' }}>$2,500 to $50,000</Typography>
          ,
          '560',
          
           'Applicants with low credit scores',
           
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
    
          <img src={Bestegg_logo} alt="img" width={120} height={26} />,
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
          <Typography sx={{ fontSize: '14px' }}>8.99% - 35.99%</Typography>,
          <Typography sx={{ fontSize: '14px' }}>36 to 60 months</Typography>,
          <Typography sx={{ fontSize: '14px' }}>$2,000 to $50,000</Typography>
        ,
        600,
        
         'Secured and unsecured loan options',
         
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
    
        <img src={Aachieve_logo} alt="img" width={120} height={30} />,
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
        <Typography sx={{ fontSize: '14px' }}>8.99% - 35.99%</Typography>,
        <Typography sx={{ fontSize: '14px' }}>24 to 60 months</Typography>,
        <Typography sx={{ fontSize: '14px' }}>$5,000 to $50,000</Typography>
      ,
      620,
      
       'Same day credit approval',
       
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
    
      <img src={Avant_logo} alt="img" width={120} height={16} />,
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
      <Typography sx={{ fontSize: '14px' }}>9.95% - 35.99%</Typography>,
      <Typography sx={{ fontSize: '14px' }}>12 to 60 months</Typography>,
      <Typography sx={{ fontSize: '14px' }}>$2,000 to $35,000</Typography>
    ,
    580,
    
     'Fast loan funding',
     
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
    
    <img src={Happymoney_logo} alt="img" width={120} height={16} />,
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
    <Typography sx={{ fontSize: '14px' }}>11.72% - 17.99%</Typography>,
    <Typography sx={{ fontSize: '14px' }}>24 to 60 months</Typography>,
    <Typography sx={{ fontSize: '14px' }}>$5,000 to $40,000</Typography>
  ,
  640,
  
   'Refinancing credit card debt',
   
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
    
  <img src={BHGmoney_logo} alt="img" width={120} height={34} />,
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
  <Typography sx={{ fontSize: '14px' }}>13.39% - 24.91%</Typography>,
  <Typography sx={{ fontSize: '14px' }}>36 to 120 months</Typography>,
  <Typography sx={{ fontSize: '14px' }}>$20,000 - $200,000</Typography>
,
660,

 'Large loan amounts',
 
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



   
          
          ]

export default function BasicTable() {
  return (
    <><Container>
    <Link href='#'  sx={{fontSize:'12px',fontFamily: "'Lato', sans-serif", textDecoration:'none', marginLeft:'10px',display: { sm: 'none', md: 'none', lg:'flex', xs:'none'},}}> How does lending tree Get paid?</Link>

    <TableContainer component={Paper}sx={{ display: { sm: 'none', md: 'none', lg:'flex', xs:'none'}, justifyContent:'center', boxShadow:'none' }}>
      <Table sx={{ minWidth: 650, marginTop: '40px' }} aria-label="simple table">
        <TableHead sx={{height:'98px'}}>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#FFFFFF', padding:' 0px' }}>Lender</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#FFFFFF', padding:'0px'  }}>User ratings</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#FFFFFF', padding:' 0px'  }}>APR range</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#FFFFFF', padding:' 0px'  }}>Loan terms</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#FFFFFF' , padding:' 0px' }}>Loan amounts</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#FFFFFF' , padding:' 0px' }}>Min. credit score</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '18px', fontFamily: "'Lato', sans-serif", bgcolor:'#101F30', color:'#FFFFFF', padding:' 0px'  }}>Best for...</TableCell>
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
              <TableCell align="center"  sx={{ padding: '6px' }}>{row.bestfor}</TableCell>
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
        >Read more about <span style={{color:'#00AEEF'}}> how we chose our picks </span> for best personal loan lenders.
        </Typography>
       
        </Box>
   </Container>
      </>

  );
}
