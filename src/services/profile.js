import {config, request } from '../utils';

export async function query(params){
  return request({
    url: config.CONTXT_PATH + '/user/profile',
    methods: 'post',
    data: params
  });
}

export async function updateUsername(params){
  return request({
    url: config.CONTXT_PATH + '/user/profile/username',
    methods: 'post',
    data: params
  });
}

export async function realNameAuth(params){
  return request({
    url: config.CONTXT_PATH + '/user/profile/realnameauth',
    methods: 'post',
    data: params
  });
}

export async function updateAutoReinvest(params){
  return request({
    url: config.CONTXT_PATH + '/user/profile/autoreinvest',
    methods: 'post',
    data: params
  });
}

export async function queryAutoReinvestPopup(params){
  return request({
    url: config.CONTXT_PATH + '/user/profile/autoreinvest/popup',
    methods: 'get',
    data: params
  });
}

export async function updateAutoReinvestPopup(params){
  return request({
    url: config.CONTXT_PATH + '/user/profile/autoreinvest/popup/update',
    methods: 'post',
    data: params
  });
}

