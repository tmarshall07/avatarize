import React from 'react';
import PropTypes from 'prop-types';

function Child(props) {
  const {
    element,
    colors,
  } = props;

  // Pull color key
  const id = element.attributes?.['serif:id'];
  let colorKey = null;
  if (id && id.split('-')[0] === 'color') {
    colorKey = id.split('-')[1];
  }

  return (
    <>
      {element.name === 'g' && (
        <g>
          {element.children?.map((child, i) => (
            <Child
              key={i}
              element={child}
              colors={colors}
            />
          ))}
        </g>
      )}
      {element.name === 'path' && (
        <path
          d={element.attributes?.d}
          style={{
            fill: colors[colorKey]?.color || element.attributes?.style?.fill || null,
          }}
        />
      )}
    </>
  );
}

Child.propTypes = {
  colors: PropTypes.shape({}),
  element: PropTypes.shape({
    name: PropTypes.string,
    attributes: PropTypes.shape({}),
  }),
};

Child.defaultProps = {
  colors: {},
  element: {},
};

export default Child;
