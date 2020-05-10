import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Box from '../ui/Box';
import Flex from '../ui/Flex';
import Child from '../features/Child';

const ElementButton = styled.div`
  padding: 10px;
  border-radius: 3px;
  display: inline-block;
  background-color: white;

  margin: 10px;

  cursor: pointer;
  border: 1px solid transparent;

  :hover, :focus {
    background-color: rgba(0,0,0,0.05);
  }

  ${(props) => props.isActive && css`
    border: 1px solid rgba(0,0,0,0.2);
  `}
`;

const OptionsContainer = styled(Box)`
  max-height: 210px;
  overflow-x: auto;
  background: #fbfbfb;
  border-radius: 3px;
  white-space: nowrap;
`;

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
  }

  return (
    <Box>
      <h3>{title}</h3>
      <OptionsContainer>
        {elements.map((element) => (
          <ElementButton
            key={element.id}
            onClick={() => handleSelectElement(element)}
            isActive={currentElement.id === element.id}
          >
            {/* {element.id} */}
            <Box maxWidth={100}>
              <svg width="100%" height="100%" viewBox="0 0 1535 1535">
                <Child element={element} />
              </svg>
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
