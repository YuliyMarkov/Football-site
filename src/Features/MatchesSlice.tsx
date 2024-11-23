import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Match {
  id: number;
  homeTeam: { name: string };
  awayTeam: { name: string };
  score: { fullTime: { homeTeam: number | null; awayTeam: number | null } };
}

export interface MatchesState {
  matches: Match[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: MatchesState = {
  matches: [],
  status: 'idle',
  error: null,
};

export const fetchMatches = createAsyncThunk<Match[], void>(
  'matches/fetchMatches',
  async () => {
    const response = await axios.get('/api/matches');
    return response.data.matches; // Убедитесь, что API возвращает корректный формат данных
  }
);

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.matches = action.payload;
      })
      .addCase(fetchMatches.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch matches';
      });
  },
});

export default matchesSlice.reducer;
