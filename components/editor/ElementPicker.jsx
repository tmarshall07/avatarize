import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Box from '../ui/Box';
import Flex from '../ui/Flex';
import Child from '../features/Child';
import { H3 } from '../../helpers/typography';

const ElementButton = styled.div`
  padding: 10px;
  border-radius: 3px;
  display: inline-block;

  margin: 10px;

  cursor: pointer;
  border: 1px solid transparent;

  :hover, :focus {
    background-color: rgba(0,0,0,0.05);
  }

  ${(props) => props.isActive && css`
    border: 1px solid rgba(0,0,0,0.2);
    background-color: rgba(0,0,0,0.05);
  `}
`;

const OptionsContainer = styled(Box)`
  max-height: 210px;
  overflow-x: auto;
  border-radius: 3px;
  white-space: nowrap;
`;

function ChildPreview(props) {
  const {
    element,
  } = props;

  const childRef = useRef();
  const [transform, setTransform] = useState('');

  const size = 1535;

  useEffect(() => {
    if (childRef.current) {
      const bbox = childRef.current.getBBox();

      // Scale group to fit into svg
      let scale = 1;
      if (bbox.width / bbox.height > 1) {
        scale = size / bbox.width;
      } else {
        scale = size / bbox.height;
      }

      // Bring to leftmost corner
      let x = -bbox.x;
      // x += ((size / 2) - (bbox.width / 2)) / scale;

      // Bring to topmost corner
      let y = -bbox.y;
      // Center
      // y += ((size / 2) - (bbox.height / 2)) / scale;

      const newTransform = `scale(${scale}) translateX(${x}px) translateY(${y}px)`;
      setTransform(newTransform);
    }
  }, []);

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`}>
      <g ref={childRef} style={{ transform }}>
        <Child element={element} />
      </g>
    </svg>
  );
}

function ElementPicker(props) {
  const {
    elements,
    currentElement,
    title,
    handleChange,
    isRequired,
  } = props;

  const handleSelectElement = (element) => {
    if (!isRequired && currentElement.id === element.id) {
      handleChange();
    } else {
      handleChange(element);
    }
  };

  return (
    <Box>
      <H3 mb={20}>{title}</H3>
      <OptionsContainer>
        {elements.map((element) => (
          <ElementButton
            key={element.id}
            onClick={() => handleSelectElement(element)}
            isActive={currentElement.id === element.id}
          >
            <Box maxWidth={100}>
              <ChildPreview
                element={element}
              />
            </Box>
          </ElementButton>
        ))}
      </OptionsContainer>
    </Box>
  );
}

ElementPicker.propTypes = {
  isRequired: PropTypes.bool,
  currentElement: PropTypes.shape({}),
};

ElementPicker.defaultProps = {
  isRequired: true,
  currentElement: {},
};

export default ElementPicker;
