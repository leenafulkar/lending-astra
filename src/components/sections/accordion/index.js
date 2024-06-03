import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function AccordionTransition({ data }) {
  const [expanded, setExpanded] = useState(null);

  const handleExpansion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div>
      {data.map((val, index) => (
        <Accordion
          sx={{ marginBottom: "5px" }}
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleExpansion(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "50%",
                  border: "1px solid #00aeef",
                  color: "#00aeef",
                }}
              >
                <ExpandMoreIcon />
              </Box>
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            margin={0}
          >
            <Box
              sx={{
                backgroundColor: "#ecfbf5",
                borderRadius: "50%",
                width: "37px",
                height: "37px",
                margin: "0 15px 5px 0",
                padding: "6px",
                display: "inline-block",
                textAlign: "center",
                color: "#08c177",
              }}
            >
              {val.icon}
            </Box>
            <Typography
              display={"flex"}
              alignItems={"center"}
              fontSize={15}
              color={"#000000"}
            >
              {val.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: "22px", mb: "10px" }}>
              {val.subTitle}
            </Typography>
            <Typography fontSize={"15px"}>{val.content}</Typography>
            <Link
              to={val.route}
              style={{
                textDecoration: "none",
                color: "#fff",
                "&:hover": {
                  color: "inherit",
                  backgroundColor: "#00aeef !important",
                },
              }}
            >
              <Button
                sx={{
                  width: "100%",
                  backgroundColor: "#00aeef",
                  textTransform: "capitalize",
                  mt: "10px",
                }}
                variant="contained"
              >
                Compare Rates
              </Button>
            </Link>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
