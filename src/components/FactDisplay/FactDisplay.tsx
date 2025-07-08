import React from 'react';
import type {FactData} from '../../utils/types';
import styles from './FactDisplay.module.scss';

const FactDisplay: React.FC<FactData> = ({number, type, fact}) => {
    const getTypeName = () => {
        switch (type) {
            case 'trivia': return 'Интересный факт';
            case 'math': return 'Математический факт';
            case 'date': return 'Факт о дате';
            default: return '';
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{getTypeName()} о {type === 'date' ? 'дате' : 'числе'} {number}</h2>
            <p className={styles.factText}>{fact}</p>
        </div>
    );
};

export default FactDisplay;
