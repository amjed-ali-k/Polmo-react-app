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
            <FeatureItem title='Sensing Greenhouse Gases' imageUri={'/static/images/overview/Features/green-house-gas.png'} subtitle={'Greenhouse gases are responsible for global warming and climate change. Polmo senses Primary Greenhouse gases like methane (CH4) and Carbon Di-0xide (CO2) from ambient air.'} />
            <FeatureItem title='Dust Particles Monitoring' imageUri={'/static/images/overview/Features/dust-particles.png'} subtitle={'Particulate matters such as PM2.5, PM1.0 and PM10 are major pollutants in many cities and urban areas in India. Particulate matter causes respiratory problems and smog which reduces visibility.'} />
            <FeatureItem title='Toxic Gas Analyzing' imageUri={'/static/images/overview/Features/toxic-gas.png'} subtitle={'Toxic gases like Carbon Monoxide (CO), Sulphur Dioxide (SO2), Nitrogen oxides (NOx), Ammonia (NH3) are major pollutants present in the atmosphere. These gases are emitted mostly from vehicles and industries.'} />
            <FeatureItem title='Real-time Monitoring' imageUri={'/static/images/overview/Features/real-time-sensing.png'} subtitle={'Hardware is kept in sync using MQTT protocol with the help of IBM Watson IoT. It\'s fast and lightweight in many to many communications and real-time visualizations.'} />
            <FeatureItem title='Pollution level preditions' imageUri={'/static/images/overview/Features/prediction.png'} subtitle={'The goal of pollution prediction is to provide information people and organizations can use to reduce pollution-related losses and enhance societal benefits, including protection of life and property, public health and safety, and quality of life.'} />
            <FeatureItem title='Historical Data analysis' imageUri={'/static/images/overview/Features/historical-data.png'} subtitle={'All data from sensors will be stored efficiently in Relational Databases, hence providing any requested data back in time. It helps in predictions, decision-making, handling setbacks, mitigating risks, and more.'} />
            <FeatureItem title='Pollution heat map' imageUri={'/static/images/overview/Features/heat-map.png'} subtitle={'Heat maps provide a visual, big picture, holistic view to share while making strategic decisions. It enhances the focus on the risk appetite and risk tolerance as well management of risks and governance of process.'} />
            <FeatureItem title='Public API Endpoint' imageUri={'/static/images/overview/Features/public-api.png'} subtitle={'API delivers all data into a publicly accessible format. The community and organizations can fetch and use the data for their predictions, analysis and research. Even a simple jogging App can predict the possible safest route for jogging based on the data.'} />
            <FeatureItem title='Open Source' imageUri={'/static/images/overview/Features/open-source.png'} subtitle={'Opensource provides higher quality, greater reliability, more flexibility on the project. The source code is available to all the users. Where they can contribute and make the project better day by day.'} />
      
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
