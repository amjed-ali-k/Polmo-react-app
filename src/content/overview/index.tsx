import { Box, Container, Card, Grid } from "@material-ui/core";
import { Helmet } from "react-helmet-async";

import { experimentalStyled } from "@material-ui/core/styles";
import Logo from "src/components/LogoSign";
import Hero from "./Hero";
import NodesSection from "./NodesSection";
import ProblemSection from "./ProblemSection";
import FeaturesSection from "./FeaturesSection";

const OverviewWrapper = experimentalStyled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Overview() {
  return (
    <OverviewWrapper>
      <Helmet>
        <title>Polmo - Air Pollution Monitoring Network</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
          <Logo />
        </Box>
        <Card sx={{ px: 2, py: 10, mb: 5, borderRadius: 12 }}>
          <Hero />
        </Card>
      </Container>
      <Container maxWidth="xl">
        <Grid sx={{ px: 2, py: 5, borderRadius: 12 }}>
          <ProblemSection />
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid sx={{ px: 2, py: 5, mb: 5, borderRadius: 12 }}>
          <NodesSection />
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid sx={{ px: 2, py: 5, mb: 5, borderRadius: 12 }}>
          <FeaturesSection />
        </Grid>
      </Container>
    </OverviewWrapper>
  );
}

export default Overview;
