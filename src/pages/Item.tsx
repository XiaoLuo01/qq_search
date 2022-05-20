import React from 'react';
import styled from '@emotion/styled';
import { QQItem } from 'types';
import Empty from 'components/Empty';

interface ItemProps {
  data?: QQItem;
  setImgLoaded?: (loaded: boolean) => void;
}

const Item: React.FC<ItemProps> = ({ data, setImgLoaded }) => {
  const handleLoad = () => {
    setImgLoaded && setImgLoaded(true);
  };
  return (
    <>
      {data?.name ? (
        <ItemWrap>
          <ImgWrap src={data?.qlogo} alt="" onLoad={handleLoad} />
          <TextWrap>
            <div className="mb-5" dangerouslySetInnerHTML={{ __html: data?.name }}></div>
            <div>{data?.qq}</div>
          </TextWrap>
        </ItemWrap>
      ) : (
        <Empty />
      )}
    </>
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
  width: 100px;
`;

export default Item;
