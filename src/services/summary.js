import {config, request } from '../utils';

export async function query(params){
  return request({
    url: config.CONTXT_PATH + '/usrs/assets/summary',
    methods: 'get',
    data: params
  });
}

export async function queryStructureSummary1(params){
  return request({
    url: config.CONTXT_PATH + '/users/assets/holding-plans/loan-status',
    methods: 'get',
    data: params
  });
}

export async function queryStructureSummary2(params){
  return request({
    url: config.CONTXT_PATH + '/users/assets/holding-plans/loan-prncpout-status',
    methods: 'get',
    data: params
  });
}

export async function queryTrend(params){
  return request({
    url: config.CONTXT_PATH + '/users/assets/trend',
    methods: 'get',
    data: params
  });
}

export async function queryGrade(params){
  return request({
    url: config.CONTXT_PATH + '/users/assets/holding-plans/risk-allocation',
    methods: 'get',
    data: params
  });
}
