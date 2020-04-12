import React from 'react';
import MapGL, { SVGOverlay } from 'react-map-gl';
import { DeckGL, ScatterplotLayer, GeoJsonLayer, ArcLayer } from 'deck.gl';
import { Spring } from 'react-spring/renderprops';
import Goo from './goodies/Goo';
import { easeBackOut, pairs, shuffle } from 'd3';
import { lineString } from '@turf/helpers';

import ArcBrushingLayer from './goodies/ArcBrushingLayer';

function SvgOverlayExample({ libraries, radius }) {
    const redraw = ({ project }) => {
      return (
        <g>
          <Goo>
            {libraries.map(lib => {
              const [x, y] = project(lib.position);
              return (
                <circle key={lib.id} cx={x} cy={y} r={radius} fill="tomato" />
              );
            })}
          </Goo>
        </g>
      );
    };
    return <SVGOverlay redraw={redraw} />;
  }

export default function Map({
    width,
    height,
    viewState,
    onViewStateChange
}) {
    
    const layers = [
        new ScatterplotLayer({
            id: 'scatterplot-layer',
            data: libraries,
            getRadius: 500 * radius,
            radiusMaxPixels: 15,
            getFillColor: [255, 99, 71],
        }),
    ];
    
    return (
        <MapGL
            width={width}
            height={height}
            viewState={viewState}
            onViewStateChange={onViewStateChange}
            mapStyle="mapbox://styles/keesukee/ck8qzf8td0par1ipce2409uf0"
        >
            <DeckGL viewState={viewState} layers={Layers} />
        </MapGL>
    );
}