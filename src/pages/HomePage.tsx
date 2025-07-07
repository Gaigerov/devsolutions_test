import React from 'react';
import FactForm from '../components/FactForm/FactForm';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {getFact} from '../store/factsSlice';
import {useNavigate} from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import styles from './HomePage.module.scss';
import type {FactType} from '../utils/types';

const HomePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {loading, error} = useAppSelector((state) => state.facts);

    const handleSubmit = (number: string, type: FactType) => {
        dispatch(getFact({number, type}))
            .unwrap()
            .then(() => navigate('/results'))
            .catch(() => { });
    };

    return (
        <div className={styles.pageContainer}>
            <h1>Узнай интересный факт о числе</h1>
            <FactForm onSubmit={handleSubmit} loading={loading} />
            {error && <ErrorMessage message={error} />}
        </div>
    );
};

export default HomePage;
