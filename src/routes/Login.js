import React from 'react';
import {connect} from 'dva';
import {message, Button, Input} from 'antd';
import styles from './Login.less';
import {createForm} from 'rc-form';
import {JSEncrypt} from '../utils/jsencrypt';
import qs from 'qs';

function Login({
  login,
  dispatch,
  form: {
    getFieldProps,
    validateFields
  }
}) {
  function handleClick() {
    validateFields((error, values) => {
      console.log(error, values);
      if (error) {
        message.error('Make sure your user ID or password is correct', 2);
      } else {
        const publicKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgmWHJCT8Wy6hLsDWzA69wIgjLxRguzpHpdL+" +
            "VBYiPwDer0dMUwtxp0ln3ukHyX1Ps+ODvq4s/BPqxfhlLFC+GVEqww0nG49oxoe8Bs1GI+eTk/86jr5F" +
            "RMw5inizsJSrBWFH22sAc3bt9rfrsYm89IP9OMZ4Nqyqte+DvTzpnqY3Q/4oqpktaIMXOUPe/9Qragvc" +
            "xzlkZIhyCAXOjJWwzKZ5lSbHVeQH6gfhv+SKCWQwW8IIKtsGQ51aUvdiPLwVEc+yYxqvsAu+eRKNurDp" +
            "IYzQdYbu21UuTgJNBp7SVQSob/e0OxDXsyXZkROgG/da2eHrOpjBLyLrTpk5XWLJ1wIDAQAB"
        var rsa = new JSEncrypt();
        rsa.setPublicKey(publicKey);
        // values.password = rsa.encrypt(values.password); values.encryptedParam =
        // 'password'; values.from_new_web = true;
        dispatch({
          type: 'login/login',
          payload: qs.stringify(values)
        })
      }
    })

  }
  return (
    <div className={styles.normal}>
      <div className={styles.title}>Welcome to FinEX Asia</div>
      <Input
        {...getFieldProps('identity', {initialValue: 'test@test.com', rules: [{required: true}]})} />
      <Input
        {...getFieldProps('password', {initialValue: 'welcome1', rules: [{required: true}]})}
        type="password" />
     
      <Button
        style={{
        marginTop: 20
      }}
        type="primary"
        onClick={handleClick}>Log In</Button>
    </div>
  );
}
function mapStateToProps({login}) {
  return {login};
}

export default connect(mapStateToProps)(createForm()(Login));
