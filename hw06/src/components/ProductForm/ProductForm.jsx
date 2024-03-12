import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/slices/productsSlice';
import styles from './ProductForm.module.css';

export default function ProductForm() {
	const dispatch = useDispatch();
	const initialState = {
		id: new Date().getMilliseconds(),
		name: '',
		description: '',
		price: '',
		available: true,
	};
	const [form, setForm] = useState({
		id: new Date().getMilliseconds(),
		name: '',
		description: '',
		price: '',
		available: true,
	});

	return (
		<div className={styles.formWrapper}>
			<form className={styles.form}>
				<input
					type='text'
					id='name'
					value={form.name}
					placeholder='Product name'
					onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
				/>
				<input
					type='text'
					id='description'
					value={form.description}
					placeholder='Description'
					onChange={e =>
						setForm(prev => ({ ...prev, description: e.target.value }))
					}
				/>
				<input
					type='text'
					id='price'
					value={form.price}
					placeholder='Price'
					onChange={e => setForm(prev => ({ ...prev, price: e.target.value }))}
				/>
				<label htmlFor='available'>
					Available
					<input
						type='checkbox'
						id='available'
						value={form.available}
						checked={form.available}
						onChange={e =>
							setForm(prev => ({ ...prev, available: e.target.checked }))
						}
					/>
				</label>
				<button
					onClick={e => {
						e.preventDefault();
						dispatch(addProduct(form));
						setForm(initialState);
					}}
				>
					Add product
				</button>
			</form>
		</div>
	);
}
