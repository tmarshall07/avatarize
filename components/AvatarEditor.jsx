import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';
import styled, { css } from 'styled-components';
import SvgCanvas from './SvgCanvas';
import Box from './ui/Box';
import Flex from './ui/Flex';
import { faces, expressions } from './data';

const ColorPreview = styled.div`
  width: 35px;
  height: 35px;

  border-radius: 3px;

  ${(props) => props.color && css`
    background-color: ${props.color};
  `}
`;

const ElementButton = styled.div`
  padding: 10px;
  border-radius: 3px;

  margin: 10px;

  cursor: pointer;

  :hover, :focus {
    background-color: rgba(0,0,0,0.05);
  }

  ${(props) => props.isActive && css`
    border: 1px solid rgba(0,0,0,0.2);
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
            {element.id}
          </ElementButton>
        ))}
      </Flex>
    </Box>
  )
}

function AvatarEditor(props) {
  const [currentFace, setCurrentFace] = useState(faces[0]);
  const [currentExpression, setCurrentExpression] = useState(expressions[0]);
  const [hairColorPickerVisible, setHairColorPickerVisible] = useState(false);

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

      <h2>
        Colors
      </h2>
      <h4>Hair</h4>
      <Box>
        <ColorPreview onClick={() => setHairColorPickerVisible(true)} color={colors.hair} />
        {hairColorPickerVisible && (
          <ColorPickerPopover>
            <BackgroundCover onClick={() => setHairColorPickerVisible(false)} />
            <ChromePicker
              color={colors.hair}
              onChange={(color) => handleColorChange('hair', color)}
            />
          </ColorPickerPopover>
        )}
      </Box>
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
