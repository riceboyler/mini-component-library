import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  position: relative;
  width: ${p => p.width}px;
  height: fit-content;
  border-bottom: solid ${COLORS.black};
  border-width: ${p => p.size === 'small' ? '1px' : '2px'};
  padding: 8px;

  &:focus-within {
    outline: 5px auto -webkit-focus-ring-color;
    outline: 5px auto Highlight;
    outline-offset: 5px;
  } 
`;

const BaseNativeInput = styled.input`
  position: absolute;
  border: none;
  color: ${COLORS.gray700};
  font-weight: 700;

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${COLORS.black};
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: initial;
  }
`;

const SmallInput = styled(BaseNativeInput)`
  font-size: ${14 / 16}rem;
  top: 4px;
  left: 30px;
  width: calc(100% - 38px);
`;

const LargeInput = styled(BaseNativeInput)`
  font-size: ${18 / 16}rem;
  top: 6px;
  left: 36px;
  width: calc(100% - 44px);
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const InputComponent = size === 'small' ? SmallInput : LargeInput;

  return (
    <Wrapper width={width} size={size}>
      <Icon id={icon} size={size === 'small' ? 12 : 18} />
      <InputComponent type="text" placeholder={placeholder} />
      <VisuallyHidden>
        <label htmlFor={InputComponent}>{label}</label>
      </VisuallyHidden>
    </Wrapper>
  );
};

export default IconInput;
