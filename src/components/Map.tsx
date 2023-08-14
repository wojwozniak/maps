import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function Map() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = +svg.attr('width');
    const height = +svg.attr('height');

    const projection = d3.geoMercator()
      .scale(12000)
      .center([8.2310, 46.8182])
      .translate([width / 2, height / 2]);

    const pathGenerator = d3.geoPath().projection(projection);

    const ready = (topo:any) => {
      svg.append('g')
        .selectAll('path')
        .data(topo.features)
        .enter()
        .append('path')
        // Some weird error here, idk how to fix it
        // @ts-ignore
        .attr('d', pathGenerator)
        .style('fill', 'blue');
    };

    d3.json('https://raw.githubusercontent.com/mikpan/ch-maps/master/geo/ch-districts.geojson')
      .then(ready)
      .catch((error) => {
        throw error;
      });

  }, []);

  return (
    <svg ref={svgRef} id="my_dataviz" width="1300" height="800" />
  );
}

export default Map;