import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { faces, expressions } from './data';
import Child from './features/Child';


function SvgCanvas(props) {
  const {
    head,
    face,
    facialhair,
    glasses,
    colors,
  } = props;

  const controls = useAnimation();

  // useEffect(() => {
  //   controls.start({
  //     scale: [0.85, 1.1, 1],
  //     transition: {duration: 0.2 }
  //   });
  // }, [head]);

  return (
    <svg width="100%" height="100%" viewBox="0 0 1535 1535">
      {/* <motion.g
        initial={false}
        animate={controls}
      > */}
        <Child element={head} colors={colors} />
      {/* </motion.g> */}
      {/* <motion.g
        initial={false}
        animate={controls}
      > */}
        <Child element={face} colors={colors} />
      {/* </motion.g> */}
      <Child element={facialhair} colors={colors} />
      <Child element={glasses} colors={colors} />
    </svg>
  );
}

SvgCanvas.propTypes = {
  colors: PropTypes.shape({
    hair: PropTypes.shape({
      id: PropTypes.string,
      color: PropTypes.string,
    }),
    skin: PropTypes.shape({
      id: PropTypes.string,
      color: PropTypes.string,
    }),
  }),
};

SvgCanvas.defaultProps = {
  colors: {
    hair: '#d08b5b',
    skin: '#e8e1e1',
  },
};

export default SvgCanvas;
