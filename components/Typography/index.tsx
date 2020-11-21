import React from 'react';
import Styled, { css } from 'styled-components';

type ThemeProp = (props: any) => string;

export interface TextProps {
  fontSize:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'normal'
    | 'small'
    | 'verySmall';
  fontWeight: 'regular' | 'medium' | 'semiBold' | 'bold';
  stringColor: ThemeProp | string;
  hoverColor?: ThemeProp;
  children: JSX.Element | React.ReactNode;
  blur?: boolean;
  margin?: string;
  padding?: string;
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'initial' | 'inherit';
  maxHeight?: 'none' | 'length' | 'initial' | 'inherit' | string;
  lineClamp?: number;
  minWidth?: 'auto' | 'max-content' | 'min-content' | 'fit-content' | string;
  maxWidth?: 'auto' | 'max-content' | 'min-content' | 'fit-content' | string;
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
  textTransform?: 'uppercase' | 'capitalize' | 'lowercase';
  wordBreak?:
    | 'break-all'
    | 'break-word'
    | 'inherit'
    | 'initial'
    | 'keep-all'
    | 'normal'
    | 'unset';
  cursor?: 'pointer' | 'auto';
  onClick?: () => void;
}

const fontSizes = {
  h1: css`
    font-size: 4rem;
    line-height: 125%;
  `,
  h2: css`
    font-size: 3rem;
    line-height: 116%;
  `,

  h3: css`
    font-size: 2rem;
    line-height: 125%;
  `,
  h4: css`
    font-size: 1.5rem;
    line-height: 132%;
  `,
  h5: css`
    font-size: 1.125rem;
    line-height: 132%;
  `,
  h6: css`
    font-size: 1rem;
    line-height: 148%;
  `,
  normal: css`
    font-size: 0.875rem;
    line-height: 111%;
  `,
  small: css`
    font-size: 0.75rem;
    line-height: 100%;
  `,
  verySmall: css`
    font-size: 0.6875rem;
    line-height: 100%;
  `,
};

const fontWeights = {
  regular: css`
    font-weight: 400;
  `,
  medium: css`
    font-weight: 500;
  `,
  semiBold: css`
    font-weight: 600;
  `,
  bold: css`
    font-weight: 700;
  `,
};

const getFontWeight = ({ fontWeight }: TextProps) => fontWeights[fontWeight];
const getFontSize = ({ fontSize }: TextProps) => fontSizes[fontSize];
const getLineClamp = ({ lineClamp }: TextProps) => {
  if (typeof lineClamp === 'number') {
    return css`
      display: -webkit-box;
      -webkit-line-clamp: ${lineClamp};
      -webkit-box-orient: vertical;
      overflow: hidden;
      white-space: normal;
    `;
  } else return ``;
};

export const TextStyled = Styled.p<TextProps>`
  ${getFontSize}
  ${getFontWeight}
  margin: ${(props) => (props.margin ? props.margin : '0')};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  word-break: ${(props) => (props.wordBreak ? props.wordBreak : `unset`)};
  color: ${(props) =>
    props.blur
      ? 'transparent'
      : props.stringColor
      ? props.stringColor
      : '#222222'};
  text-shadow: ${(props) => (props.blur ? '0 0 5px rgba(0,0,0,0.5)' : 'unset')};
  overflow: ${(props) => (props.overflow ? props.overflow : 'visible')};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : 'none')};
  min-width: ${(props) => (props.minWidth ? props.minWidth : 'none')};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : 'none')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'initial')};
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : 'none'};
  cursor: ${(props) => props.cursor};
  ${getLineClamp}

  &:hover {
    color: ${(props) => props.hoverColor};
  }
`;

const Text: React.SFC<TextProps> = ({ children, ...props }: TextProps) => {
  return (
    <TextStyled
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      wordBreak={props.wordBreak}
      stringColor={props.stringColor}
      margin={props.margin}
      textTransform={props.textTransform}
      textAlign={props.textAlign}
      padding={props.padding}
    >
      {children}
    </TextStyled>
  );
};

export default Text;
