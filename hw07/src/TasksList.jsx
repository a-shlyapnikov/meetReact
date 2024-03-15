import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './redux/tasksSlice';

export default function TasksList() {
	const { items, status } = useSelector(state => state.tasks);
	const dispatch = useDispatch();
	const tasks = items.map(item => (
		<div key={item.id}
		className='task'>
			<h3>{item.title}</h3>
			<p>Статус: {item.complited ? 'Выполнено' : 'Не выполнено'}</p>
		</div>
	));
	const getTasks = async () => {
		dispatch(fetchTasks());
	};

	useEffect(() => {
		getTasks();
	}, []);
	return (
		<div>
			<h1>Список задач</h1>
			{status === 'error' ? (
				<div>
					<h2>Произошла ошибка😕</h2>
					<p>
						К сожалению, не удалось получить задачи. Попробуйте повторить попыту
						позже
					</p>
				</div>
			) : (
				<div className='task-container'>
					{status === 'loading' ? <div>Загрузка...</div> :  tasks}
				</div>
			)}
		</div>
	);
}
