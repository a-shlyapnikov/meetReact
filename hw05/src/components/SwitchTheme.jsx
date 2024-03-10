import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '../redux/themeSlice';
import styles from './SwitchTheme.module.css';

export default function SwitchTheme() {
	const theme = useSelector(state => state.theme.pallete);
	const dispatch = useDispatch();
	return (
		<button
			onClick={() => dispatch(switchTheme(theme))}
			className={`${styles.button} ${
				theme === 'dark' ? styles.dark : styles.light
			}`}
		>
			{' '}
			Toggle theme
		</button>
	);
}
