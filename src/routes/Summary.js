import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Button, Tabs } from 'antd';

//import SummaryGrid from 'components/summary/Grid';
//import TrendView from 'components/summary/TrendView';
//import SummaryLineChart from 'components/summary/LineChart';
//import SummaryPieChart from 'components/summary/PieChart';
//import TabView from 'components/summary/TabView';
import styles from 'less/summary.less';

function Summary(location, dispatch) {
  return (
    <div>      
      <div className={styles['fa-gutter-20']}>dsdsd</div>
      <div className={styles['fa-gutter-20']}>aaaaaaaa</div>
    </div>
  );
}

Summary.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Summary);
