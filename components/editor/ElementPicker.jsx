import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Box from '../ui/Box';
import Flex from '../ui/Flex';
import Child from '../features/Child';

const ElementButton = styled.div`
  padding: 10px;
  border-radius: 3px;

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

function ElementPicker(props) {
  const {
    elements,
    currentElement,
    title,
    handleChange,
  } = props;

  return (
    <Box>
      <h3>{title}</h3>
      <Flex>
        {elements.map((element) => (
          <ElementButton
            key={element.id}
            onClick={() => handleChange(element)}
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
      </Flex>
    </Box>
  );
}

ElementPicker.propTypes = {

};

export default ElementPicker;
