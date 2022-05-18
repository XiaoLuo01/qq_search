import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Input from './Input';
import Item from './Item';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  useEffect(() => {}, []);
  return (
    <Wrapper>
      <h1>QQ号查询</h1>
      <div className="mb-30">
        <label htmlFor="" className="mr-10">
          QQ
        </label>
        <Input placeholder="请输入QQ号码" />
      </div>
      <div>
        <Item />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50vw;
  height: 40vh;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 15vh;
  padding: 0 15px;
  box-sizing: border-box;
`;

export default Home;
