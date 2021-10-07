import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Typography,
} from "@material-ui/core";
import {
  Air,
  AssistantPhoto,
  BatteryStd,
  FireExtinguisher,
  Fireplace,
  Flare,
  FormatColorFill,
  InvertColors,
  LocalFireDepartment,
  LocationCity,
  Power,
  Whatshot,
} from "@material-ui/icons";
import { PNodeDetails, SensorDetails } from "src/api/constants";
import Label from "src/components/Label";
import Text from "src/components/Text";
import DoneTwoToneIcon from "@material-ui/icons/DoneTwoTone";

const icons = [
  <Flare />,
  <Fireplace />,
  <LocalFireDepartment />,
  <Whatshot />,
  <FireExtinguisher />,
  <AssistantPhoto />,
  <Air />,
  <InvertColors />,
  <FormatColorFill />,
];


function StatusIcon ({status}) {
    switch (status){
        case 'online':   return(
            <Label color="success">
            <DoneTwoToneIcon fontSize="small" />
            <b>Online</b>
          </Label>
        )
        case 'offline': return(
            <Label color="error">
            <DoneTwoToneIcon fontSize="small" />
            <b>Offline</b>
          </Label>
        )
        case 'idle': 
        return(
            <Label color="info">
            <DoneTwoToneIcon fontSize="small" />
            <b>Idle</b>
          </Label>
        )
        case 'sleep' : return(
            <Label color="info">
            <DoneTwoToneIcon fontSize="small" />
            <b>Sleep</b>
          </Label>)
          default: return(
            <Label color="warning">
            <DoneTwoToneIcon fontSize="small" />
            <b>Unknown</b>
          </Label>)
    }
  
}

function NodeDetails() {
  return (
    <Card>
      <CardHeader>
        <Typography> Sensor Node </Typography>
      </CardHeader>
      <CardContent>
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography variant="h3">Polmo Urban Node</Typography>
          </Grid>
          <Grid item>
            <Grid container sx={{ alignItems: "center" }}>
              <LocationCity sx={{ mr: "5px" }} />
              <Typography>{PNodeDetails.location}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <hr />
        <Grid container>
          <Grid item md={6}>
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: "right" }}>
                  <Box pr={3} pb={2}>
                    Name:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>{PNodeDetails.name}</b>
                  </Text>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: "right" }}>
                  <Box pr={3} pb={2}>
                    ID:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>{PNodeDetails.id}</b>
                  </Text>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: "right" }}>
                  <Box pr={3} pb={2}>
                    Status:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                
                <StatusIcon status={PNodeDetails.status} />
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: "right" }}>
                  <Box pr={3} pb={2}>
                    DOC:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>{PNodeDetails.commissioned}</b>
                  </Text>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: "right" }}>
                  <Box pr={3} pb={2}>
                    Address:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ maxWidth: { xs: "auto", sm: 300 } }}>
                    <Text color="black">
                     {PNodeDetails.address}
                    </Text>
                  </Box>
                </Grid>
              </Grid>
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: "right" }}>
                  <Box pr={3} pb={2}>
                    Last Updated:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ maxWidth: { xs: "auto", sm: 300 } }}>
                    <Text color="black">{PNodeDetails.lastUpdated}</Text>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: "right" }}>
                  <Box pr={3} pb={2}>
                    Up Time:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ maxWidth: { xs: "auto", sm: 300 } }}>
                    <Text color="black">{PNodeDetails.upTime}</Text>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: "right" }}>
                  <Box pr={3} pb={2}>
                    Power:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ maxWidth: { xs: "auto", sm: 300 }, alignItems: "center", flexDirection: 'row', display: 'flex' }}>
                    {PNodeDetails.charging? <Power color='primary' /> : <BatteryStd color='info' />}
                    <div>
                      <Text color="black">{`${PNodeDetails.battery}% ${PNodeDetails.charging? '(On AC)': '(On Battery)'}`}</Text>
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </Typography>
          </Grid>
          <Grid item sx={{ mt: "10px" }}>
            <Typography variant="h5">Connected Sensors</Typography>
          </Grid>
          <Grid item>
            {SensorDetails.map((item, index) => {
              let num = index;
              while (num >= icons.length) {
                num -= icons.length;
              }

              return (
                <Chip
                  icon={icons[num]}
                  key={index}
                  sx={{ mx: "3px", my: "2px" }}
                  size="small"
                  label={item.slug}
                />
              );
            })}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default NodeDetails;
