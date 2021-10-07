import {
  Box,
  Button,
  Container,
  Grid,
  Typography
} from '@material-ui/core';

import { Link as RouterLink } from 'react-router-dom';

import { experimentalStyled } from '@material-ui/core/styles';

const TypographyH1 = experimentalStyled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = experimentalStyled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const LabelWrapper = experimentalStyled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`
);

const MuiAvatar = experimentalStyled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #e5f7ff;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

const TsAvatar = experimentalStyled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #dfebf6;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

function Hero() {


  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid spacing={{ xs: 6, md: 10 }} justifyContent="center" alignItems="center" container>
        <Grid item md={10} lg={8} mx="auto">
          <LabelWrapper color="success">Version 1.0.0</LabelWrapper>
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            POLMO - The Advanced Air Pollution Monitoring Network
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            POLMO is a low cost IoT based real time air pollution monitoring system. It uses advanced sensing technologies to collect pollution information from the real world sensors and provides real time data visualization, machine learning based air quality prediction, warning information for human beings, animals, and plants due to air pollution.
          </TypographyH2>
          <Button
            component={RouterLink}
            to="/demo/urban-node"
            size="large"
            variant="contained"
          >
            View the Polmo Urban Node - Demo
          </Button>
        
          <Grid container spacing={3} mt={5}>
            <Grid item md={6}>
              <MuiAvatar>
                <img src="/static/images/logo/material-ui.svg" alt="Material-UI" />
              </MuiAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}><b>Powered by Material-UI</b></Box><Typography component="span" variant="subtitle2"> - A simple and customizable component library to build faster, beautiful, andaccessible React apps.</Typography>
              </Typography>
            </Grid>
            <Grid item md={6}>
              <TsAvatar>
                <img src="/static/images/logo/typescript.svg" alt="Typescript" />
              </TsAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}><b>Built with Typescript</b></Box><Typography component="span" variant="subtitle2"> - Polmo web ui features a modern technology stack and is built with React + Typescript.</Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
