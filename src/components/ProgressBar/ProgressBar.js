/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBarContainer = styled.div`
  box-sizing: border-box;
  width: 370px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
  padding: ${p => p.size === 'large' ? '4px' : 0};
`;

const ProgressWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const ProgressIndicator = styled.div`
  width: ${props => props.value <= 100 ? props.value : 100}%;
  height: ${props => {
    switch (props.size) {
      case 'small':
        return '8px';
      case 'medium':
        return '12px';
      case 'large':
        return '24px';
      default:
        throw new Error('ProgressBar size must be one of small, medium, or large');
    }
  }};
  background-color: ${COLORS.primary};
`;

const ProgressBar = ({ value, size }) => {
  return (
    <ProgressBarContainer role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" size={size} >
      <ProgressWrapper>
        <ProgressIndicator value={value} size={size} />
      </ProgressWrapper>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
