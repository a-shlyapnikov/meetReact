import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		pallete: 'dark',
	},
	reducers: {
		switchTheme(state) {
			state.pallete = state.pallete === 'dark' ? 'light' : 'dark';
		},
	},
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
