import React from 'react';
// @ts-ignore
import styles from './LoaderScreen.module.css'

const Loader: React.FC = () => {
    return (
        <div className={styles.loader}>
            {/*<div className={styles.circleBorder}>*/}
            {/*    <div className={styles.circleCore}></div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Loader;
