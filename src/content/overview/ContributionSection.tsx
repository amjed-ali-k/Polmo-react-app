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

function ContributionSection() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Grid container justifyContent={"center"} spacing={5} mt={5}>
        <Grid item>
          <MainTitle mb={5} variant="h1">
            Highlighted Features
          </MainTitle>
          <Grid container justifyContent="space-evenly" spacing={5}>
   
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContributionSection;

