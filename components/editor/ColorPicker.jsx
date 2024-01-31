import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/pro-duotone-svg-icons';
import { faCheck } from '@fortawesome/pro-regular-svg-icons';
import { v1 as uuid } from 'uuid';
import { ChromePicker } from 'react-color';
import { AnimatePresence, motion } from 'framer-motion';

import { Box, Flex } from '@tannerjs/tailwind-theme-rizz/src/index';

const colorClasses = `h-[35px] w-[35px] m-[0.5rem] cursor-pointer rounded-full color-white flex justify-center items-center text-[2rem] transition-all`;

function ColorPicker(props) {
  const { isVisible, setIsVisible, color, onChange, avatarColors = [] } = props;

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
      <Flex cn="flex-wrap max-w-[36rem]">
        {avatarColors.map((c) => (
          <Box
            cn={`${colorClasses} ${color.id === c.id ? 'transform scale-110' : ''}`}
            key={c.id}
            style={{ backgroundColor: c.color }}
            onClick={() => handleSelectColor(c)}
          >
            <AnimatePresence>
              {color.id === c.id && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <Box cn="text-white text-sm">
                    <FontAwesomeIcon icon={faCheck} />
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        ))}
        <Box cn="relative">
          <Box cn={`${colorClasses}`} style={{ color: customColor }} onClick={() => setIsVisible(true)}>
            <FontAwesomeIcon icon={faPalette} />
          </Box>
          {isVisible && (
            <Box cn="absolute z-1">
              <Box cn="fixed top-0 right-0 bottom-0 left-0" onClick={() => setIsVisible(false)} />
              <ChromePicker color={color} onChange={(c) => handleSetCustomColor(c)} />
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

export default ColorPicker;
