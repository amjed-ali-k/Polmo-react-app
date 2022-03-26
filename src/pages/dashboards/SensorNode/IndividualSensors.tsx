import {
  Card,
  Box,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  CardActions,
  IconButton,
  Collapse,
  Skeleton,
} from "@material-ui/core";
import { experimentalStyled } from "@material-ui/core/styles";
import { format, parseJSON } from 'date-fns'

import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import React from "react";
import { SensorDetails } from "src/api/constants";
import CircularStatic from "./CircularProgressWithLabel";
import { useAtom } from "jotai";
import { counterAtom, loadedAtom } from "src/api/hooks";

function IndividualSensors() {
  const [sensorReadings] = useAtom(counterAtom);
  const [loaded] = useAtom(loadedAtom)
 
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pb: 3 }}
      >
        <Typography variant="h3">Individual Sensor Visualization</Typography>
      </Box>
      <Grid container justifyContent="space-evenly" spacing={3}>
        {SensorDetails.map((item, index) => {
          const percent = (sensorReadings[item.slug]?.value / item.settings.max)  * 100
          return(
          <Grid key={item.slug} item>{loaded?
            <SensorCard
              title={item.slug}
              value={sensorReadings[item.slug]?.value}
              percent={percent}
              name={item.name}
              status="Active"
              date={format(parseJSON(sensorReadings[item.slug]?.time), 'pp PPPP')}
              unit={item.settings.unit}
            />:<Skeleton variant="rectangular" width={250} height={258} />}
          </Grid>
        )})}
      </Grid>
    </>
  );
}

export default IndividualSensors;

function SensorCard({
  title,
  value,
  percent,
  date = "12-Jun-2021 12:08 PM",
  name = "Carbon DiOxide",
  status = "Active",
  unit = "ppm",
}): React.ReactElement {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ minWidth: "250px" }}>
      <CardHeader title={title} titleTypographyProps={{ variant: "h3" }} />
      <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        <CircularStatic value={value} percent={percent} unit={unit} />
      </CardContent>

      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ mt: "-40px" }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>{`Date: ${date}`}</Typography>
          <Typography>{`Pollutant: ${name}`}</Typography>
          <Typography>{`Status: ${status}`}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

const ExpandMore = experimentalStyled(
  (props: { expand: boolean; onClick: () => void }) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  }
)(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
