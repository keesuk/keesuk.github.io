import React from 'react';
import PropTypes from 'prop-types';
import BaseControl from '../components/base-control';

import type {BaseControlProps} from '../components/base-control';

const propTypes = Object.assign({}, BaseControl.propTypes, {
  redraw: PropTypes.func.isRequired,
  style: PropTypes.object
});

const defaultProps = {
  captureScroll: false,
  captureDrag: false,
  captureClick: false,
  captureDoubleClick: false
};

export type HTMLOverlayProps = BaseControlProps & {
  redraw: Function,
  style?: Object
};

export default class HTMLOverlay extends BaseControl<HTMLOverlayProps, *, HTMLDivElement> {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  _render() {
    const {viewport, isDragging} = this._context;
    const style = Object.assign(
      {
        position: 'absolute',
        left: 0,
        top: 0,
        width: viewport.width,
        height: viewport.height
      },
      this.props.style
    );

    return (
      <div ref={this._containerRef} style={style}>
        {this.props.redraw({
          width: viewport.width,
          height: viewport.height,
          isDragging,
          project: viewport.project.bind(viewport),
          unproject: viewport.unproject.bind(viewport)
        })}
      </div>
    );
  }
}