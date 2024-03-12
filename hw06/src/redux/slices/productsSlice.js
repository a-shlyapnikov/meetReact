import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
	name: 'products',
	initialState: {
		products: [
			{
				id: 0,
				name: 'Some product 1',
				description: 'description 1',
				price: '10',
				available: true,
			},
			{
				id: 1,
				name: 'Some product 2',
				description: 'description 2',
				price: '12',
				available: false,
			},
			{
				id: 3,
				name: 'Some product 3',
				description: 'description 3',
				price: '15',
				available: true,
			},
		],
	},
	reducers: {
		addProduct(state, { payload }) {
			state.products.push(payload);
		},
		remodeProduct(state, { payload }) {
			state.products = state.products.filter(
				product => product.id !== payload.id
			);
		},
	},
});

export const { addProduct, remodeProduct } = productsSlice.actions;
export default productsSlice.reducer;
