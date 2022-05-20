import React from 'react';
import './icon.css';

interface SvgIconProps {
  /* svg name */
  iconClass: string;
  /* svg color */
  fill?: string;
  /* style */
  style?: React.CSSProperties;
}

const SvgIcon: React.FC<SvgIconProps> = ({ iconClass, fill = 'currentColor', style }) => {
  return (
    <svg className={'svg-class'} style={style}>
      <use xlinkHref={'#icon-' + iconClass} fill={fill} />
    </svg>
  );
};

export default SvgIcon;
