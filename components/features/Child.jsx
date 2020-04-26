import React from 'react';
import PropTypes from 'prop-types';

function Child(props) {
  const {
    element,
    colors,
  } = props;

  return (
    <>
      {element.type === 'g' && (
        <g>
          {element.children?.map((child) => (
            <Child
              key={child.id}
              element={child}
              colors={colors}
            />
          ))}
        </g>
      )}
      {element.type === 'path' && (
        <path
          d={element.d}
          style={{
            fill: colors[element.colorKey] || element.style?.fill || null,
          }}
        />
      )}
    </>
  );
}

Child.propTypes = {
  colors: PropTypes.shape({}),
};

Child.defaultProps = {
  colors: {},
};

export default Child;
