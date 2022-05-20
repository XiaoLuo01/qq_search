import React from 'react';
import styled from '@emotion/styled';
import SvgIcon from './SvgIcon';

interface EmptyProps {}

const Empty: React.FC<EmptyProps> = props => {
  return (
    <EmptyWrap>
      <SvgIcon iconClass="empty" fill="#eee" />
      <span>无搜索结果</span>
    </EmptyWrap>
  );
};

const EmptyWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: #aaa;
  }
`;

export default Empty;
