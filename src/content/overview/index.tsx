import { Box, Container, Card } from '@material-ui/core';
import { Helmet } from 'react-helmet-async';

import { experimentalStyled } from '@material-ui/core/styles';
import Logo from 'src/components/LogoSign';
import Hero from './Hero';

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
        <title>Polmo - Air Pollution Monitoring System</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
          <Logo />
        </Box>
        <Card sx={{ px: 2, py:10, mb: 10, borderRadius: 12 }}>
          <Hero />
        </Card>
      </Container>
    </OverviewWrapper>
  );
}

export default Overview;
