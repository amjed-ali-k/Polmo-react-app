import { Card, Box, Grid, Typography, Avatar, Badge } from "@material-ui/core";

import { experimentalStyled } from "@material-ui/core/styles";
import Text from "src/components/Text";

const AvatarWrapper = experimentalStyled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(7)};
    height: ${theme.spacing(7)};
`
);

function TeamOverview() {
  return (
    <>
      {" "}
      <Typography variant="h5" component="h5" gutterBottom>
        A project by Govt College of Engineering, Kannur. ECE Dept. and R.T.D.C
      </Typography>
      {/* <Typography variant="h3" component="h3" gutterBottom>
        The Team
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2.5 }}>
            <Box display="flex" alignItems="center" pb={3}>
              <Badge
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                overlap="circular"
              >
                <AvatarWrapper
                  alt="Harinarayanan P"
                  src="/static/images/avatars/harinarayanan.jpeg"
                />
              </Badge>
              <Box sx={{ ml: 1.5 }}>
                <Typography variant="h4" noWrap gutterBottom>
                  Harinarayanan P
                </Typography>
                <Typography variant="subtitle2" noWrap>
                  Polmo Hardware and Research
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2.5 }}>
            <Box display="flex" alignItems="center" pb={3}>
              <Badge
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                overlap="circular"
              >
                <AvatarWrapper
                  alt="Ann Saris"
                  src="/static/images/avatars/amjedali.jpeg"
                />
              </Badge>
              <Box sx={{ ml: 1.5 }}>
                <Typography variant="h4" noWrap gutterBottom>
                  Amjed Ali K
                </Typography>
                <Typography variant="subtitle2" noWrap>
                  Polmo Software and Web
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2.5 }}>
            <Box display="flex" alignItems="center" pb={3}>
              <Badge
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                overlap="circular"
              >
                <AvatarWrapper
                  alt="Sugdev"
                  src="/static/images/avatars/sugdev.jpg"
                />
              </Badge>
              <Box sx={{ ml: 1.5 }}>
                <Typography variant="h4" noWrap gutterBottom>
                  Sukhdev
                </Typography>
                <Typography variant="subtitle2" noWrap>
                  Sensors and Mathematical Modeling
                </Typography>
              </Box>
            </Box>

            <Typography variant="subtitle2" gutterBottom>
              <Text color="black"> </Text>
            </Typography>
          </Card>
        </Grid>
      </Grid> */}
    </>
  );
}

export default TeamOverview;
