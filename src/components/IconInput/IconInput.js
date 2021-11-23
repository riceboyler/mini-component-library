import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const BaseNativeInput = styled.input`
  border: none;
  font-weight: 700;
  border-bottom: solid ${COLORS.black};
  width: ${props => props.width}px;

  &:focus {
    /* On Edge, the outline has no offset interestingly */
    outline-offset: 5px; 
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: initial;
  }
`;

const SmallInput = styled(BaseNativeInput)`
  font-size: ${14 / 16}rem;
  height: ${24 / 16}rem;
  border-width: 1px;
  padding-left: ${24 / 16}rem;
`;

const LargeInput = styled(BaseNativeInput)`
  font-size: ${18 / 16}rem;
  height: ${36 / 16}rem;
  border-width: 2px;
  padding-left: ${36 / 16}rem;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: ${props => props.size === 'small' ? 16 / 16 : 24 / 16}rem;
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  const InputComponent = size === 'small' ? SmallInput : LargeInput;

  return (
    <Wrapper width={width} size={size}>
      <VisuallyHidden>
        <label htmlFor={InputComponent}>{label}</label>
      </VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={size === 'small' ? 16 : 24} />
      </IconWrapper>
      <InputComponent type="text" placeholder={placeholder} {...delegated} />
    </Wrapper>
  );
};

export default IconInput;
