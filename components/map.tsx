import React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
  const [map, setMap] = React.useState<mapboxgl.Map>();
  const mapNode = React.useRef(null);
  React.useEffect(() => {
    const node = mapNode.current;
    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: "mapbox://styles/renshimosawa/cldfhgqx5000001qo45ri2a7f",
      center: [141.4897, 40.513103],
      zoom: 16,
    });

    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return (
    <>
      <div ref={mapNode} style={{ width: "100vw", height: "100svh" }}></div>
    </>
  );
};

export default Map;
