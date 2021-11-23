import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const SelectWrapper = styled.div`
  position: relative;
  width: max-content;
`;

const HiddenSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const StyledSelect = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${HiddenSelect}:focus + & {
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${HiddenSelect}:hover + & {
    cursor: pointer;
    color: ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  padding-left: 24px;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <HiddenSelect value={value} onChange={onChange}>
        {children}
      </HiddenSelect>
      <StyledSelect>
        {displayedValue}
        <StyledIcon id="chevron-down" />
      </StyledSelect>
    </SelectWrapper>
  );
};

export default Select;
