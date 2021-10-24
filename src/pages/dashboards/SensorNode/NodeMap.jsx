import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "mapbox-gl/dist/mapbox-gl.css";
// const mapboxgl = React.lazy<mapboxgl>(() => import('mapbox-gl'))
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

function NodeMap({longitude = 75.379747, lattitude = 11.986639}) {
  const mapContainer = useRef(null);  
  const map = useRef(null);
  const mapMarker = useRef(null)
  const [lng, setLng] = useState(longitude);
  const [lat, setLat] = useState(lattitude);
  const [zoom, setZoom] = useState(15);

  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
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
      <CardContent>
      <div>
        <div ref={mapContainer} style={{ height: "350px" }} />
      </div>

        <Typography gutterBottom variant="h5" component="div">
          Urban Node Location
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NodeMap;
