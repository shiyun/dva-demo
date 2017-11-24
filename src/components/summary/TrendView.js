import React from 'react';
//import { FormattedMessage } from 'react-intl';
import { PieChart, Legend } from 'components/charts';
import styles from 'less/summary.less';

const pieChartOptions = [
  { value: 1548 },
  { value: 335 },
  { value: 535 }
];

const TrendView = () => {
  return (
    <div className={styles['fa-summary-trend']}>
      <div className={styles['fa-sub-title']}></div>
      <div className={styles['fa-chart-wrap']}>
        <PieChart series={pieChartOptions}>
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

export default TrendView;
