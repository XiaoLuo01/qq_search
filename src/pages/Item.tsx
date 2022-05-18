import React, { useEffect } from 'react';
import styled from '@emotion/styled';

interface ItemProps {}

const Item: React.FC<ItemProps> = () => {
  useEffect(() => {}, []);
  return (
    <ItemWrap>
      <ImgWrap src="https://qlogo2.store.qq.com/qzone/774740085/774740085/100" alt="" />
      <TextWrap>
        <div className="mb-5">紫罗兰</div>
        <div>1428620591</div>
      </TextWrap>
    </ItemWrap>
  );
};

const ItemWrap = styled.div`
  width: 200px;
  height: 80px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  background: #fafafa;
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;

const ImgWrap = styled.img`
  margin-right: 10px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Item;
