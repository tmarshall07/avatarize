import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/pro-duotone-svg-icons';
import { faCheck } from '@fortawesome/pro-regular-svg-icons';
import PropTypes from 'prop-types';
import { v1 as uuid } from 'uuid';
import { ChromePicker, CirclePicker } from 'react-color';
import { lighten, darken } from 'polished';
import { AnimatePresence, motion } from 'framer-motion';

import Box from '../ui/Box';
import Flex from '../ui/Flex';
import colors from '../../helpers/colors';

const ColorPreview = styled.div`
  width: 35px;
  height: 35px;
  margin: 0.5rem;

  border-radius: 100%;

  cursor: pointer;

  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  transition: 0.1s ease-in-out all;

  ${(props) => props.active && css`
    transform: scale(1.1);
  `}

  ${(props) => props.color && css`
    background-color: ${props.color};
  `}
`;

const CustomColor = styled(ColorPreview)`
  color: ${(props) => (props.color ? 'white' : colors.grey)};
  background-color: ${(props) => (props.color ? props.color : lighten(0.5, colors.grey))};

  :hover, :focus {
    background-color: ${(props) => (props.color ? darken(0.05, props.color) : lighten(0.45, colors.grey))};
  }
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
    colors,
  } = props;

  const [customColor, setCustomColor] = useState('');

  const handleSelectColor = (colorObj) => {
    onChange(colorObj);
  };

  const handleSetCustomColor = (pickerObj) => {
    setCustomColor(pickerObj.hex);

    onChange({
      color: pickerObj.hex,
      id: uuid(),
    });
  };

  return (
    <Box>
      <Flex flexWrap="wrap" maxWidth="36rem">
        {colors.map((c) => (
          <ColorPreview active={color.id === c.id} onClick={() => handleSelectColor(c)} color={c.color}>
            <AnimatePresence>
              {color.id === c.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </motion.div>
              )}
            </AnimatePresence>
          </ColorPreview>
        ))}
        <Box position="relative">
          <CustomColor active={!colors.find((c) => color.id === c.id)} color={customColor} onClick={() => setIsVisible(true)}>
            <FontAwesomeIcon icon={faPalette} />
          </CustomColor>
          {isVisible && (
            <ColorPickerPopover>
              <BackgroundCover onClick={() => setIsVisible(false)} />
              <ChromePicker
                color={color}
                onChange={(c) => handleSetCustomColor(c)}
              />
            </ColorPickerPopover>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

ColorPicker.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
};

ColorPicker.defaultProps = {
  colors: [],
};

export default ColorPicker;
