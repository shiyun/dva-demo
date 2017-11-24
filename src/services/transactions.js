import {
  config,
  request
} from '../utils';

export async function query(params) {
  return request({
    url: config.CONTXT_PATH + '/transactions',
    methods: 'get',
    data: params
  });
}
