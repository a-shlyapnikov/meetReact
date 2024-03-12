import { useDispatch, useSelector } from 'react-redux';
import styles from './ProductList.module.css';
import { remodeProduct } from '../../redux/slices/productsSlice'
export default function ProductList() {
	const products = useSelector(state => state.products.products);
	const dispatch = useDispatch();

	return (
		<div className={styles.productBox}>
			{products.map(product => (
				<div key={product.id} className={styles.product}>
					<h3>{product.name}</h3>
					<p>{product.description}</p>
					<p>{product.price}$</p>
					<p>{product.available ? 'availabe' : 'unavailable'}</p>
					<button onClick={() => {dispatch(remodeProduct(product))}}>Remove</button>
				</div>
			))}
		</div>
	);
}
