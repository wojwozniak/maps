import { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { Data, CantonCode } from '../types';

const Map: React.FC = () => {
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

    var blues = d3.scaleOrdinal(d3.schemeBlues[9]);

    const ready = (topo: any, cantonCodes: CantonCode[], data: Data) => {
      svg.append('g')
        .selectAll('path')
        .data(topo.features)
        .enter()
        .append('path')
        // @ts-ignore
        .attr('d', pathGenerator)
        .style('fill', (d: any) => {
          let cantonId = d.properties.id.toString();
          if(cantonId.length === 1) { cantonId = '0' + cantonId; }
          const cantonCode = cantonCodes.filter((canton) => canton.id === cantonId)[0].code;
          const cantonData = data.data.filter((item) => item.code === cantonCode);
          let cantonValue = cantonData[0].value;
          cantonValue = parseInt(cantonValue);
          console.log(cantonValue);
          if (cantonValue < 300000) {
            return "red";
          } else return "green";
        })
        .style('stroke', 'black')
        .style('stroke-width', .2);
    };
    /* ### End of actual map code ### */

    // ### Fetching data ###
    async function waitForPromisesAndRunD3() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/wojwozniak/maps/main/public/cantons.json');
        const jsonCantons = await response.json();
        const response2 = await fetch('https://raw.githubusercontent.com/wojwozniak/maps/main/public/statistics/2015-population.json');
        const jsonPopulation = await response2.json();

        d3.json('https://raw.githubusercontent.com/wojwozniak/maps/main/public/ch-cantons.geojson')
          .then((topo) => {
            ready(topo, jsonCantons, jsonPopulation);
          })
          .catch((error) => {
            throw error;
          });
      } catch (error) {
        console.error('Error while waiting for promises:', error);
      }
    }
    waitForPromisesAndRunD3();
    // ### End of fetching data ###
    

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