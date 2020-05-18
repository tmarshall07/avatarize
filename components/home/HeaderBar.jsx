import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../ui/Box';
import { H1, A, P } from '../../helpers/typography';

const Heading = styled(H1)`
  font-size: 13rem;
`;

function HeaderBar(props) {
  return (
    <Box margin="3rem 0 8rem 0">
      <Heading textAlign="center">Avatizer</Heading>
      <P textAlign="center" fontSize={18}>
        An avatar generator featuring&nbsp;
        <A href="https://www.instagram.com/pablostanley/" target="_blank" rel="noopener noreferrer">
          Pablo Stanley&apos;s
        </A>
            &nbsp;beautiful&nbsp;
        <A href="https://openpeeps.com" target="_blank" rel="noopener noreferrer">
          Open Peeps library
        </A>
        .
      </P>
    </Box>
  );
}

HeaderBar.propTypes = {

};

export default HeaderBar;
