'use client';

import React, { useState } from 'react';
import SvgCanvas from './SvgCanvas';
import glasses from '../data/glasses';
import heads from '../data/head';
import faces from '../data/face';
import facialhair from '../data/facialhair';
import ElementPicker from './editor/ElementPicker';
import ColorPicker from './editor/ColorPicker';
import { skinTones, hairTones } from '../helpers/colors';

import { Box, Button, Flex, H3 } from '@tannerjs/tailwind-theme-rizz/src/index';

const randomBetween = (start, end) => Math.floor(Math.random() * end) + start;
const randomFromArray = (array) => array[randomBetween(0, array.length)];

function AvatarEditor() {
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
    setCurrentFacialHair(randomFromArray([...new Array(facialhair.length), ...facialhair]));
    setCurrentGlasses(randomFromArray([...new Array(glasses.length), ...glasses]));

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
    <Box cn="bg-primary-200 sm:p-6 p-3">
      <Box cn="flex max-w-[1200px] m-auto justify-center items-center sm:flex-row flex-col gap-4 sm:h-[600px]">
        <Box cn="flex flex-col items-center h-full">
          <Box cn="p-3 h-full">
            <Box cn="h-full rounded-full bg-primary-100">
              <SvgCanvas
                head={currentHead}
                face={currentFace}
                facialhair={currentFacialHair}
                glasses={currentGlasses}
                svgColors={svgColors}
              />
            </Box>
          </Box>
          <Button cn="text-xl font-paragraph" color="primary" onClick={handleRandomize}>
            Random Peep
          </Button>
        </Box>

        <Box cn="flex-1 overflow-auto max-h-[600px] bg-primary-300 p-3 sm:w-[60%] w-full rounded-xl flex flex-col gap-3">
          <ElementPicker title="Heads" currentElement={currentHead} elements={heads} handleChange={handleChangeHead} />
          <Flex cn="justify-between">
            <Box cn="mr-3 flex flex-col gap-2">
              <H3>Hair</H3>
              <ColorPicker
                color={svgColors.hair}
                avatarColors={hairTones}
                onChange={(color) => handleColorChange('hair', color)}
                isVisible={hairColorPickerVisible}
                setIsVisible={setHairColorPickerVisible}
              />
            </Box>
            <Box>
              <H3>Skin</H3>
              <ColorPicker
                color={svgColors.skin}
                avatarColors={skinTones}
                onChange={(color) => handleColorChange('skin', color)}
                isVisible={skinColorPickerVisible}
                setIsVisible={setSkinColorPickerVisible}
              />
            </Box>
          </Flex>

          <ElementPicker title="Face" currentElement={currentFace} elements={faces} handleChange={handleChangeFace} />
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
        </Box>
      </Box>
    </Box>
  );
}

AvatarEditor.propTypes = {};

export default AvatarEditor;
