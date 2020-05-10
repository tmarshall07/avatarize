const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const { parse } = require('svgson');
const uuid = require('uuid').v1;

const svg = fs.readFileSync(path.join(__dirname, '../svgs/avatar.svg'), 'utf8');

const writeDataFile = (svgson, id) => {
  // Get heads by id
  const items = svgson.children.filter((node) => node.attributes.id === id);

  // Create js file
  const js = prettier.format(`
    const data = ${JSON.stringify(items[0].children)};
    export default data;
  `, {
    singleQuote: true,
    parser: 'babel',
  });

  fs.writeFileSync(path.join(__dirname, `../data/${id.split('-')[1]}.js`), js);
};

const parseSvg = async (svgString) => {
  const svgson = await parse(svgString, {
    transformNode: (node) => {
      // Transform style attribute to object if it exists
      let style = {};
      if (node.attributes.style) {
        style = node.attributes.style.split(';').reduce((prev, curr) => ({
          ...prev,
          ...(curr.split(':').length === 2 ? { [curr.split(':')[0]]: curr.split(':')[1] } : {}),
        }), {});
      }
      return {
        ...node,
        id: uuid(),
        attributes: {
          ...node.attributes,
          style,
        },
      };
    },
  });

  writeDataFile(svgson, 'feature-head');
  writeDataFile(svgson, 'feature-face');
  writeDataFile(svgson, 'feature-glasses');
  writeDataFile(svgson, 'feature-facialhair');
};

parseSvg(svg);
