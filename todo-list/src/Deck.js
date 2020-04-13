import DeckGL from 'deck.gl';
import {GeoJsonLayer} from './data/seoul.geojson';

const App = ({data, viewport}) => {
    const {data, viewport} = this.props;
  
    /**
     * Data format:
     * Valid GeoJSON object
     */
    const layer = new GeoJsonLayer({
      id: 'geojson-layer',
      data,
      pickable: true,
      stroked: false,
      filled: true,
      extruded: true,
      lineWidthScale: 20,
      lineWidthMinPixels: 2,
      getFillColor: [160, 160, 180, 200],
      getLineColor: d => colorToRGBArray(d.properties.color),
      getRadius: 100,
      getLineWidth: 1,
      getElevation: 30,
      onHover: ({object, x, y}) => {
        const tooltip = object.properties.name || object.properties.station;
      }
    });
  
    return (<DeckGL {...viewport} layers={[layer]} />);
  };