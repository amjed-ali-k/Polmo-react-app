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
          This page is the real-time deployment of an active working branch in the repository. So there will be breakages!
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
