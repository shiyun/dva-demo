import React from 'react';
import { Row, Col } from 'antd';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import styles from 'less/summary.less';

function GridTpl() {
  return (
    <div className={styles['fa-summary-grid']}>
      <div className={styles['fa-nav-wrap']}>
        <div className={styles['fa-nav-item']}>
          <h3><FormattedMessage id="summary.est_nav" /><FormattedMessage id="summary.nav_time_left_bucket" />2017.08.31<FormattedMessage id="summary.nav_time_right_bucket2" /></h3>
          <p>US $3,012,340.43</p>
        </div>
        <div className={styles['fa-nav-item']}>
          <h3><FormattedMessage id="summary.act_nav" /><FormattedMessage id="summary.nav_time_left_bucket" />2017.08.31<FormattedMessage id="summary.nav_time_right_bucket2" /></h3>
          <p>US $3,006,617.98</p>
        </div>
      </div>
      <div className={styles['fa-grid-wrap']}>
        <Row className={styles['fa-grid-Row']}>
          <Col className={styles['fa-grid-item']}>
            <div className={styles.tit}><FormattedHTMLMessage id="summary.today_gain_loss" /></div>
            <div className={styles.txt}>US $3,023,174.00</div>
          </Col>
          <Col className={styles['fa-grid-item']}>
            <div className={styles.tit}><FormattedHTMLMessage id="summary.tot_gain_loss" /></div>
            <div className={styles.txt}>US $3,023,174.00</div>
          </Col>
        </Row>
        <Row className={styles['fa-grid-Row']}>
          <Col className={styles['fa-grid-item']}>
            <div className={styles.tit}><FormattedHTMLMessage id="summary.performance_mtd" /></div>
            <div className={styles.txt}>US $3,023,174.00</div>
          </Col>
          <Col className={styles['fa-grid-item']}>
            <div className={styles.tit}><FormattedHTMLMessage id="summary.performance_ytd" /></div>
            <div className={styles.txt}>+2.81%</div>
          </Col>
        </Row>
        <Row className={styles['fa-grid-Row']}>
          <Col className={styles['fa-grid-item']}>
            <div className={styles.tit}><FormattedHTMLMessage id="summary.performance_itd" /></div>
            <div className={styles.txt}>US $14,023.72</div>
          </Col>
          <Col className={styles['fa-grid-item']}>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default GridTpl;
