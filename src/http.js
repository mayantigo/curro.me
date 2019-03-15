// @flow

import axios from 'axios';

export function get(url: string): Promise {
  return axios.get(url);
}

export function post(url: string, params: any): Promise {
  return axios.post(url, params);
}

export function put(url: string, params: any): Promise {
  return axios.put(url, params);
}
