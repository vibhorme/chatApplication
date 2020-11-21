import React, { MouseEvent } from 'react';
import styled, { css } from 'styled-components';

type ThemeProps = (props: any) => any;

export interface CardProps {
  boxSizing?: 'content-box' | 'border-box' | 'initial' | 'inherit';
  rounded?: 'top' | 'bottom' | 'all' | 'left' | 'right' | 'max' | 'none';
  shadow?: boolean;
  boxShadow?: ThemeProps | string;
  shadowColor?: ThemeProps | string;
  padding?: string;
  margin?: string;
  background?: ThemeProps | string;
  backgroundImage?: any;
  hover?: boolean;
  hoverBoxShadow?: any;
  hoverShadowColor?: any;
  flexGrow?: boolean;
  hoverBackground?: ThemeProps | string;
  width?: string;
  maxHeight?: string;
  fontSize?: string;
  height?: string;
  onClick?: any;
  onMouseOver?: (event: MouseEvent) => void;
  onMouseEnter?: (event: MouseEvent) => void;
  onMouseLeave?: (event: MouseEvent) => void;
  overflow?:
    | 'inherit'
    | 'auto'
    | 'scroll'
    | 'visible'
    | 'hidden'
    | 'overlay'
    | 'unset';
  border?: string;
  borderLeft?: ThemeProps | string;
  hoverBorderLeft?: string;
  borderRight?: ThemeProps | string;
  borderBottom?: ThemeProps | string;
  borderTop?: ThemeProps | string;
  color?: any;
  zIndex?: number | 'unset';
  cursor?:
    | 'alias'
    | 'all-scroll'
    | 'auto'
    | 'cell'
    | 'context-menu'
    | 'col-resize'
    | 'copy'
    | 'crosshair'
    | 'default'
    | 'e-resize'
    | 'ew-resize'
    | 'grab'
    | 'grabbing'
    | 'help'
    | 'move'
    | 'n-resize'
    | 'ne-resize'
    | 'nesw-resize'
    | 'ns-resize'
    | 'nw-resize'
    | 'nwse-resize'
    | 'no-drop'
    | 'none'
    | 'not-allowed'
    | 'pointer'
    | 'progress'
    | 'row-resize'
    | 's-resize'
    | 'se-resize'
    | 'sw-resize'
    | 'text'
    | 'URL'
    | 'vertical-text'
    | 'w-resize'
    | 'wait'
    | 'zoom-in'
    | 'zoom-out'
    | 'initial'
    | 'inherit';
  position?:
    | 'relative'
    | 'absolute'
    | 'sticky'
    | 'fixed'
    | 'static'
    | 'initial'
    | 'inherit';
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  alignSelf?: string;
  children?: JSX.Element | React.ReactNode;
  customStyle?: object;
  backdropFilter?: string;
  maxWidth?: string;
  minWidth?: string;
  after?: string;
  borderRadius?: string;
}
const getBorderRadius = (props: any) => {
  switch (props.rounded) {
    case 'top':
      return css`
        border-radius: 4px 4px 0 0;
      `;
    case 'bottom':
      return css`
        border-radius: 0 0 4px 4px;
      `;
    case 'left':
      return css`
        border-radius: 18px 0 0 18px;
      `;
    case 'right':
      return css`
        border-radius: 0 18px 18px 0;
      `;
    case 'all':
      return css`
        border-radius: 4px;
      `;
    case 'max':
      return css`
        border-radius: 12px;
      `;
  }
};

const CardStyle = styled.div<CardProps>`
  box-sizing: ${(props) => props.boxSizing};
  position: ${(props) => props.position};
  z-index: ${(props) => (props.zIndex ? props.zIndex : `0`)};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  box-sizing: border-box;
  left: ${(props) => props.left};
  padding: ${(props) => (props.padding ? props.padding : `15px 20px`)};
  box-shadow:${(props) => (props.boxShadow ? props.boxShadow : `unset`)} ${(
  props
) => (props.shadowColor ? props.shadowColor : '')};
  flex-grow: ${(props) => (props.flexGrow ? `1` : `unset`)};
  background: ${(props) => (props.background ? props.background : `#ffffff`)};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  font-size: ${(props) => props.fontSize};
  border-left: ${(props) =>
    props.border ? props.border : props.borderLeft ? props.borderLeft : `none`}
  border-right: ${(props) =>
    props.border
      ? props.border
      : props.borderRight
      ? props.borderRight
      : `none`};
  border-top: ${(props) =>
    props.border ? props.border : props.borderTop ? props.borderTop : `none`};
  border-bottom: ${(props) =>
    props.border
      ? props.border
      : props.borderBottom
      ? props.borderBottom
      : `none`};
  margin: ${(props) => (props.margin ? props.margin : `0px`)};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '0')};
  ${getBorderRadius};
  backdrop-filter: ${(props) =>
    props.backdropFilter ? props.backdropFilter : `unset`};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  width: ${(props) => props.width};
  max-height: ${(props) => props.maxHeight};
  height: ${(props) => props.height};
  text-align: ${(props) => props.textAlign};
  cursor: ${(props) => (props.cursor ? props.cursor : `unset`)};
  overflow: ${(props) => props.overflow};
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : `unset`)};
  &:hover {
    background: ${(props) =>
      props.hoverBackground ? props.hoverBackground : props.background};
      > div > p {
        color: ${(props) => (props.hover ? `white` : ``)};
      }
    border-left: ${(props) =>
      props.hover && props.hoverBorderLeft
        ? props.hoverBorderLeft
        : props.borderLeft
        ? props.borderLeft
        : props.border
        ? props.border
        : `unset`}
    box-shadow:${(props) =>
      props.hoverBoxShadow ? props.hoverBoxShadow : props.boxShadow} ${(
  props
) => (props.hoverBoxShadow ? props.hoverShadowColor : props.shadowColor)}
  }
  :after {
    ${(props) => props.after};
  }
`;

const Card: React.FC<CardProps> = ({ children, ...props }: CardProps) => {
  return (
    <CardStyle
      {...props}
      padding={props.padding}
      margin={props.margin}
      background={props.background}
      flexGrow={props.flexGrow}
      hover={props.hover}
      hoverBoxShadow={props.hoverBoxShadow}
      maxHeight={props.maxHeight}
      overflow={props.overflow}
      position={props.position}
      style={props.customStyle}
      hoverBackground={props.hoverBackground}
    >
      {children}
    </CardStyle>
  );
};

CardStyle.defaultProps = {
  top: 'unset',
  right: 'unset',
  bottom: 'unset',
  left: 'unset',
};
export default Card;
