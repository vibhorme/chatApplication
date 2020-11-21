import React from 'react';
import styled from 'styled-components';

type ThemeProp = (props: any) => any;

export interface FlexProps {
  padding?: string;
  margin?: string;
  children: JSX.Element | React.ReactNode;
  position?: 'absolute' | 'relative' | 'sticky' | 'fixed';
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';

  blur?: boolean;
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'stretch';
  overflow?: string;
  borderBottom?: string;
  borderRight?: ThemeProp | string;
  onClick?: () => void;
  background?: ThemeProp | string;
  cursor?: string;
  alignItem?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'space-between';
  border?: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  width?: string;
  height?: string;
  maxWidth?: number;
  minWidth?: number;
  minHeight?: number;
  flexWidth?: 1 | 2 | 3 | 4 | 5 | 'none';
  zIndex?: number;
  className?: string;
  wordBreak?: 'break-word' | 'anywhere';
  transform?: string;
  borderRadius?: string;
  transition?: string;
}

const FlexContainer = styled.div<FlexProps>`
  box-sizing: border-box;
  display: flex;
  padding: ${(props) => (props.padding ? props.padding : 0)};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  justify-content: ${(props) => props.justifyContent};
  position: ${(props) => props.position};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  overflow ${(props) => (props.overflow ? props.overflow : 'unset')};
  border:${(props) => (props.border ? props.border : 'unset')};
  bottom: ${(props) => props.bottom};
  align-content: ${(props) => props.alignContent};
  align-items: ${(props) => props.alignItem};
  flex-direction: ${(props) => props.flexDirection};
  background: ${(props) => (props.background ? props.background : `unset`)};
  flex-wrap: ${(props) => props.flexWrap};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) =>
    props.blur
      ? `  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);`
      : ``}
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : `unset`)};
  min-width: ${(props) => (props.minWidth ? `${props.minWidth}px` : `unset`)}
  min-height: ${(props) =>
    props.minHeight ? `${props.minHeight}px` : `unset`};
  border-right: ${(props) => (props.borderRight ? props.borderRight : `unset`)};
  border-bottom: ${(props) =>
    props.borderBottom ? props.borderBottom : `unset`};
  cursor: ${(props) => (props.cursor ? props.cursor : `unset`)};
  transform: ${(props) => (props.transform ? props.transform : 'unset')};
  flex: ${(props) => props.flexWidth};
  word-break: ${(props) => (props.wordBreak ? props.wordBreak : 'unset')};
  z-index: ${(props) => (props.zIndex ? props.zIndex : `unset`)};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : `unset`};
  transition: ${(props) => (props.transition ? props.transition : 'initial')};
`;

FlexContainer.defaultProps = {
  padding: '0',
  justifyContent: 'flex-start',
  alignContent: 'center',
  alignItem: 'center',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  flexWidth: 'none',
};

const Flex: React.SFC<FlexProps> = ({ children, ...props }: FlexProps) => (
  <FlexContainer
    {...props}
    padding={props.padding}
    wordBreak={props.wordBreak}
    justifyContent={props.justifyContent}
    flexDirection={props.flexDirection}
    alignContent={props.alignContent}
    alignItem={props.alignItem}
    overflow={props.overflow}
    borderBottom={props.borderBottom}
    flexWrap={props.flexWrap}
    maxWidth={props.maxWidth}
    borderRight={props.borderRight}
    borderRadius={props.borderRadius}
    minWidth={props.minWidth}
    flexWidth={props.flexWidth}
    className={props.className}
    transform={props.transform}
    onClick={props.onClick}
  >
    {children}
  </FlexContainer>
);

export default Flex;
