import React, { FunctionComponent } from 'react';
import styles from './index.less'
interface OwnProps {}

type Props = OwnProps;

const TestComp: FunctionComponent<Props> = () => {

  return (<div className={styles.wrap}>
      this is a 方块组件
  </div>);
};

export default TestComp;
