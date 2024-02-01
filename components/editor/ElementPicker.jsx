import React, { useRef, useState, useEffect } from 'react';

import Child from '../features/Child';
import { Box, H3 } from '@tannerjs/tailwind-theme-rizz/src/index';

function ChildPreview(props) {
  const { element } = props;

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
  const { elements, currentElement = {}, title, handleChange, isRequired = true } = props;

  const handleSelectElement = (element) => {
    if (!isRequired && currentElement.id === element.id) {
      handleChange();
    } else {
      handleChange(element);
    }
  };

  return (
    <Box>
      <H3 cn="mb-4">{title}</H3>
      <Box cn="max-h-[210px] overflow-x-auto rounded-md whitespace-nowrap">
        {elements.map((element) => (
          <Box
            cn={`p-3 rounded-md inline-block m-3 border-2 border-transparent cursor-pointer hover:bg-primary-300 active:bg-primary-400 ${currentElement.id === element.id ? 'border-2 border-primary-500 bg-primary-400 hover:bg-primary-400' : ''}`}
            key={element.id}
            onClick={() => handleSelectElement(element)}
          >
            <Box cn="max-w-[100px]">
              <ChildPreview element={element} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ElementPicker;
