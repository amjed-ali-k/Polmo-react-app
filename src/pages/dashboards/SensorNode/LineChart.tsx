import {
  Card,
  Box,
  Typography,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import LineChartComponent from "./LineChartComponent";

function LineChart() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pb: 3 }}
      >
        <Typography variant="h3">Node History</Typography>
      </Box>
      <Card >
        <CardHeader
          title="Live Values"
          titleTypographyProps={{ variant: "h3" }}
        />
        <CardContent>
          <LineChartComponent />
        </CardContent>
      </Card>
    </>
  );
}

export default LineChart;
