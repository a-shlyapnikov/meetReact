import { useSelector } from 'react-redux';
import styles from './App.module.css';
import SwitchTheme from './components/SwitchTheme';

function App() {
	const theme = useSelector(state => state.theme.pallete);
	return (
		<div
			className={`${styles.App} ${
				theme === 'dark' ? styles.dark : styles.light
			}`}
		>
			<SwitchTheme />
		</div>
	);
}

export default App;
