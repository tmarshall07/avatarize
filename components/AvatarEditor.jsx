"use client";

import React, { useState } from "react";
import styled, { css } from "styled-components";

import { lighten } from "polished";
import SvgCanvas from "./SvgCanvas";
import Box from "./ui/Box";
import Button from "./ui/Button";
import Flex from "./ui/Flex";
// import { faces, expressions } from './data';
import glasses from "../data/glasses";
import heads from "../data/head";
import faces from "../data/face";
import facialhair from "../data/facialhair";
import ElementPicker from "./editor/ElementPicker";
import ColorPicker from "./editor/ColorPicker";
import colors, { skinTones, hairTones } from "../helpers/colors";

const randomBetween = (start, end) => Math.floor(Math.random() * end) + start;
const randomFromArray = (array) => array[randomBetween(0, array.length)];

const ColorPickerContainer = styled(Box)`
  margin-right: 15px;
`;

const SelectionContainer = styled(Box)`
  /* width: 60%; */
  max-height: 600px;
  flex: 1;
  overflow: auto;

  background-color: ${lighten(0.58, colors.grey)};
  border-radius: 5px;
  padding: 3rem;
`;

const Wrapper = styled(Flex)`
  max-width: 1200px;

  justify-content: center;
  align-items: center;
`;

const AvatarContainer = styled(Box)`
  height: 40rem;
  width: 40rem;
  border-radius: 100%;
  background-color: ${(props) => props.bg};
`;

function AvatarEditor(props) {
  const [currentHead, setCurrentHead] = useState(randomFromArray(heads));
  const [currentFace, setCurrentFace] = useState(randomFromArray(faces));
  const [currentFacialHair, setCurrentFacialHair] = useState();
  const [currentGlasses, setCurrentGlasses] = useState();

  const [hairColorPickerVisible, setHairColorPickerVisible] = useState(false);
  const [skinColorPickerVisible, setSkinColorPickerVisible] = useState(false);

  const [svgColors, setSvgColors] = useState({
    hair: randomFromArray(hairTones).color,
    skin: randomFromArray(skinTones).color,
  });

  const handleChangeFacialHair = (f) => {
    setCurrentFacialHair(f);
  };

  const handleChangeFace = (f) => {
    setCurrentFace(f);
  };

  const handleChangeHead = (h) => {
    setCurrentHead(h);
  };

  const handleChangeGlasses = (h) => {
    setCurrentGlasses(h);
  };

  const handleRandomize = () => {
    setCurrentHead(randomFromArray(heads));
    setCurrentFace(randomFromArray(faces));
    // Add empty items to array to make it a 50% chance for facial hair, glasses, etc.
    setCurrentFacialHair(
      randomFromArray([...new Array(facialhair.length), ...facialhair]),
    );
    setCurrentGlasses(
      randomFromArray([...new Array(glasses.length), ...glasses]),
    );

    setSvgColors({
      hair: randomFromArray(hairTones),
      skin: randomFromArray(skinTones),
    });
  };

  const handleColorChange = (key, color) => {
    setSvgColors({
      ...svgColors,
      [key]: color,
    });
  };

  return (
    <Box>
      <Wrapper flexDirection={["column", "row"]}>
        <Box p="3rem">
          <AvatarContainer>
            {/* <AvatarContainer bg={randomFromArray(Object.values(colors))}> */}
            <SvgCanvas
              head={currentHead}
              face={currentFace}
              facialhair={currentFacialHair}
              glasses={currentGlasses}
              svgColors={svgColors}
            />
          </AvatarContainer>
          <Button type="button" onClick={handleRandomize}>
            Randomize
          </Button>
        </Box>

        <SelectionContainer width={["100%", "60%"]}>
          <ElementPicker
            title="Heads"
            currentElement={currentHead}
            elements={heads}
            handleChange={handleChangeHead}
          />
          <Flex justifyContent="space-between">
            <ColorPickerContainer>
              <h3>Hair</h3>
              <ColorPicker
                color={svgColors.hair}
                avatarColors={hairTones}
                onChange={(color) => handleColorChange("hair", color)}
                isVisible={hairColorPickerVisible}
                setIsVisible={setHairColorPickerVisible}
              />
            </ColorPickerContainer>
            <Box>
              <h3>Skin</h3>
              <ColorPicker
                color={svgColors.skin}
                avatarColors={skinTones}
                onChange={(color) => handleColorChange("skin", color)}
                isVisible={skinColorPickerVisible}
                setIsVisible={setSkinColorPickerVisible}
              />
            </Box>
          </Flex>

          <ElementPicker
            title="Face"
            currentElement={currentFace}
            elements={faces}
            handleChange={handleChangeFace}
          />
          <ElementPicker
            title="Facial Hair"
            currentElement={currentFacialHair}
            elements={facialhair}
            handleChange={handleChangeFacialHair}
            isRequired={false}
          />
          <ElementPicker
            title="Glasses"
            currentElement={currentGlasses}
            elements={glasses}
            handleChange={handleChangeGlasses}
            isRequired={false}
          />
        </SelectionContainer>
      </Wrapper>
    </Box>
  );
}

AvatarEditor.propTypes = {};

export default AvatarEditor;
