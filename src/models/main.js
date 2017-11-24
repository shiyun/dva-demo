import { routerRedux } from 'dva/router';

export default {
  namespace : 'mainPage',
  state : {collapsed: false},
  reducers : {
	toggleSuccess(state, {payload}){
		return {
			...state,
			...payload,
		}
	}
  },
  effects : {
    * toggleMenu({ payload }, { call, put} ) {
      yield put({type: 'toggleSuccess', payload});
    }
  },
  subscriptions : {}
};
