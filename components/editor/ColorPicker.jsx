import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { ChromePicker } from 'react-color';
import Box from '../ui/Box';

const ColorPreview = styled.div`
  width: 35px;
  height: 35px;

  border-radius: 3px;

  cursor: pointer;

  ${(props) => props.color && css`
    background-color: ${props.color};
  `}
`;

const ColorPickerPopover = styled.div`
  position: absolute;
  z-index: 1;
`;

const BackgroundCover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

function ColorPicker(props) {
  const {
    isVisible,
    setIsVisible,
    color,
    onChange,
  } = props;

  return (
    <Box>
      <ColorPreview onClick={() => setIsVisible(true)} color={color} />
      {isVisible && (
        <ColorPickerPopover>
          <BackgroundCover onClick={() => setIsVisible(false)} />
          <ChromePicker
            color={color}
            onChange={onChange}
          />
        </ColorPickerPopover>
      )}
    </Box>
  );
}

ColorPicker.propTypes = {

};

export default ColorPicker;
