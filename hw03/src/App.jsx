import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';
import ToggleTheme from './components/ToggleTheme'

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
			<TodoList />
		</ThemeProvider>
	);
}

export default App;
