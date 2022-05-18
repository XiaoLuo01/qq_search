import React, { useEffect } from 'react';
import styled from '@emotion/styled';

interface InputProps {
  /* style  */
  style?: React.CSSProperties;
  /* className  */
  className?: string;
  /* input type  */
  type?: string;
  /* input placeholder  */
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ style, className, type = 'text', placeholder = 'please input' }) => {
  useEffect(() => {}, []);
  return <InputWrap className={className} style={style} type={type} placeholder={placeholder} />;
};

const InputWrap = styled.input`
  width: 160px;
  outline: none;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  font-size: 14px;
  padding: 4px;
  &::-webkit-input-placeholder {
    color: #d9d9d9;
  }
  &:focus,
  &:hover {
    border-color: #40a9ff;
  }
`;

export default Input;
