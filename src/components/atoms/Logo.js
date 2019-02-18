import React from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../../styles';

const LogoType = styled.a`
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  font-family: ${fonts.latoRegular};
  color: ${colors.primaryText};
`;

export default class Logo extends React.Component {
  render () {
    return (
      <LogoType href="https://www.qashot.com" target="_blank" rel="noreferrer noopener">www.qashot.com</LogoType>
    );
  }
}
