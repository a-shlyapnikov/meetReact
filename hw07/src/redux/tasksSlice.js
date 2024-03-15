import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk(
	'tasks/fetchTasksStatus',
	async () => {
		const response = await fetch(
			'https://65eadeb143ce16418932abe2.mockapi.io/tasks'
		);
		const data = await response.json();
		return  data;
	}
);



const initialState = {
	items: [],
	status: 'loading', //loading, success, error
};

const tasksSlise = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		setTasks(state, action) {
			state.items = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTasks.pending, state => {
				state.status = 'loading';
				state.items = [];
			})
			.addCase(fetchTasks.fulfilled, (state, action) => {
				state.items = action.payload;
				state.status = 'success';
			})
			.addCase(fetchTasks.rejected, state => {
				state.status = 'error';
				state.items = [];
			});
	}
});

export const { setTasks } = tasksSlise.actions;
export default tasksSlise.reducer;
