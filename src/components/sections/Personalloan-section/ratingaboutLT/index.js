import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const contentBoxes = [
  { id: 1, content:  <>
    <Typography color="#454545" sx={{ fontSize: '15px', fontWeight: 'bold', padding: '10px 10px 10px ', fontFamily:"'Lato', sans-serif" }}>
     Shereen Cantu
    </Typography>
    <Typography color="#454545"  sx={{ fontFamily:"'Lato', sans-serif", fontSize:'13px' ,padding: '10px 10px 10px '}}>
     Super quick and easy. I signed up and applied for a loan Friday and money was in my account Tuesday morning. Probably would've been sooner if not for the weekend. This will help me so much in consolidating a few bills while being a lower payment per month.
    </Typography>
  </> },


  { id: 2, content: <>
    <Typography color="#454545" sx={{ fontSize: '15px', fontWeight: 'bold', padding: '10px 10px 10px ', fontFamily:"'Lato', sans-serif" }}>
    Gary Morris
    </Typography>
    <Typography color="#454545"  sx={{ fontFamily:"'Lato', sans-serif", fontSize:'13px' ,padding: '10px 10px 10px '}}>
     I was very apprehensive at first going online to search for a loan. But with LendingTree everything went smoothly and all the paperwork was very simple to fill out. Thank you very much for helping us out!
    </Typography>
  </>  },


  { id: 3, content: <>
    <Typography color="#454545" sx={{ fontSize: '15px', fontWeight: 'bold', padding: '10px 10px 10px ', fontFamily:"'Lato', sans-serif" }}>
   Jean Conroy 
    </Typography>
    <Typography color="#454545"  sx={{ fontFamily:"'Lato', sans-serif", fontSize:'13px' ,padding: '10px 10px 10px '}}>
      This was the most enjoyable loan application and finalization I have ever been exposed to. Great company. I was in a blind and they came thru with flying colors and extremely quickly. Website was easy to follow as were the instructions and emials.
    </Typography>
  </>  },


  { id: 4, content:  <>
    <Typography color="#454545" sx={{ fontSize: '15px', fontWeight: 'bold', padding: '10px 10px 10px ', fontFamily:"'Lato', sans-serif" }}>
   Vince Hawkins  
    </Typography>
    <Typography color="#454545"  sx={{ fontFamily:"'Lato', sans-serif", fontSize:'13px' ,padding: '10px 10px 10px '}}>
   I was able to close the deal at home on my cellphone. I felt comfortable and my shopping was guided for me. So easy, Thanks
    </Typography>
  </>  },


  { id: 5, content:  <>
    <Typography color="#454545" sx={{ fontSize: '15px', fontWeight: 'bold', padding: '10px 10px 10px ', fontFamily:"'Lato', sans-serif" }}>
   Lavone Dickson
    </Typography>
    <Typography color="#454545"  sx={{ fontFamily:"'Lato', sans-serif", fontSize:'13px' ,padding: '10px 10px 10px '}}>
    It was quick and easy. The loan person was clear and very informative. Everything went exactly the way she said it would. Thank YOU!
    </Typography>
  </> },
  
];

export default function RatingsAboutLT() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const currentContentBox = contentBoxes[activeStep];

  return (
    <Container style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80vh',
      marginTop: '40px',
      backgroundColor:'#c1f1ec'
    }}>
      <Typography
        sx={{
          fontSize: '40px',
          color: '#101F30',
          marginTop:'40px',
          fontFamily: "'Georgia', 'Times New Roman', Times, serif",
          textAlign: 'center',
          [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
          },
        }}
      >
     What do people think about LendingTree?
      </Typography>
      <Card 
        sx={{ 
          width: '100%', 
          maxWidth: 300, 
          mb: 2, 
          marginTop:'50px',
          transition: 'transform 0.3s', // add transition
          '&:hover': { // on hover increase size
            transform: 'scale(1.05)',
          },
         
        }}
      >
        <CardContent>
          <Typography variant="body1">
            {currentContentBox && currentContentBox.content}
          </Typography>
        </CardContent>
      </Card>
      <MobileStepper
        variant="dots"
        steps={contentBoxes.length}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1, bgcolor:'#c1f1ec' }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === contentBoxes.length - 1}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Container>
  );
}
