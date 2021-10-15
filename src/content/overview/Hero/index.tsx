import { Button, Container, Grid, Typography } from "@material-ui/core";

import { Link as RouterLink } from "react-router-dom";

import { experimentalStyled } from "@material-ui/core/styles";
import "./styles.css";
const TypographyH1 = experimentalStyled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(60)};
`
);

const TypographySubtitle = experimentalStyled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(25)};
`
);

const TypographyH2 = experimentalStyled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

// const Paragraph = experimentalStyled(Typography)(
//   ({ theme }) => `
//     font-size: ${theme.typography.pxToRem(15)};
//     color: #ababab !important;
// `
// );

// const LabelWrapper = experimentalStyled(Box)(
//   ({ theme }) => `
//     background-color: ${theme.colors.success.main};
//     color: ${theme.palette.success.contrastText};
//     font-weight: bold;
//     border-radius: 30px;
//     text-transform: uppercase;
//     display: inline-block;
//     font-size: ${theme.typography.pxToRem(11)};
//     padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
//     margin-bottom: ${theme.spacing(2)};
// `
// );

function Hero() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          {/* <LabelWrapper color="success">Version 1.0.0</LabelWrapper> */}
          <TypographyH1 variant="h1">POLMO</TypographyH1>
          <TypographySubtitle sx={{ mb: 2 }} className="designed-ul">
            The Advanced<strong> Air Pollution Monitoring</strong> Network
          </TypographySubtitle>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            POLMO is a low-cost IoT based real-time air pollution monitoring
            system. It uses advanced sensing technologies to collect pollution
            information from real-world sensors and provides real-time data
            visualization, machine learning-based air quality prediction,
            warning information for human beings, animals, and plants due to air
            pollution.
          </TypographyH2>
          <Button
            component={RouterLink}
            to="/demo/urban-node"
            size="large"
            variant="contained"
          >
            View the Polmo Urban Node - Demo
          </Button>

        
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
