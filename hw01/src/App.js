import './App.scss';
import Message from './components/Message/Message';
export default function App() {
	return (
		<div className='App'>
			<Message text='Hello from first component' />
			<Message text='Second message' />
		</div>
	);
}
