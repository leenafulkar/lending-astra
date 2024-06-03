import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Typography,
  Button,
  Container,
  Box,
  useTheme,
  Rating,
} from "@mui/material";

import esl_default_logo from "../../../../assets/esl_default_All_main.jpg";
import hudson_valley_logo from "../../../../assets/hudson-valley-platinum_default_All_main.jpg";
import becu_default_logo from "../../../../assets/becu_default_All_main.jpg";
import kinecta_mypower_logo from "../../../../assets/kinecta-mypower_default_All_main.jpg";
import navy_federal_platinum_card_logo from "../../../../assets/navy-federal-platinum-credit-card_default_All_main.jpg";
import psecu_classic_logo from "../../../../assets/psecu-classic_default_All_main.jpg";
import pffcu_contactless_logo from "../../../../assets/pffcu-contactless-rewards-visa_default_All_main.jpg";
import onpoint_cashback_logo from "../../../../assets/onpoint-cash-back_default_All_main.jpg";
import bethpage_lowrate_logo from "../../../../assets/bethpage-low-rate_default_All_main.jpg";
import edward_jones_business_logo from "../../../../assets/edward-jones-business_default_All_main.jpg";
import ccefcu_world_logo from "../../../../assets/cefcu-world_default_All_main.jpg";
import cefcu_cash_back_logo from "../../../../assets/cefcu-cash-back_default_All_main.jpg";
import cefcu_rewards_logo from "../../../../assets/cefcu-rewards_default_All_main.jpg";

function createData(name, fat, carbs, protein, mincreditscore, Clickhere) {
  return { name, fat, carbs, protein, mincreditscore, Clickhere };
}

const rows = [
  // Row 1
  createData(
    <>
      <img
        src={esl_default_logo}
        alt="img"
        width={183}
        height={114}
        style={{ margin: "0px 0px 8px" }}
      />
      <Typography
        sx={{ fontSize: "12px", color: "#0069BA", fontWeight: "bold" }}
      >
        Visa® Credit Card for ESL (English as a Second Language) Users*
      </Typography>
    </>,
    <Rating name="read-only" value={4.5} readOnly precision={0.5} />,
    <Typography sx={{ fontSize: "14px" }}>
      Enjoy a 0% APR for 12 months on balance transfers.
    </Typography>,
    <Typography sx={{ fontSize: "14px" }}>
      The variable APR ranges from 13.50% to 17.99%.
    </Typography>,
    <Typography sx={{ fontSize: "14px" }}>
      Reside in specific New York state counties and fulfill additional
      eligibility criteria (e.g., affiliation with George Eastman Museum). View
      complete requirements.
    </Typography>,

    <>
      <Button
        variant="outlined"
        style={{ width: "183px", marginTop: "10px", textTransform: "none" }}
      >
        Learn more
      </Button>
      <br />
      <br />
      <Typography
        sx={{
          fontSize: "12px",
          fontFamily: "'Lato', sans-serif'",
          color: "#687073",
          marginTop: "5px",
        }}
      >
        on the secure site of ESL Federal Credit Union
      </Typography>
    </>
  ),

  // Row 2
  createData(
    <>
      <img
        src={hudson_valley_logo}
        alt="img"
        width={183}
        height={114}
        style={{ margin: "0px 0px 8px" }}
      />
      <Typography
        sx={{ fontSize: "12px", color: "#0069BA", fontWeight: "bold" }}
      >
        Visa® Platinum Credit Card offered by Hudson Valley*
      </Typography>
    </>,
    <Rating name="read-only" value={4.5} readOnly precision={0.5} />,
    <Typography sx={{ fontSize: "14px" }}>
      Enjoy a 0% introductory rate for 12 months on balance transfers.
    </Typography>,
    <Typography sx={{ fontSize: "14px" }}>
      The APR ranges from 16.50% to 18.00%.
    </Typography>,
    <Typography sx={{ fontSize: "14px" }}>
      Reside, volunteer, attend school, work, or worship in qualifying areas.
      View complete eligibility criteria.
    </Typography>,

    <>
      <Button
        variant="outlined"
        style={{ width: "183px", marginTop: "10px", textTransform: "none" }}
      >
        Learn more
      </Button>
      <br />
      <br />
      <Typography
        sx={{
          fontSize: "12px",
          fontFamily: "'Lato', sans-serif'",
          color: "#687073",
          marginTop: "5px",
        }}
      >
        on the secure site of Hudson Valley Credit Union
      </Typography>
    </>
  ),

  // Row 3
  createData(
    <>
      <img
        src={becu_default_logo}
        alt="img"
        width={183}
        height={114}
        style={{ margin: "0px 0px 8px" }}
      />
      <Typography
        sx={{ fontSize: "12px", color: "#0069BA", fontWeight: "bold" }}
      >
        BECU Visa Credit Card*
      </Typography>
    </>,
    <Rating name="read-only" value={4.5} readOnly precision={0.5} />,
    <Typography sx={{ fontSize: "14px" }}>
      Enjoy a 0% introductory APR for 12 months on balance transfers.
    </Typography>,
    <Typography sx={{ fontSize: "14px" }}>
      The variable APR ranges from 13.24% to 25.24%.
    </Typography>,
    <Typography sx={{ fontSize: "14px" }}>
      Reside in a qualifying area, work for BECU or Boeing, or be a member of
      partner associations. View complete eligibility criteria.
    </Typography>,

    <>
      <Button
        variant="outlined"
        style={{ width: "183px", marginTop: "10px", textTransform: "none" }}
      >
        Learn more
      </Button>
      <br />
      <br />
      <Typography
        sx={{
          fontSize: "12px",
          fontFamily: "'Lato', sans-serif'",
          color: "#687073",
          marginTop: "5px",
        }}
      >
        on the secure site of Boeing Employee's Credit Union
      </Typography>
    </>
  ),

  // Row 4
  createData(
    <>
      <img
        src={kinecta_mypower_logo}
        alt="img"
        width={183}
        height={114}
        style={{ margin: "0px 0px 8px" }}
      />
      <Typography
        sx={{ fontSize: "12px", color: "#0069BA", fontWeight: "bold" }}
      >
        Kinecta MyPower Credit Card*
      </Typography>
    </>,
    <Rating name="read-only" value={4.5} readOnly precision={0.5} />,
    <Typography sx={{ fontSize: "14px" }}>
      4.99% introductory APR for 18 billing cycles.
    </Typography>,
    <Typography sx={{ fontSize: "14px" }}>13.24%-18.00% Variable</Typography>,
    <Typography sx={{ fontSize: "14px" }}>
      All individuals are eligible to apply for a card. View complete
      requirements.
    </Typography>,

    <>
      <Button
        variant="outlined"
        style={{ width: "183px", marginTop: "10px", textTransform: "none" }}
      >
        Learn more
      </Button>
      <br />
      <br />
      <Typography
        sx={{
          fontSize: "12px",
          fontFamily: "'Lato', sans-serif'",
          color: "#687073",
          marginTop: "5px",
        }}
      >
        on the secure site of Kinecta Federal Credit Union
      </Typography>
    </>
  ),

  // Row 5
  createData(
    <>
      <img
        src={navy_federal_platinum_card_logo}
        alt="img"
        width={183}
        height={114}
        style={{ margin: "0px 0px 8px" }}
      />
      <Typography
        sx={{ fontSize: "12px", color: "#0069BA", fontWeight: "bold" }}
      >
        Navy Federal Platinum Credit Card*
      </Typography>
    </>,

    <Rating name="read-only" value={4.5} readOnly precision={0.5} />,
    <Typography sx={{ fontSize: "14px" }}>
      Benefit from a 0.99% introductory APR for 12 months on balance transfers
      made within 60 days of account opening.
    </Typography>,
    <Typography sx={{ fontSize: "14px" }}>
      11.24% to 18.00% (variable)
    </Typography>,
    <Typography sx={{ fontSize: "14px" }}>
      Personal or familial connections to the armed forces, Department of
      Defense (DoD), or National Guard. View complete eligibility criteria.
    </Typography>,
    <>
      <Button
        variant="outlined"
        style={{ width: "183px", marginTop: "10px", textTransform: "none" }}
      >
        Learn more
      </Button>
      <br />
      <br />
      <Typography
        sx={{
          fontSize: "12px",
          fontFamily: "'Lato', sans-serif'",
          color: "#687073",
          marginTop: "5px",
        }}
      >
        on the secure site of Navy Federal Credit Union
      </Typography>
    </>
  ),

  // Row 6
  createData(
    <>
      <img
        src={psecu_classic_logo}
        alt="img"
        width={183}
        height={114}
        style={{ margin: "0px 0px 8px" }}
      />
      <Typography
        sx={{ fontSize: "12px", color: "#0069BA", fontWeight: "bold" }}
      >
        Visa® Classic Card provided by PSECU*
      </Typography>
    </>,

    <Rating name="read-only" value={4.5} readOnly precision={0.5} />,
    <Typography sx={{ fontSize: "14px" }}>
      4.9% APR on balance transfers until December 31, 2025.
    </Typography>,
    <Typography sx={{ fontSize: "14px" }}>12.90% Variable</Typography>,
    <Typography sx={{ fontSize: "14px" }}>
      Reside with or have a familial relationship with a PSECU member, or have
      an affiliation with specific Pennsylvania colleges, universities,
      employers, and partner organizations. View complete eligibility criteria.
    </Typography>,
    <>
      <Button
        variant="outlined"
        style={{ width: "183px", marginTop: "10px", textTransform: "none" }}
      >
        Learn more
      </Button>
      <br />
      <br />
      <Typography
        sx={{
          fontSize: "12px",
          fontFamily: "'Lato', sans-serif'",
          color: "#687073",
          marginTop: "5px",
        }}
      >
        on PSECU's secure site
      </Typography>
    </>
  ),

  // Row 7
  createData(
    <>
      <img
        src={pffcu_contactless_logo}
        alt="img"
        width={183}
        height={114}
        style={{ margin: "0px 0px 8px" }}
      />
      <Typography
        sx={{ fontSize: "12px", color: "#0069BA", fontWeight: "bold" }}
      >
        Contactless Rewards Visa* offered by PFFCU
      </Typography>
    </>,

    <Rating name="read-only" value={4.5} readOnly precision={0.5} />,
    <Typography sx={{ fontSize: "14px" }}>0% for 9 months</Typography>,
    <Typography sx={{ fontSize: "14px" }}>14.4% to 18.00% variable</Typography>,
    <Typography sx={{ fontSize: "14px" }}>
      Employment as a police officer, firefighter, or in select employee groups,
      along with residency in certain Delaware, Pennsylvania, and New Jersey
      counties. View complete eligibility criteria.
    </Typography>,
    <>
      <Button
        variant="outlined"
        style={{ width: "183px", marginTop: "10px", textTransform: "none" }}
      >
        Learn more
      </Button>
      <br />
      <br />
      <Typography
        sx={{
          fontSize: "12px",
          fontFamily: "'Lato', sans-serif'",
          color: "#687073",
          marginTop: "5px",
        }}
      >
        on Capital One's secure site
      </Typography>
    </>
  ),

  // Row 8
  createData(
    <>
      <img
        src={onpoint_cashback_logo}
        alt="img"
        width={183}
        height={114}
        style={{ margin: "0px 0px 8px" }}
      />
      <Typography
        sx={{ fontSize: "12px", color: "#0069BA", fontWeight: "bold" }}
      >
        Signature Visa® with Cash Back Rewards* offered by OnPoint
      </Typography>
    </>,

    <Rating name="read-only" value={4.5} readOnly precision={0.5} />,
    <Typography sx={{ fontSize: "14px" }}>
      4.99% intro APR for 12 months on balance transfers
    </Typography>,
    <Typography sx={{ fontSize: "14px" }}>17.25%-21.75% Variable</Typography>,
    <Typography sx={{ fontSize: "14px" }}>
      Reside or work in a qualifying area, or have a familial connection to an
      individual eligible for membership. View complete requirements.
    </Typography>,
    <>
      <Button
        variant="outlined"
        style={{ width: "183px", marginTop: "10px", textTransform: "none" }}
      >
        Learn more
      </Button>
      <br />
      <br />
      <Typography
        sx={{
          fontSize: "12px",
          fontFamily: "'Lato', sans-serif'",
          color: "#687073",
          marginTop: "5px",
        }}
      >
        on Capital One's secure site
      </Typography>
    </>
  ),

  // Row 9
  createData(
    <>
      <img
        src={bethpage_lowrate_logo}
        alt="img"
        width={183}
        height={114}
        style={{ margin: "0px 0px 8px" }}
      />
      <Typography
        sx={{ fontSize: "12px", color: "#0069BA", fontWeight: "bold" }}
      >
        Mastercard® Low Rate Credit Card provided by BethPage*
      </Typography>
    </>,

    <Rating name="read-only" value={4.5} readOnly precision={0.5} />,
    <Typography sx={{ fontSize: "14px" }}>
      2.99% to 4.99% APR for the initial 12 months on balance transfers
    </Typography>,
    <Typography sx={{ fontSize: "14px" }}>13.40%-18.00% Variable</Typography>,
    <Typography sx={{ fontSize: "14px" }}>
      All individuals are eligible to apply for a card. View complete
      eligibility criteria.
    </Typography>,
    <>
      <Button
        variant="outlined"
        style={{ width: "183px", marginTop: "10px", textTransform: "none" }}
      >
        Learn more
      </Button>
      <br />
      <br />
      <Typography
        sx={{
          fontSize: "12px",
          fontFamily: "'Lato', sans-serif'",
          color: "#687073",
          marginTop: "5px",
        }}
      >
        on Bethpage Federal Credit Union's secure site
      </Typography>
    </>
  ),

  // Row 10
  createData(
    <>
      <img
        src={edward_jones_business_logo}
        alt="img"
        width={183}
        height={114}
        style={{ margin: "0px 0px 8px" }}
      />
      <Typography
        sx={{ fontSize: "12px", color: "#0069BA", fontWeight: "bold" }}
      >
        Edward Jones Business Plus MasterCard Credit Card*
      </Typography>
    </>,

    <Rating name="read-only" value={4.5} readOnly precision={0.5} />,
    <Typography sx={{ fontSize: "14px" }}>
      Enjoy a 0% introductory APR for the initial 12 billing cycles on balances
      transferred within 60 days of account opening.
    </Typography>,
    <Typography sx={{ fontSize: "14px" }}>20.24%–29.99%</Typography>,
    <Typography sx={{ fontSize: "14px" }}>Edward Jones customers</Typography>,
    <>
      <Button
        variant="outlined"
        style={{ width: "183px", marginTop: "10px", textTransform: "none" }}
      >
        Learn more
      </Button>
      <br />
      <br />
      <Typography
        sx={{
          fontSize: "12px",
          fontFamily: "'Lato', sans-serif'",
          color: "#687073",
          marginTop: "5px",
        }}
      >
        on Elan Financial Services's secure site
      </Typography>
    </>
  ),
  // Row 11
  createData(
    <>
      <img
        src={ccefcu_world_logo}
        alt="img"
        width={183}
        height={114}
        style={{ margin: "0px 0px 8px" }}
      />
      <Typography
        sx={{ fontSize: "12px", color: "#0069BA", fontWeight: "bold" }}
      >
        CEFCU World Mastercard*
      </Typography>
    </>,

    <Rating name="read-only" value={4.5} readOnly precision={0.5} />,
    <Typography sx={{ fontSize: "14px" }}>
      1.99% APR for 12 months on balance transfers
    </Typography>,
    <Typography sx={{ fontSize: "14px" }}>14.75% to 24.25% APR</Typography>,
    <Typography sx={{ fontSize: "14px" }}>
      Reside or work in a qualifying area, be an employee of CEFCU or partner
      companies, have a familial or cohabitant connection to someone meeting
      eligibility criteria, or be the spouse of a deceased member. View complete
      eligibility requirements.
    </Typography>,
    <>
      <Button
        variant="outlined"
        style={{ width: "183px", marginTop: "10px", textTransform: "none" }}
      >
        Learn more
      </Button>
      <br />
      <br />
      <Typography
        sx={{
          fontSize: "12px",
          fontFamily: "'Lato', sans-serif'",
          color: "#687073",
          marginTop: "5px",
        }}
      >
        on CEFCU's secure site
      </Typography>
    </>
  ),

  // Row 12
  createData(
    <>
      <img
        src={cefcu_cash_back_logo}
        alt="img"
        width={183}
        height={114}
        style={{ margin: "0px 0px 8px" }}
      />
      <Typography
        sx={{ fontSize: "12px", color: "#0069BA", fontWeight: "bold" }}
      >
        CEFCU Cash Back Credit Mastercard*
      </Typography>
    </>,

    <Rating name="read-only" value={4.5} readOnly precision={0.5} />,
    <Typography sx={{ fontSize: "14px" }}>
      1.99% introductory APR for 12 months for balance transfers.
    </Typography>,
    <Typography sx={{ fontSize: "14px" }}>15.75%-25.25% Variable</Typography>,
    <Typography sx={{ fontSize: "14px" }}>
      Reside or work in a qualifying area, be employed by CEFCU or its partner
      companies, have a familial or cohabitant relationship with someone meeting
      eligibility criteria, or be the spouse of a deceased member. View complete
      eligibility requirements.
    </Typography>,
    <>
      <Button
        variant="outlined"
        style={{ width: "183px", marginTop: "10px", textTransform: "none" }}
      >
        Learn more
      </Button>
      <br />
      <br />
      <Typography
        sx={{
          fontSize: "12px",
          fontFamily: "'Lato', sans-serif'",
          color: "#687073",
          marginTop: "5px",
        }}
      >
        on CEFCU's secure site
      </Typography>
    </>
  ),

  // Row 13
  createData(
    <>
      <img
        src={cefcu_rewards_logo}
        alt="img"
        width={183}
        height={114}
        style={{ margin: "0px 0px 8px" }}
      />
      <Typography
        sx={{ fontSize: "12px", color: "#0069BA", fontWeight: "bold" }}
      >
        CEFCU Rewards Credit Mastercard*
      </Typography>
    </>,

    <Rating name="read-only" value={4.5} readOnly precision={0.5} />,
    <Typography sx={{ fontSize: "14px" }}>
      1.99% for 12 months on balance transfers
    </Typography>,
    <Typography sx={{ fontSize: "14px" }}>14.75%-24.25% APR</Typography>,
    <Typography sx={{ fontSize: "14px" }}>
      Reside or work in a qualifying area, be employed by CEFCU or its partner
      companies, have a familial or cohabitant connection with someone meeting
      eligibility criteria, or be the spouse of a deceased member. View complete
      eligibility requirements.
    </Typography>,
    <>
      <Button
        variant="outlined"
        style={{ width: "183px", marginTop: "10px", textTransform: "none" }}
      >
        Learn more
      </Button>
      <br />
      <br />
      <Typography
        sx={{
          fontSize: "16px",
          fontFamily: "'Lato', sans-serif'",
          color: "#687073",
          marginTop: "5px",
        }}
      >
        Review Coming Soon
      </Typography>
    </>
  ),
];

export default function ComparisonTable2() {
  const [value, setValue] = React.useState();

  const theme = useTheme();

  return (
    <>
      <Container sx={{ display: { lg: "block", md: "block", xs: "none" } }}>
        <Typography
          sx={{
            fontSize: "27px",
            fontFamily: "'Lato', sans-serif",
            margin: "20px 0px",
            color: "#101F30",
            [theme.breakpoints.down("sm")]: {
              fontSize: "20px",
            },
          }}
        >
          Comparison summary of the best rewards credit cards
        </Typography>
        <TableContainer component={Paper} sx={{ justifyContent: "center" }}>
          <Table
            sx={{ minWidth: 650, marginTop: "40px" }}
            aria-label="simple table"
          >
            <TableHead sx={{ height: "98px" }}>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    fontFamily: "'Lato', sans-serif",
                    bgcolor: "#101F30",
                    color: "#E3E6E8",
                    padding: "15px 0px 10px 16px",
                    width: "148px",
                  }}
                >
                  Credit Cards
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    fontFamily: "'Lato', sans-serif",
                    bgcolor: "#101F30",
                    color: "#E3E6E8",
                    padding: "15px 0px 10px 16px",
                    width: "90px",
                  }}
                >
                  Our Ratings
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    fontFamily: "'Lato', sans-serif",
                    bgcolor: "#101F30",
                    color: "#E3E6E8",
                    padding: "15px 0px 10px 16px",
                    width: "116px",
                  }}
                >
                  Intro Balance Transfer APR
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    fontFamily: "'Lato', sans-serif",
                    bgcolor: "#101F30",
                    color: "#E3E6E8",
                    padding: "15px 0px 10px 16px",
                    width: "116px",
                  }}
                >
                  Regular Balance Transfer Rate
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    fontFamily: "'Lato', sans-serif",
                    bgcolor: "#101F30",
                    color: "#E3E6E8",
                    padding: "15px 0px 10px 16px",
                    width: "116px",
                  }}
                >
                  Membership requirements
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    fontFamily: "'Lato', sans-serif",
                    bgcolor: "#101F30",
                    color: "#101F30",
                    padding: "15px 0px 10px 16px",
                    width: "180px",
                  }}
                >
                  Clickhere
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{
                      verticalAlign: "top",
                      textAlign: "left",
                      padding: "16px 0px 16px 16px",
                    }}
                  >
                    {" "}
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      verticalAlign: "top",
                      textAlign: "left",
                      padding: "16px 0px 16px 16px",
                    }}
                  >
                    {row.fat}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      verticalAlign: "top",
                      textAlign: "left",
                      padding: "16px 0px 16px 16px",
                    }}
                  >
                    {row.carbs}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      verticalAlign: "top",
                      textAlign: "left",
                      padding: "16px 0px 16px 16px",
                    }}
                  >
                    {row.protein}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      verticalAlign: "top",
                      textAlign: "left",
                      padding: "16px 0px 16px 16px",
                    }}
                  >
                    {row.mincreditscore}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      verticalAlign: "top",
                      textAlign: "left",
                      padding: "16px 0px 16px 16px",
                    }}
                  >
                    {row.Clickhere}
                  </TableCell>
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
          direction: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center", // Center the buttons horizontally
          width: "100%",
          height: "auto",
          flexGrow: 1,
          display: { sm: "none", md: "none", lg: "flex", xs: "none" },
          px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints
        }}
      >
        <Box>
          <Typography
            direction={{ xs: "column", md: "column" }}
            sx={{
              fontSize: "12px",
              textAlign: "left",
              marginTop: "24px",
              fontFamily: "'Lato', sans-serif",
              color: "#7A7A7A",
            }}
          >
            *The details regarding the ESL Visa® Credit Card, Hudson Valley
            Visa® Platinum Credit Card, BECU Visa Credit Card, Kinecta MyPower
            Credit Card, Navy Federal Platinum Credit Card, PSECU Visa® Classic,
            PFFCU Contactless Rewards Visa, OnPoint Signature Visa® with Cash
            Back Rewards, BethPage Mastercard® Low Rate Credit Card, Edward
            Jones Business Plus MasterCard Credit Card, CEFCU World Mastercard,
            CEFCU Cash Back Credit Mastercard, and CEFCU Rewards Credit
            Mastercard have been compiled by LendingTree and have not been
            reviewed or provided by the issuer of these cards prior to
            publication. Terms Apply.
          </Typography>
          <Typography
            direction={{ xs: "column", md: "column" }}
            sx={{
              fontSize: "10px",
              textAlign: "left",
              marginTop: "24px",
              fontFamily: "'Lato', sans-serif",
              color: "#7A7A7A",
            }}
          >
            *Based on LendingTree’s value methodology.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
