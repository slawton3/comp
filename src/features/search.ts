import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
    searchText: string;
}

const initialState: SearchState = {
    searchText: '',
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        updateSearchText(state, action: PayloadAction<string>) {
            state.searchText = action.payload.toLowerCase();
        }
    }
})

export const { updateSearchText } = searchSlice.actions;

export default searchSlice.reducer;