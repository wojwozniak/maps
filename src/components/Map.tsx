import { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const Map:React.FC = () => {
  const svgRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [svgWidth, setSvgWidth] = useState(viewportWidth * 0.6);
  const [svgHeight, setSvgHeight] = useState((viewportWidth * 0.6 * 8) / 13);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.attr('viewBox', `0 0 ${svgWidth} ${svgHeight}`);

    const projection = d3.geoMercator()
      .scale(10000)
      .center([8.2310, 46.8182])
      .translate([svgWidth / 2, svgHeight / 2]);

    const pathGenerator = d3.geoPath().projection(projection);

    const ready = (topo:any) => {
      svg.append('g')
        .selectAll('path')
        .data(topo.features)
        .enter()
        .append('path')
        // @ts-ignore
        .attr('d', pathGenerator)
        .style('fill', 'green');
    };

    d3.json('https://raw.githubusercontent.com/mikpan/ch-maps/master/geo/ch-districts.geojson')
        .then(ready)
        .catch((error) => {
            throw error;
        });


    // ### Resize ###
    function handleResize() {
        const newViewportWidth = window.innerWidth;
        setViewportWidth(newViewportWidth);
        setSvgWidth(newViewportWidth * 0.8);
        setSvgHeight((newViewportWidth * 0.8 * 8) / 13);
    }

    window.addEventListener('resize', handleResize);

    return () => {
    window.removeEventListener('resize', handleResize);
    };
    // ### End of Resize ###

  }, []);

  return (
    <svg ref={svgRef} id="my_dataviz" />
  );
}

export default Map;