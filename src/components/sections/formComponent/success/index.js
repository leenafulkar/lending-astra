import React, { useContext, useState } from "react";
import {
    FormControl,
    Box,
    Button,
    Typography,
    useMediaQuery,
    FormControlLabel,
    Checkbox,
    FormHelperText,
} from "@mui/material";
import { UserContext } from "../../../../context";
import { styled } from '@mui/material/styles';
import { CheckboxProps } from '@mui/material/Checkbox';

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
        theme.palette.mode === 'dark'
            ? '0 0 0 1px rgb(16 22 26 / 40%)'
            : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
            : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
    },
    'input:hover ~ &': {
        backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background:
            theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#08c177',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&::before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: '#08c177',
    },
});

// Inspired by blueprintjs #08c177
function BpCheckbox(props: CheckboxProps) {
    return (
        <Checkbox
            sx={{
                '&:hover': { bgcolor: 'transparent' },
            }}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            inputProps={{ 'aria-label': 'Checkbox demo' }}
            {...props}
        />
    );
}


const Success = () => {
    const [selectedValue, setSelectedValue] = useState("");
    const [show, setShow] = useState(true);
    const isLargeScreen = useMediaQuery('(min-width: 768px)');


    const buttonStyle = {
        marginTop: "10px",
        backgroundColor: "#08c177",
        color: "white",
        width: "330px",
        height: "50px",
        padding: "10px",
        fontSize: "14.5px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        outline: "none",
        transition: 'background-color 3.9s',
        width: isLargeScreen ? "300px" : "280px",
        '&:hover': {
            backgroundColor: '#07a16f',
            transform: 'scale(1.1)',
            border: 'none'
        },

    };

    return (
        <Box sx={{ textAlign: "center" }} display={show ? "block" : "none"}  >
            <Typography margin={"auto"} width={isLargeScreen ? "100%" : "60%"} color={"white"} fontSize={isLargeScreen ? "40px" : "22px"} mb={4}>
                Get more with a free LendingTree
            </Typography>

            <FormControl component="fieldset">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                    }}
                >

                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={1} mb={5}>
                        <BpCheckbox />
                        <Typography width={isLargeScreen ? "100%" : "60%"} color={"white"} fontSize={isLargeScreen ? "20px" : "15px"} textTransform={"uppercase"} >
                            Continue with free enhanced account*
                        </Typography>
                    </Box>

                    <Button
                        variant={
                            selectedValue === "Unsure just browsing rates"
                                ? "contained"
                                : "outlined"
                        }
                        sx={buttonStyle}

                    >
                        See Your Results
                    </Button>


                    <Box display={isLargeScreen ? "flex" : "block"} alignItems={"center"} my={5} >

                        <Box margin={"auto"} width={isLargeScreen ? "280px" : "218px"} height={isLargeScreen ? "280px" : "218px"} >
                            <img style={{ width: "100%", height: "100%" }} src="https://www.lendingtree.com/forms/assets/images/spring-branding-image.png" alt="" />
                        </Box>
                        <Box textAlign={"left"}>
                            <Typography paddingLeft={5} width={isLargeScreen ? "100%" : "60%"} color={"white"} fontSize={isLargeScreen ? "24px" : "20px"} fontFamily={"serif"}>
                                What do I get?
                            </Typography>
                            <ul style={{ color: "white", fontSize: "15px", lineHeight: "20px" }}>
                                <li style={{ margin: "15px 0 0 20px" }}>Free credit score and monitoring</li>
                                <li style={{ margin: "15px 0 0 20px" }}>Insights into what’s affecting your credit</li>
                                <li style={{ margin: "15px 0 0 20px" }}>Step by step financial guidance</li>
                                <li style={{ margin: "15px 0 0 20px" }}>Personalized financial recommendations and tips</li>
                            </ul>
                        </Box>
                    </Box>


                    <FormHelperText sx={{ color: "#A3A3A3" }}>
                        *By selecting "Continue with a free enhanced account" above, I authorize LendingTree to periodically obtain my consumer credit report and other credit information associated with me from TransUnion Interactive, Inc., in order to verify my identity and display my credit information to me.
                    </FormHelperText>




                </Box>
            </FormControl >
        </Box >
    );
};

export default Success;
