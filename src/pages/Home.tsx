import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Input from './Input';
import Item from './Item';
import { useHttp } from 'hooks/http';
import { QQItem } from 'types';
import Loading from 'components/Loading';
import { useAsync } from 'hooks/useAsync';
import { useDebounce } from 'hooks/utils';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [qq, setQq] = useState<string>('');
  const [qqInfo, setQqInfo] = useState<QQItem | null>();
  const [errText, setErrText] = useState('');
  const [imgLoaded, setImgLoaded] = useState(false);

  const client = useHttp();
  const { sendHttp, isLoading, isError, error } = useAsync<QQItem>();

  const validateQQ = (qq: string) => {
    // QQ number is generally 5-11 digits, and the first digit is not 0
    const qqReg = /^[1-9]\d{4,10}$/;
    if (!qqReg.test(qq)) {
      setErrText('格式不正确，请输入正确的QQ号码');
      setQqInfo(null);
      return false;
    } else {
      setErrText('');
      return true;
    }
  };

  const handleClear = () => {
    setQq('');
    setErrText('');
  };

  const debounceQQ = useDebounce(qq, 500);

  useEffect(() => {
    if (debounceQQ && validateQQ(debounceQQ)) {
      setQqInfo(null);
      sendHttp(client('api/qq.info', { data: { qq: debounceQQ } })).then(res => {
        setQqInfo(res);
      });
    }
  }, [debounceQQ]);

  return (
    <Wrapper>
      <h1>QQ号查询</h1>
      <div className="mb-30 flex">
        <label htmlFor="" className="mr-10">
          QQ
        </label>
        <Input
          placeholder="请输入QQ号码"
          value={qq}
          onChange={e => setQq(e.target.value)}
          onClear={handleClear}
          errorText={errText}
        />
      </div>
      <div>
        {isLoading && imgLoaded && <Loading />}
        {isError && <div className="red">{error?.message}</div>}
        {qqInfo && <Item data={qqInfo} setImgLoaded={setImgLoaded} />}
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
