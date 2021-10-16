import { Container, Grid, Typography } from "@material-ui/core";
import { experimentalStyled } from "@material-ui/core/styles";

const MainTitle = experimentalStyled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(35)};
    font-weight: bold;
`
);

const Paragraph = experimentalStyled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(15)};
    color: #ababab !important;
`
);

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

function FeaturesSection() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Grid container justifyContent={"center"} spacing={5} mt={5}>
        <Grid item>
          <MainTitle mb={5} variant="h1">
            Highlighted Features
          </MainTitle>
          <Grid container justifyContent="space-evenly" spacing={5}>
            <FeatureItem title='Sensing Green House Gases' imageUri={'/static/images/overview/Features/green-house-gas.png'} subtitle={''} />
            <FeatureItem title='Real-time Monitoring' imageUri={'/static/images/overview/Features/real-time-sensing.png'} subtitle={''} />
            <FeatureItem title='Pollution level preditions' imageUri={'/static/images/overview/Features/prediction.png'} subtitle={''} />
            <FeatureItem title='Historical Data analysis' imageUri={'/static/images/overview/Features/historical-data.png'} subtitle={''} />
            <FeatureItem title='Pollution heat map' imageUri={'/static/images/overview/Features/heat-map.png'} subtitle={''} />
            <FeatureItem title='Public API Endpoint' imageUri={'/static/images/overview/Features/public-api.png'} subtitle={''} />
            <FeatureItem title='Toxic Gas Analyzing' imageUri={'/static/images/overview/Features/toxic-gas.png'} subtitle={''} />
            <FeatureItem title='Dust Particles Monitoring' imageUri={'/static/images/overview/Features/dust-particles.png'} subtitle={''} />
            <FeatureItem title='Open Source' imageUri={'/static/images/overview/Features/open-source.png'} subtitle={''} />
      
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FeaturesSection;

function FeatureItem({ title, imageUri, subtitle }) {
  return (
    <Grid item sm={6} md={4}>
      <img
        style={{ maxWidth: "150px", width: "100%" }}
        src={imageUri}
        alt="Polmo Green Logo"
      />
      <Typography variant="h3"> {title} </Typography>
      <Paragraph>{subtitle}</Paragraph>
    </Grid>
  );
}
