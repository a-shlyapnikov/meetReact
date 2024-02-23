import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function TemperatureConverter() {
	const [celsius, setCelsius] = useState('');
	const [fahrenheit, setFahrenheit] = useState('');

	const handleCelsiusChange = e => {
		const value = e.target.value;
		setCelsius(value);
		if (isNaN(value) || value === '') {
			setFahrenheit('');
		} else {
			setFahrenheit(Math.round(value * 1.8 + 32));
		}
	};

	const handleFahrenheitChange = e => {
		const value = e.target.value;
		setFahrenheit(value);
		if (isNaN(value) || value === '') {
			setCelsius('');
		} else {
			setCelsius(Math.round((value - 32) / 1.8));
		}
	};

	return (
		<div className='temperature-converter'>
			<TextField
				fullWidth
				id='celsius-field'
				label='Температура в градусах Цельсия'
				variant='filled'
				value={celsius}
				onChange={handleCelsiusChange}
			/>
			<TextField
				fullWidth
				id='fahrenheit-field'
				label='Температура в градусах Фаренгейта'
				variant='filled'
				value={fahrenheit}
				onChange={handleFahrenheitChange}
			/>
		</div>
	);
}
