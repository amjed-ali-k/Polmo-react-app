import { Container, Grid, Typography } from "@material-ui/core";
import { experimentalStyled } from "@material-ui/core/styles";

const MainTitle = experimentalStyled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(40)};
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

function NodesSection() {
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
              <MainTitle mb={2} variant="h1">
                The Sensor Nodes
              </MainTitle>
              <Grid container>
                <Grid item>
                  <Typography> Sample Text </Typography>
                </Grid>
                <Grid item>
                  <Typography> Sample Text </Typography>
                </Grid>
                <Grid item>
                  <Typography> Sample Text </Typography>
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
