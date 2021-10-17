import { Container, Grid, Typography } from "@material-ui/core";
import { experimentalStyled } from "@material-ui/core/styles";

const MainTitle = experimentalStyled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(35)};
    font-weight: bold;
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

function NodesSection() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={12} lg={10} mx="auto">
          <Grid container spacing={5} mt={5}>
            <Grid item>
              <MainTitle mb={5} variant="h1">
                The Flavours
              </MainTitle>
              <Grid container justifyContent="center" spacing={5}>
                <Grid item sm={6} md={4}>
                  <img
                    style={{ maxWidth: "300px", width: "100%" }}
                    src="/static/images/overview/Logo/polmo-urban-with-title.png"
                    alt="Polmo Green Logo"
                  />
                  <Typography>
                    Polmo Urban nodes will be deployed in highly populated,
                    crowded areas where pollution will affect a large number of
                    beings. This node will fetch sensor readings in seconds and
                    send them to its master node. Urban nodes will be deployed
                    in short-range and even a single city will contain multiple
                    nodes. Urban nodes will have much more accuracy and be used
                    to display real-time readings.
                  </Typography>
                </Grid>
                <Grid item sm={6} md={4}>
                  <img
                    style={{ maxWidth: "300px", width: "100%" }}
                    src="/static/images/overview/Logo/polmo-green-with-title.png"
                    alt="Polmo Green Logo"
                  />
                  <Typography>
                    These nodes are intended to deploy in fewer areas like
                    villages, farmlands. There will be only a limited number of
                    deployments in a large area. Sensors will only collect data
                    in long intervals and go to sleep mode. Long-range low power
                    communication protocols like LoRaWAN will be used to connect
                    these nodes to their master nodes.
                  </Typography>
                </Grid>
                <Grid item sm={6} md={4}>
                  <img
                    style={{ maxWidth: "300px", width: "100%" }}
                    src="/static/images/overview/Logo/polmo-indoor-with-title.png"
                    alt="Polmo Green Logo"
                  />
                  <Typography>
                    Indoor nodes will be made for deployment inside houses,
                    factories and industries. It will be used for particular
                    purposes and the safety of people in houses and the workers
                    in the factory. These nodes may not have master nodes and
                    are directly connected to LAN networks.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NodesSection;
