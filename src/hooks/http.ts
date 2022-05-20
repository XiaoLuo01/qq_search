import qs from 'qs';

const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  data?: Record<string, unknown>;
}

export const http = async (endPoint: string, { data, ...customConfig }: Config = {}) => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': data ? 'application/json' : '',
    },
    ...customConfig,
  };

  if (config.method.toUpperCase() === 'GET') {
    endPoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  return window.fetch(`${apiUrl}/${endPoint}`, config).then(async response => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};

export const useHttp = () => {
  return (...[endPoint, config]: Parameters<typeof http>) => http(endPoint, { ...config });
};
