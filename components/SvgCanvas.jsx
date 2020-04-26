import React from 'react';
import PropTypes from 'prop-types';
import { faces, expressions } from './data';
import Child from './features/Child';

function SvgCanvas(props) {
  const {
    face,
    expression,
    colors,
  } = props;

  return (
    <svg width="100%" height="100%" viewBox="0 0 1535 1535">
      <Child element={face} colors={colors} />
      <Child element={expression} colors={colors} />
    </svg>
  );
}

SvgCanvas.propTypes = {
  colors: PropTypes.shape({
    hair: PropTypes.string,
    skin: PropTypes.string,
  }),
};

SvgCanvas.defaultProps = {
  colors: {
    hair: '#d08b5b',
    skin: '#e8e1e1',
  },
};

export default SvgCanvas;
