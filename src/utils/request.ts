import originAxios from 'axios';
import { message } from 'antd';

const axios = originAxios.create({
  timeout: 15000
});

axios.interceptors.response.use(
  function(response) {
    /**
     * successful response: {"flag": 0, "data": ""}
     * unsuccessful response: {"flag": 1, "msg": "server error"}
     */
    if (response?.data?.flag === 1) {
      let errorMsg = response.data.msg;
      message.error(errorMsg);
      return Promise.reject(errorMsg);
    }
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export function get(url: string, data: any) {
  return axios.get(url, {
    params: data
  });
};

// To avoid serializing JS objects to JSON, which is a axios's default behavior.
export function post(url: string, data: any) {
  return axios({
    method: 'post',
    url,
    data
  });
};


