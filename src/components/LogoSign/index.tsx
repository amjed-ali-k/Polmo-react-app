import {  Tooltip } from '@material-ui/core';

function Logo() {


  return (
    <Tooltip title="Polmo - The Advanced Air Polution Monitoring Network" arrow>
      
        <img src='/logo.png' alt='logo' style={{ maxWidth: '170px' }} />
     
    </Tooltip>
  );
}

export default Logo;
