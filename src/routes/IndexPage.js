import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
     <h2>逼王鬼道</h2>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
