import React from 'react';
import { Tabs } from 'antd';
import { FormattedMessage } from 'react-intl';
import { PieChart, Legend } from 'components/charts';
import styles from 'less/summary.less';

const tabsNav = [
  { title: <FormattedMessage id="summary.risk_allocation" />},
  { title: <FormattedMessage id="summary.loan_status" />},
];

const TabView = () => {
  const pieChartOptions1 = [
    { value: 1548 },
    { value: 335 },
    { value: 535 }
  ];

  const pieChartOptions2 = [
    { value: 2989 },
    { value: 1456 },
    { value: 542 }
  ];

  return (
    <div>
      <Tabs tabs={tabsNav} initialPage={0} renderTab={tab => <span>{tab.title}</span>}>
        <div style={{ display: 'Row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          <div className={styles['fa-chart-wrap']}>
            <PieChart series={pieChartOptions1}>
              <Legend />
            </PieChart>
          </div>
        </div>
        <div style={{ display: 'Row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          <div className={styles['fa-chart-wrap']}>
            <PieChart series={pieChartOptions2}>
              <Legend />
            </PieChart>
          </div>
        </div>
      </Tabs>

    </div>
  )
}

export default TabView;
