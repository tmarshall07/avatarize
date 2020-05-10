import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import colors from '../../helpers/colors';
import { lighten, darken } from 'polished';

const Container = styled.button`
  border-radius: 3px;
  padding: 1em 1.5em;
  font-size: 1.6rem;
  color: ${darken(0.1, colors.grey)};

  cursor: pointer;

  outline: none;
  box-shadow: none;

  border: 1px solid ${lighten(0.3, colors.grey)};

  :hover, :focus {
    background-color: ${lighten(0.59, colors.grey)};
  }
  
  :active {
    background-color: ${lighten(0.54, colors.grey)};
  }
`;

function Button(props) {
  const {
    children,
  } = props;

  return (
    <Container {...props}>
      {children}
    </Container>
  )
}

Button.propTypes = {

}

export default Button

