import {useState} from 'react';
import type {FactType} from '../utils/types';

export const useValidation = () => {
    const [error, setError] = useState<string | null>(null);

    const validateInput = (value: string, type: FactType): boolean => {
        if (type === 'date') {
            const dateRegex = /^\d{1,2}\/\d{1,2}$/;
            if (!dateRegex.test(value)) {
                setError('Дата должна быть в формате MM/DD');
                return false;
            }
        } else if (value && !/^\d+$/.test(value)) {
            setError('Число должно быть в виде цифры');
            return false;
        }
        setError(null);
        return true;
    };

    return {error, validateInput};
};
