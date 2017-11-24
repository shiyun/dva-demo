import {config, request } from '../utils';

export async function queryLoans(params){
  return request({
    url: config.CONTXT_PATH + '/plans/' + params.planId + '/loans',
    methods: 'get',
    data: params
  });
}

export async function queryPlanOne(params){
  return request({
    url: config.CONTXT_PATH + '/plans/' + params.planId,
    methods: 'get',
    data: params
  });
}

export async function queryRepayment(params){
  return request({
    url: config.CONTXT_PATH + '/plans/' + params.planId + '/repayment-summay',
    methods: 'get',
    data: params
  });
}

export async function queryPlanOneLoans(params){
  return request({
    url: config.CONTXT_PATH + '/plans/' + params.planId + '/loans',
    methods: 'get',
    data: params
  });
}

export async function queryStructure(params){
  return request({
    url: config.CONTXT_PATH + '/plans/' + params.planId + '/structure',
    methods: 'get',
    data: params
  });
}

export async function queryPrcnpout(params){
  return request({
    url: config.CONTXT_PATH + '/plans/' + params.planId + '/prcnpout',
    methods: 'get',
    data: params
  });
}
