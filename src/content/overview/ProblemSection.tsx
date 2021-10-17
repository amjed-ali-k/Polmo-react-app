import { Container, Grid, Typography } from "@material-ui/core";
import { experimentalStyled } from "@material-ui/core/styles";


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

function ProblemSection() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <Grid container spacing={5} mt={5}>
            <Grid item>
              <Typography mb={2} variant="h1" sx={{ textAlign: "left" }}>
                The Problem
              </Typography>
              <Paragraph variant="subtitle2" sx={{ textAlign: "left" }}>
                Air pollution is a major threat to every existing life in the
                world even serveral meassures taken to control it. Monitoring is
                the first level solution for controling the pollution. In india,
                there are several pollution monitoring stations such as AAQMS
                and CAAQMS. Such system needs frequent calibrations, hige
                initail costs, maintainances and spaces. Hence those are only
                implemented in critical areas. It also takes several minutes to
                fetch the readings. Most causes of air pollution is not
                sustaining but only exists for a few period. Identifying and
                monitoring such are risky as well as coslty.
              </Paragraph>
            </Grid>
            <Grid item>
              <Typography mb={2} variant="h1" sx={{ textAlign: "left" }}>
                Our Solution
              </Typography>
              <Paragraph variant="subtitle2" sx={{ textAlign: "left" }}>
                With a real-time, <b>pollution sensors network</b>, we can
                easily track the pollutants in any area. After a lot of research
                and math, we started working on a new project called
                <strong>Polmo</strong>. It consists of several sensor nodes
                containing different pollutant gas sensors. Every
                <strong>Polmo</strong> node will get connected to the cloud
                directly or through the parent nodes. By creating a network of
                Polmo nodes in the cloud, pollutant sensing under different
                areas will be robust and wide. From the real-time and historical
                sensor data, several measures can be taken to control and help
                the environment and living beings. It can also be used for the
                advantage of several latest techs.
              </Paragraph>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProblemSection;
