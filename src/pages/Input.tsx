import React from 'react';
import styled from '@emotion/styled';
import SvgIcon from 'components/SvgIcon';

interface InputProps {
  /* style  */
  style?: React.CSSProperties;
  /* className  */
  className?: string;
  /* input type  */
  type?: string;
  /* input placeholder  */
  placeholder?: string;
  /* input value  */
  value?: string;
  /* error text */
  errorText?: string;
  /* onChange event  */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /* clear value */
  onClear?: () => void;
}

const Input: React.FC<InputProps> = ({
  style,
  className,
  type = 'text',
  placeholder = 'please input',
  value,
  errorText,
  onChange,
  onClear,
}) => {
  return (
    <div className="flex-col positipn-r">
      <InputWrap>
        <input
          data-testid="input"
          className={className}
          style={style}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {value && onClear && (
          <span data-testid="clearIcon" onClick={onClear}>
            <SvgIcon iconClass="clear" fill="#ddd" />
          </span>
        )}
      </InputWrap>
      {errorText && <ErrorWrap data-testid="error">{errorText}</ErrorWrap>}
    </div>
  );
};

const InputWrap = styled.div`
  display: inline-block;
  position: relative;
  input {
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
  }

  svg {
    width: 12px;
    height: 12px;
    position: absolute;
    right: 3px;
    top: 50%;
    margin-top: -6px;
    cursor: pointer;
    &:hover {
      use {
        fill: #aaa;
      }
    }
  }
`;

const ErrorWrap = styled.div`
  width: 190px;
  font-size: 12px;
  color: red;
  margin-top: 5px;
  position: absolute;
  top: 30px;
`;

export default Input;
