import React from 'react';
import FactForm from '../components/FactForm/FactForm';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {useNavigate} from 'react-router-dom';
import styles from './HomePage.module.scss';
import type {FactType} from '../utils/types';
import {getFact} from '../store/factsSlice';

const HomePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {loading} = useAppSelector((state) => state.facts);

    const handleSubmit = (number: string, type: FactType) => {
        dispatch(getFact({number, type}))
            .unwrap()
            .then(() => navigate('/results'));
    };

    return (
        <div className={styles.pageContainer}>
            <h1>Узнай интересный факт о числе</h1>
            <FactForm onSubmit={handleSubmit} loading={loading} />
        </div>
    );
};

export default HomePage;
