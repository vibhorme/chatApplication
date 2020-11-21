import React, { KeyboardEvent } from 'react';
import styled, { css } from 'styled-components';

type ThemeProp = (props: any) => string;

interface InputProp {
  value: string;
  id?: string;
  onChange: (event: KeyboardEvent) => void;
  onKeyUp?: (event: KeyboardEvent) => void;
  autocomplete?: 'on' | 'off';
  margin?: string;
  padding?: string;
  width?: string;
  border?: string;
  borderRadius?: string;
  placeholder?: string;
  disabled?: boolean;
  onFocus?: (event: any) => void;
  onBlur?: (event: KeyboardEvent) => void;
  type?: 'text' | 'number' | 'email' | 'password' | 'tel';
  max?: number;
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase';
  maxLength?: number;
  min?: number;
  name?: string;
  colorText?: ThemeProp | string;
  bgColor?: ThemeProp | string;
  boxShadow?: ThemeProp | string;
  shadowColor?: ThemeProp | string;
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

const getFontWeight = ({ fontWeight }: InputProp) => fontWeights[fontWeight];
const getFontSize = ({ fontSize }: InputProp) => fontSizes[fontSize];

const StyledInput: React.FC<InputProp> = styled.input<InputProp>`
  padding: ${(props) => (props.padding ? props.padding : '0')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  border: ${(props) => (props.border ? props.border : 'none')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '0')};
  box-shadow: ${(props) => props.boxShadow} ${(props) => props.shadowColor};
  -webkit-box-shadow: ${(props) => props.boxShadow};
  outline: none;
  ${(props) => props.shadowColor};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.colorText};
  box-sizing: border-box;
  ${getFontWeight}
  ${getFontSize}
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : 'none'};

  ::placeholder {
    color: ${(props) => props.theme.color.dark};
  }
`;

const Input: React.FC<InputProp> = (props: InputProp) => {
  return (
    <StyledInput
      {...props}
      id={props.id}
      onFocus={(e) => {
        if (props.onFocus) {
          props.onFocus(e);
        }
      }}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      colorText={props.colorText}
    />
  );
};

export default Input;
