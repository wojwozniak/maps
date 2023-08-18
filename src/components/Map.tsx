import { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const Map:React.FC = () => {
  const svgRef = useRef(null);

  /* ### Scaling ### */
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [svgWidth, setSvgWidth] = useState(viewportWidth * .4);
  const [svgHeight, setSvgHeight] = useState((viewportWidth * .4 * 2) / 3);
  const scaleFactor = 11;
  const [scale, updateScale] = useState(svgWidth * scaleFactor);
  /* ### End of scaling ### */

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.attr('viewBox', `0 0 ${svgWidth} ${svgHeight}`);
    svg.style('background-color', '#FEFFFE');


    /* ### Actual map code ### */
    const projection = d3.geoMercator()
      .scale(scale)
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
        .style('fill', 'green')
        .style('stroke', 'black')
        .style('stroke-width', .2);
    };

    d3.json('https://raw.githubusercontent.com/wojwozniak/maps/main/public/ch-cantons.geojson')
      .then(ready)
      .catch((error) => {
        throw error;
    });
    /* ### End of actual map code ### */



    // ### Resize ###
    function handleResize() {
        const newViewportWidth = window.innerWidth;
        setViewportWidth(newViewportWidth);
        setSvgWidth(newViewportWidth * 0.8);
        const newSvgHeight = (newViewportWidth * 0.8 * 8) / 13;
        setSvgHeight(newSvgHeight);
        updateScale(newSvgHeight * scaleFactor);
    }

    window.addEventListener('resize', handleResize);

    return () => {
    window.removeEventListener('resize', handleResize);
    };
    // ### End of Resize ###

  }, []);

  return (
    <svg ref={svgRef} className='svg' />
  );
}

export default Map;