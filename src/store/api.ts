import axios from 'axios';
import type { FactType } from '../utils/types';

const generateLocalFact = (number: string, type: FactType): string => {
  const num = parseInt(number);
  const isNum = !isNaN(num);
  
  const facts = {
    math: isNum 
      ? `Математика: ${number}² = ${num * num}, √${number} ≈ ${Math.sqrt(num).toFixed(2)}`
      : `Математический факт о ${number}`,
    
    date: number.includes('/') 
      ? `История: ${number.split('/').reverse().join('.')} - знаменательная дата`
      : `Исторический факт о ${number}`,
    
    trivia: isNum
      ? `Знаете ли вы? ${number} - ${num % 2 === 0 ? 'четное' : 'нечетное'} число`
      : `Интересный факт о ${number}`
  };
  
  return facts[type] || facts.trivia;
};

export const fetchFact = async (input: string, type: FactType): Promise<string> => {
  const number = input.trim();
  const apiNumber = number === '' ? 'random' : number;
  
  const tryRequest = async (protocol: 'https' | 'http') => {
    try {
      const response = await axios.get(
        `${protocol}://numbersapi.com/${apiNumber}/${type}?json`,
        { timeout: 3000 }
      );
      return response.data?.text;
    } catch {
      return null;
    }
  };

  return (await tryRequest('https')) || 
         (await tryRequest('http')) || 
         generateLocalFact(number || '42', type);
};
