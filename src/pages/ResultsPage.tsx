import React from 'react';
import {useAppSelector} from '../store/hooks';
import FactDisplay from '../components/FactDisplay/FactDisplay';
import {Link} from 'react-router-dom';
import styles from './ResultsPage.module.scss';

const ResultsPage: React.FC = () => {
    const {data} = useAppSelector((state) => state.facts);

    if (!data) {
        return (
            <div className={styles.container}>
                <h2>Данные не найдены</h2>
                <Link to="/" className={styles.backButton}>
                    Вернуться назад
                </Link>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.infoBox}>
                {data.fact.includes('локальные данные') && (
                    <div className={styles.warning}>
                        ⚠️ Не удалось подключиться к серверу. Используем локальные данные.
                    </div>
                )}
                <FactDisplay {...data} />
            </div>

            <Link to="/" className={styles.backButton}>
                Назад к поиску
            </Link>
        </div>
    );
};

export default ResultsPage;
