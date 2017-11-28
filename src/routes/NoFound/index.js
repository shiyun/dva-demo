import React from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'dva';

function NoFoundPage({collapsed, dispatch}) {
  return (
    <div>error</div>
  );
}

NoFoundPage.propTypes = {

}

export default connect()(NoFoundPage);
