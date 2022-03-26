import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Typography,
    CircularProgress
  } from '@material-ui/core';
  

function CircularProgressWithLabel({value,percent, unit='/ 100', ...rest}) {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    if(progress !== Math.round(percent) ){
    setTimeout(() => {
      setProgress((prevProgress) => (progress < Math.round(percent) ? prevProgress + 1 : prevProgress - 1));
    }, 10);
  }
    return () => {
    
    };
  }, [progress, percent]);

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" sx={{ width: '100%', height: '100%', minWidth: '150px', minHeight: '150px', justifyContent: 'center', display: 'flex' }} {...rest} value={progress} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography variant="h1" component="div" color="text.secondary">
          {`${Number(value).toFixed(2)}`}
        </Typography>
        <Typography variant='caption' sx={{ mt:'-8px'}}>
        {`${unit}`}
        </Typography>
        
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
  unit: PropTypes.string
};

export default CircularProgressWithLabel;