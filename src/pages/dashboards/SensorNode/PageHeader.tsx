import { Typography, Grid } from "@material-ui/core";

function PageHeader() {
  const user = {
    name: "Visitor",
  };

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Welcome, {user.name}!
        </Typography>
        <Typography variant="subtitle2">
          This is the web interface for Polmo Sensor Node placed at Kannur,
          India. This page only includes details from single sensor node. All
          data displayed here is recived from sensors node through IBM Watson
          IOT and Node Red Flows, which also further processed using Fast API
          Backend. You can find the github repo of this project here.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
