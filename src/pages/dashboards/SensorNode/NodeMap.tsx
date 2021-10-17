import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "mapbox-gl/dist/mapbox-gl.css";
// const mapboxgl = React.lazy<mapboxgl>(() => import('mapbox-gl'))
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const marker = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          11.986639,
          11.886905568513194
        ]
      }
    }
  ]
}

function NodeMap({longitude = 75.379747, lattitude = 11.986639}) {
  const mapContainer = useRef(null);  
  const map = useRef(null);
  const mapMarker = useRef(null)
  const [lng, setLng] = useState(longitude);
  const [lat, setLat] = useState(lattitude);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/amjed-ali-k/ckufhabna7t2e17mpn2pztusk",
      center: [lng, lat],
      zoom: zoom,
    });
    mapMarker.current = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map.current)
  });
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    
  });
  return (
    <Card sx={{ height: "100%" }}>
      {/* <CardMedia
        component="img"
        height="85%"
        image="/static/images/kannur-map.png"
        alt="green iguana"
      /> */}
      <div>
        <div ref={mapContainer} style={{ height: "350px" }} />
      </div>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Urban Node Location
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NodeMap;
