import React from "react";
import PropTypes from "prop-types";
import { useAnimation } from "framer-motion";
import Child from "./features/Child";

function SvgCanvas(props) {
  const { head, face, facialhair, glasses, svgColors } = props;

  console.log(svgColors);

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
      <Child element={head} colors={svgColors} />
      {/* </motion.g> */}
      {/* <motion.g
        initial={false}
        animate={controls}
      > */}
      <Child element={face} colors={svgColors} />
      {/* </motion.g> */}
      <Child element={facialhair} colors={svgColors} />
      <Child element={glasses} colors={svgColors} />
    </svg>
  );
}

SvgCanvas.propTypes = {
  svgColors: PropTypes.shape({
    hair: PropTypes.string,
    skin: PropTypes.string,
  }),
};

SvgCanvas.defaultProps = {
  svgColors: {
    hair: "#d08b5b",
    skin: "#e8e1e1",
  },
};

export default SvgCanvas;
