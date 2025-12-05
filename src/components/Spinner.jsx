import React from 'react';
import styles from './Spinner.module.css';

const Spinner = ({ loading }) => {
    return (
        <div className={`${styles.spinnerOverlay} ${!loading ? styles.hidden : ''}`}>
            <div className={styles.spinnerContainer}>
                <div className={styles.spinnerCircle}></div>
                <div className={styles.spinnerCircle}></div>
                <div className={styles.spinnerCircle}></div>
                <div className={styles.spinnerCircle}></div>
            </div>
        </div>
    );
};

export default Spinner;
