import React, {useState} from 'react';
import {type FactType} from '../../utils/types';
import {useValidation} from '../../hooks/useValidation';
import styles from './FactForm.module.scss';

interface FactFormProps {
    onSubmit: (number: string, type: FactType) => void;
    loading: boolean;
}

const FactForm: React.FC<FactFormProps> = ({onSubmit, loading}) => {
    const [number, setNumber] = useState('');
    const [type, setType] = useState<FactType>('trivia');
    const {error, validateInput} = useValidation();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateInput(number, type)) {
            onSubmit(number || 'random', type);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label>
                    Число (оставьте пустым для случайного):
                    <input
                        type="text"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder={type === 'date' ? "MM/DD" : "Введите число"}
                    />
                </label>
            </div>

            <div className={styles.radioGroup}>
                <label>
                    <input
                        type="radio"
                        value="trivia"
                        checked={type === 'trivia'}
                        onChange={() => setType('trivia')}
                    />
                    Trivia
                </label>

                <label>
                    <input
                        type="radio"
                        value="math"
                        checked={type === 'math'}
                        onChange={() => setType('math')}
                    />
                    Math
                </label>

                <label>
                    <input
                        type="radio"
                        value="date"
                        checked={type === 'date'}
                        onChange={() => setType('date')}
                    />
                    Date
                </label>
            </div>

            {error && (
                <div className={styles.error}>
                    {error.includes('CORS') || error.includes('сети') || error.includes('сервер')
                        ? 'Ошибка соединения с сервером. Попробуйте позже.'
                        : error}
                </div>
            )}

            <button
                type="submit"
                disabled={loading}
                className={styles.submitButton}
            >
                {loading ? 'Загрузка...' : 'Получить факт'}
            </button>
        </form>
    );
};

export default FactForm;
