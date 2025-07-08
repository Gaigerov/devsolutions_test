import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchFact} from './api';
import type {FactType, FactData} from '../utils/types';

interface FactsState {
    data: FactData | null;
    loading: boolean;
    error: string | null;
}

const initialState: FactsState = {
    data: null,
    loading: false,
    error: null,
};

export const getFact = createAsyncThunk(
    'facts/getFact',
    async ({number, type}: {number: string; type: FactType}) => {
        const fact = await fetchFact(number, type);
        return {number, type, fact};
    }
);

const factsSlice = createSlice({
    name: 'facts',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFact.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFact.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getFact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Ошибка при получении данных';
            });
    },
});

export const {clearError} = factsSlice.actions;
export default factsSlice.reducer;
