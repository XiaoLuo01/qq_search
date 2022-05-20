import { renderHook } from '@testing-library/react';
import { useAsync } from 'hooks/useAsync';
import { act } from 'react-dom/test-utils';

const defaultState: ReturnType<typeof useAsync> = {
  error: null,
  data: null,
  stat: 'loading',
  isLoading: true,
  isError: false,
  isSuccess: false,

  sendHttp: expect.any(Function),
  setData: expect.any(Function),
  setError: expect.any(Function),
};

const successState: ReturnType<typeof useAsync> = {
  ...defaultState,
  stat: 'success',
  isLoading: false,
  isSuccess: true,
};

test('useAsync can handle asynchronous', async () => {
  let resolve: any, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  const { result } = renderHook(() => useAsync());
  expect(result.current).toEqual(defaultState);

  let p: Promise<any>;
  act(() => {
    p = result.current.sendHttp(promise);
  });
  expect(result.current).toEqual(defaultState);

  const resolvedValue = { mockValue: 'resolved' };
  await act(async () => {
    resolve(resolvedValue);
    await p;
  });

  expect(result.current).toEqual({
    ...successState,
    data: resolvedValue,
  });
});
