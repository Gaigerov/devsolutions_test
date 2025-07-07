import axios from 'axios';
import type {FactType} from '../utils/types';

export const fetchFact = async (number: string, type: FactType): Promise<string> => {
  try {
    const url = type === 'date' 
      ? `http://numbersapi.com/${number}/${type}?json` 
      : `http://numbersapi.com/${number}/${type}?json`;
    
    const response = await axios.get(url);
    return response.data.text;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error('Ошибка при получении данных от API');
  }
};