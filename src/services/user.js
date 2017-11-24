import {
  config,
  request
} from '../utils';

export async function create(params) {
  return request({
    url: config.CONTXT_PATH + '/users/create',
    methods: 'post',
    data: params
  });
}

export async function isCaptchaEnabled(params) {
  return request({
    url: config.CONTXT_PATH + '/users/captchaenabled',
    methods: 'get',
    data: params
  });
}

export async function fetchVerifyCode(params) {
  return request({
    url: config.CONTXT_PATH + '/users/fetchverifycode',
    methods: 'post',
    data: params
  });
}

export async function fetchVerifyCode4Register(params) {
  return request({
    url: config.CONTXT_PATH + '/users/fetchVerifyCode4Register',
    methods: 'post',
    data: params
  });
}

export async function fetchVerifyCodeTradekey(params) {
  return request({
    url: config.CONTXT_PATH + '/user/tradekey/fetchverifycode',
    methods: 'get',
    data: params
  });
}

export async function setTradeKey(params) {
  return request({
    url: config.CONTXT_PATH + '/user/tradekey',
    methods: 'post',
    data: params
  });
}

export async function queryHoldPlans(params) {
  return request({
    url: config.CONTXT_PATH + '/users/assets/holding-plans',
    methods: 'get',
    data: params
  });
}

export async function queryHoldPlansInvestments(params) {
  return request({
    url: config.CONTXT_PATH + '/users/assets/holding-plans/' + params.planId + '/investments',
    methods: 'get',
    data: params
  });
}

export async function queryPlanTrend(params) {
  return request({
    url: config.CONTXT_PATH + '/users/assets/' + params.planId + '/trend',
    methods: 'get',
    data: params
  });
}
