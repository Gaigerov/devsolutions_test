import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchFact} from './api';
import {type FactType, type FactData} from '../utils/types';

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
    async ({number, type}: {number: string; type: FactType}, {rejectWithValue}) => {
        try {
            const fact = await fetchFact(number, type);
            return {number, type, fact};
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            return rejectWithValue('Ошибка при получении данных');
        }
    }
);

const factsSlice = createSlice({
    name: 'facts',
    initialState,
    reducers: {},
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
                state.error = action.payload as string;
            });
    },
});

export default factsSlice.reducer;
