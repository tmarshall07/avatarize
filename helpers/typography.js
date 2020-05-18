import styled, { css } from 'styled-components';
import { lighten, darken, transparentize } from 'polished';
import {
  space,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  typography,
} from 'styled-system';

import colors from './colors';

export const headingFont = 'Lalezar';
export const textFont = 'Open Sans';

export const H1 = styled.h1`
  font-size: 3.2rem;
  color: ${darken(0.3, colors.grey)};

  margin: 0;

  ${(props) => props.inverted && css`
    color: ${transparentize(0, 'white')};
  `}

  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
  ${typography}
`;

export const H2 = styled.h2`
  font-size: 2.4rem;
  color: ${darken(0.2, colors.grey)};
  
  margin: 0;

  ${(props) => props.inverted && css`
    color: ${transparentize(0.05, 'white')};
  `}

  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
  ${typography}
`;

export const H3 = styled.h3`
  font-size: 1.8rem;
  color: ${darken(0.1, colors.grey)};

  margin: 0;

  ${(props) => props.inverted && css`
    color: ${transparentize(0.1, 'white')};
  `}

  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
  ${typography}
`;

export const H4 = styled.h4`
  font-size: 1.6rem;
  color: ${colors.grey};

  margin: 0;

  ${(props) => props.inverted && css`
    color: ${transparentize(0.15, 'white')};
  `}
  
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
  ${typography}
`;

export const P = styled.p`
  font-size: 1.6rem;
  line-height: 1.5em;
  color: ${lighten(0.05, colors.grey)};

  margin: 0;

  ${(props) => props.inverted && css`
    color: ${transparentize(0.2, 'white')};
  `}

  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
  ${typography}
`;

export const A = styled.a`
  color: ${colors.blue};
  text-decoration: underline;
`;
