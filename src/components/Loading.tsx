import React from 'react';
import SvgIcon from './SvgIcon';

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <SvgIcon iconClass="loading" fill="#aaa" />
    </div>
  );
};

export default Loading;
