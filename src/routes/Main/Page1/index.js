import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';

function MainPage1({collapsed, dispatch}) {
  return (
    <div>page1</div>
  );
}

MainPage1.propTypes = {

}

export default connect()(MainPage1);
