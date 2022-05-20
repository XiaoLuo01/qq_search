import { useCallback, useState } from 'react';

interface State<D> {
  error: Error | null;
  data: D | null;
  stat: 'idle' | 'loading' | 'error' | 'success';
}

const defaultInitialState: State<null> = {
  error: null,
  data: null,
  stat: 'idle',
};

export const useAsync = <D>(initialState?: State<D>) => {
  const [state, setState] = useState<State<D>>({ ...defaultInitialState, ...initialState });

  const setData = (data: D) => {
    setState({
      data,
      error: null,
      stat: 'success',
    });
  };
  const setError = (error: Error) => {
    setState({
      data: null,
      error: error,
      stat: 'error',
    });
  };
  const sendHttp = useCallback(
    (promise: Promise<D>) => {
      if (!promise || !promise.then) {
        throw new Error('请传入 Promise 的数据类型');
      }

      setState({
        data: null,
        error: null,
        stat: 'loading',
      });

      return promise
        .then(data => {
          setData(data);
          return Promise.resolve(data);
        })
        .catch(error => {
          setError(error);
          return Promise.reject(error);
        });
    },

    [state]
  );

  return {
    isIdle: state.stat === 'idle',
    isLoading: state.stat === 'loading',
    isError: state.stat === 'error',
    isSuccess: state.stat === 'success',
    ...state,
    setData,
    setError,
    sendHttp,
  };
};
