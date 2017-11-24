import {
  config,
  request
} from '../utils';

export async function login(params) {
  return request({
    url: config.CONTXT_PATH + '/users/login',
    methods: 'post',
    data: params
  });
}

export async function logout(params) {
  return request({
    url: config.CONTXT_PATH + '/users/logout',
    methods: 'post',
    data: params
  });
}
