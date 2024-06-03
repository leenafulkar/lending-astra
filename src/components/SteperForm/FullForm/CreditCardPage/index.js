import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import "./index.css";
import BestCreditCard from "./BestCardByCategory";
import BestCardByIssuer from "./BestCardByIssuer";
import BestCardsByCreditQuality from "./BestCardByCreditQuality";

const BestCardsByCategoryContent = () => {
  return (
    <Typography variant="body1" component="div" sx={{ p: 2 }}>
      Best cards by category content goes here...
    </Typography>
  );
};

const BestCardsByIssuerContent = () => {
  return (
    <Typography variant="body1" component="div" sx={{ p: 2 }}>
      Best cards by issuer content goes here...
    </Typography>
  );
};

const BestCardsByCreditQualityContent = () => {
  return (
    <Typography variant="body1" component="div" sx={{ p: 2 }}>
      Best cards by credit quality content goes here...
    </Typography>
  );
};

const CreditCardTab = () => {
  const [value, setValue] = React.useState(0);
  const tabsRef = React.useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleScroll = (scrollType) => {
    const tabsContainer = tabsRef.current;
    const tabsWidth = tabsContainer.offsetWidth;
    const scrollAmount = scrollType === "right" ? tabsWidth : -tabsWidth;
    tabsContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Box sx={{ display: { xs: "", sm: "block" } }}>
        <div style={{ position: "relative", overflowX: "auto" }} ref={tabsRef}>
          {value > 0 && (
            <KeyboardArrowLeft
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              onClick={() => handleScroll("left")}
            />
          )}
          <Paper elevation={3}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab
                label="BEST CARDS BY CATEGORY"
                style={{
                  backgroundColor: value === 0 ? "#08c177" : "",
                  color: value === 0 ? "#fff" : "#101f30",
                  width: "100%",
                  height: "55px",
                  fontWeight: "700",
                  textTransform: "capitalize",
                  letterSpacing: "0.3px",
                }}
              />
              <Tab
                label="BEST CARDS BY ISSUER"
                style={{
                  backgroundColor: value === 1 ? "#08c177" : "",
                  color: value === 1 ? "#fff" : "#101f30",
                  width: "100%",
                  height: "55px",
                  fontWeight: "700",
                  textTransform: "capitalize",
                  letterSpacing: "0.3px",
                }}
              />
              <Tab
                label="BEST CARDS BY CREDIT QUALITY"
                style={{
                  backgroundColor: value === 2 ? "#08c177" : "",
                  color: value === 2 ? "#fff" : "#101f30",
                  width: "100%",
                  height: "55px",
                  fontWeight: "700",
                  textTransform: "capitalize",
                  letterSpacing: "0.3px",
                }}
              />
            </Tabs>
          </Paper>
          {value < 3 - 1 && (
            <KeyboardArrowRight
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              onClick={() => handleScroll("right")}
            />
          )}
        </div>

        <div className="tab-content">
          {value === 0 && <BestCreditCard />}
          {value === 1 && <BestCardByIssuer />}
          {value === 2 && <BestCardsByCreditQuality />}
        </div>
      </Box>
    </Container>
  );
};

export default CreditCardTab;
