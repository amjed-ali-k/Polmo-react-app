import { Box, Container, Typography } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';

const FooterWrapper = experimentalStyled(Box)(
  ({ theme }) => `
        border-radius: 0;
        margin: ${theme.spacing(3)} 0;
`
);

function Footer() {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Box
          py={3}
          display={{ xs: 'block', md: 'flex' }}
          alignItems="center"
          textAlign={{ xs: 'center', md: 'left' }}
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="subtitle1">
             2021 - Made by The Polmo ( Pollution Monitoring) Team
            </Typography>
          </Box>
          <Typography sx={{ pt: { xs: 2, md: 0 } }} variant="subtitle1">
            Crafted using React and Typescript
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
