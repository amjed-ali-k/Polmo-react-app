import { Helmet } from "react-helmet-async";
import PageHeader from "./PageHeader";
import Footer from "src/components/Footer";
import { Container, Grid } from "@material-ui/core";
import PageTitleWrapper from "src/components/PageTitleWrapper";

import TeamOverview from "./TeamOverview";
import LiveValues from "./LiveValues";

import AqiChart from "./AqiChart";
import IndividualSensors from "./IndividualSensors";
import LineChart from "./LineChart";
import NodeDetails from "./NodeDetails";
import { useAQIbackendCalls, useBackEndCalls } from "src/api/hooks";
import NodeMap from "./NodeMap";
import InfoAlert from "./InfoAlert";

function DashboardTasks() {
  useAQIbackendCalls(); 
  useBackEndCalls()
  return (
    <>
      <Helmet>
        <title>Polmo Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <>
          <Grid item xs={12}>
        <InfoAlert />

          </Grid>
          <Grid item xs={12} sm={6} md={8}>
              <NodeDetails />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <NodeMap/>
            </Grid>
           
            <Grid item xs={12} sm={6} md={8}>
              <AqiChart />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <LiveValues />
            </Grid>
            <Grid item xs={12}>
              <IndividualSensors />
            </Grid>
            <Grid item xs={12}>
              <LineChart />
            </Grid>
            <Grid item xs={12}>
              <TeamOverview />
            </Grid>
          </>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default DashboardTasks;
