import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TemperatureConverter from './components/TemperatureConverter';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<TemperatureConverter />
			<main>This app is using the dark mode</main>
		</ThemeProvider>
	);
}

export default App;
