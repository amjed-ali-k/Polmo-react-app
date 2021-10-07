import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'

function NodeMap() {
    return (
        <Card sx={{ height: '100%' }}>
      <CardMedia
        component="img"
        height="85%"
        image="/static/images/kannur-map.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Node Location
        </Typography>
    
      </CardContent>

    </Card>
    )
}

export default NodeMap
