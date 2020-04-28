import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';
import styled, { css } from 'styled-components';
import SvgCanvas from './SvgCanvas';
import Box from './ui/Box';
import Flex from './ui/Flex';
import { faces, expressions } from './data';
import ElementPicker from './editor/ElementPicker';
import ColorPicker from './editor/ColorPicker';

const ColorPickerContainer = styled(Box)`
  margin-right: 15px;  
`;

function AvatarEditor(props) {
  const [currentFace, setCurrentFace] = useState(faces[0]);
  const [currentExpression, setCurrentExpression] = useState(expressions[0]);
  
  const [hairColorPickerVisible, setHairColorPickerVisible] = useState(false);
  const [skinColorPickerVisible, setSkinColorPickerVisible] = useState(false);

  const [colors, setColors] = useState({
    hair: '#e8e1e1',
    skin: '#d08b5b',
  });

  const handleChangeExpression = (e) => {
    setCurrentExpression(e);
  };

  const handleChangeFace = (f) => {
    setCurrentFace(f);
  };

  const handleColorChange = (key, color) => {
    setColors({
      ...colors,
      [key]: color.hex,
    });
  };

  return (
    <Box width="100%" height="100%">
      <SvgCanvas
        face={currentFace}
        expression={currentExpression}
        colors={colors}
      />

      <Flex>
        <ColorPickerContainer>
          <h3>Hair</h3>
          <ColorPicker
            color={colors.hair}
            onChange={(color) => handleColorChange('hair', color)}
            isVisible={hairColorPickerVisible}
            setIsVisible={setHairColorPickerVisible}
          />
        </ColorPickerContainer>
        <Box>
          <h3>Skin</h3>
          <ColorPicker
            color={colors.skin}
            onChange={(color) => handleColorChange('skin', color)}
            isVisible={skinColorPickerVisible}
            setIsVisible={setSkinColorPickerVisible}
          />
        </Box>
      </Flex>
    
      <ElementPicker
        title="Faces"
        currentElement={currentFace}
        elements={faces}
        handleChange={handleChangeFace}
      />
      <ElementPicker
        title="Expression"
        currentElement={currentExpression}
        elements={expressions}
        handleChange={handleChangeExpression}
      />
    </Box>
  );
}

AvatarEditor.propTypes = {

};

export default AvatarEditor;
