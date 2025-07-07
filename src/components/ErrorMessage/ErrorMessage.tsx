import React from 'react';
import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({message}) => {
    return message ? (
        <div className={styles.errorContainer}>
            <span className={styles.errorIcon}>⚠️</span>
            <span className={styles.errorText}>{message}</span>
        </div>
    ) : null;
};

export default ErrorMessage;
