import { login, logout } from '../services/login';
import { message } from 'antd';
import { routerRedux } from 'dva/router';

export default {
  namespace: 'login',
  state: {},
  reducers: {},
  effects: {
    * login({ payload }, { call, put }) {
      const result = yield call(login, payload);
      if (!result.success) {
        message.error('Make sure your user ID or password is correct');
      } else {
        message.success('login success!');
        yield put(routerRedux.push('/main/index'));
      }
    },

    * logout({ payload }, { call, put }) {
      const result = yield call(logout, payload);
      if (result.success) {
        message.success('logout success!');
        yield put(routerRedux.push('/'));
      }
    }
  },
  subscriptions: {},
};
