import React from 'react'
import { Alert, Box, Collapse, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

function InfoAlert() {
  const [open, setOpen] = React.useState(true);
  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
        severity="warning"
        variant="outlined"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          This site currently hosts the work in progress on the <strong>Polmo UI</strong>. It's still an alpha so expecting breakages!
        </Alert>
      </Collapse>
      {/* <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button> */}
    </Box>
  );
}

export default InfoAlert
