import { Autocomplete, Box, Button, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useContext, useState } from 'react'
import { UserContext } from '../../../../context'

const top100Films = [
  { "label": "Debt Consolidation", "value": "DEBTCONSOLIDATION" },
  { "label": "Pay Off Credit Cards", "value": "CCREFI" },
  { "label": "Home Improvement", "value": "HOMEIMP" },
  { "label": "Home Buying", "value": "HOMEBUYING" },
  { "label": "Major Purchase", "value": "MAJORPURCHASE" },
  { "label": "Car Financing", "value": "CARFINANCING" },
  { "label": "Business", "value": "BUSINESS" },
  { "label": "Vacation", "value": "VACATION" },
  { "label": "Wedding Expenses", "value": "WEDDING" },
  { "label": "Moving and Relocation", "value": "MOVING" },
  { "label": "Medical Expenses", "value": "MEDICAL" },
  { "label": "Car Repair", "value": "CARREPAIR" },
  { "label": "Everyday Bills", "value": "EVERYDAYBILLS" },
  { "label": "Other", "value": "OTHER" }
]


const LoanPurpose = () => {

  const [selectedValue, setSelectedValue] = useState(null);
  const [show, setShow] = useState(true);
  const { updateUser } = useContext(UserContext);
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  const handleAutocompleteChange = (event, newValue) => {
    setSelectedValue(newValue.label);
  };

  const handleButtonClick = () => {
    if (selectedValue) {
      updateUser({
        loan_purpose: selectedValue
      })
      setShow(false)
    }
  };

  return (
    <Box display={show ? "block" : "none"} sx={{ textAlign: "center" }}>
      <Typography color={"white"} fontSize={isLargeScreen ? "27px" : "22px"} mb={4}>
        Select a loan purpose
      </Typography>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        onChange={handleAutocompleteChange}
        sx={{ width: isLargeScreen ? "300px" : "280px", margin:"auto" }}
        renderInput={(params) => (
          <TextField
            variant='filled'
            size="small"
            sx={{ backgroundColor: 'white', color: 'black', borderRadius: '10px' }}
            {...params}
            label="Loan Purpose"
          />
        )}
      />
      <Button onClick={handleButtonClick} variant="contained" sx={{ marginTop: "40px", backgroundColor: "#08c177", color: "white", width: isLargeScreen ? "300px" : "280px", height: "50px", paddingX: "10px", textTransform: "capitalize", fontSize: "17px" }}>Continue</Button>
    </Box>
  )
}

export default LoanPurpose