const baseUrl = 'http://localhost:8090';

const get = async (
  url: string,
  {
    queryParams,
    headers,
  }: {
    queryParams?: { [key: string]: string };
    headers?: { [key: string]: string };
  } = {}
) => {
  const token = localStorage.getItem('token');

  // if (!token) return console.error('No token found');

  try {
    const uriEncodedParams = [];
    for (const key in queryParams) {
      uriEncodedParams.push(`${key}=${encodeURI(queryParams[key])}`);
    }
    const queryParamsString = queryParams
      ? `?${uriEncodedParams.join('&')}`
      : '';

    const res = await fetch(`${baseUrl}${url}${queryParamsString}`, {
      headers: {
        Authorization: token || '',
        ...headers,
      },
    });

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

const post = async (
  url: string,
  {
    queryParams,
    headers,
    body,
  }: {
    queryParams?: { [key: string]: string };
    headers?: { [key: string]: string };
    body?: any;
  } = {}
) => {
  const token = localStorage.getItem('token');

  // if (!token) return console.error('No token found');

  try {
    const uriEncodedParams = [];
    for (const key in queryParams) {
      uriEncodedParams.push(`${key}=${encodeURI(queryParams[key])}`);
    }
    const queryParamsString = queryParams
      ? `?${uriEncodedParams.join('&')}`
      : '';

    const isFormData = body instanceof FormData;

    const res = await fetch(`${baseUrl}${url}${queryParamsString}`, {
      method: 'POST',
      headers: {
        Authorization: token || '',
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
        ...headers,
      },
      body: isFormData ? body : JSON.stringify(body),
    });

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

const useRequest = () => ({ get, post });

export default useRequest;
