import DeleteIcon from '@mui/icons-material/Delete';
import {
	Button,
	Card,
	IconButton,
	List,
	ListItem,
	ListItemText,
	TextField,
} from '@mui/material';
import React, { useState } from 'react';

export default function TodoList() {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState('');

	const handleAddTask = () => {
		if (newTask.trim() !== '') {
			setTasks([...tasks, newTask]);
			setNewTask('');
		}
	};

	const handleDeleteTask = index => {
		const updatedTasks = tasks.filter((_, i) => i !== index);
		setTasks(updatedTasks);
	};

	return (
		<div className='center'>
			<h2>Todo</h2>
			<div className='todo-controls'>
				<TextField
					fullWidth
					value={newTask}
					onChange={e => setNewTask(e.target.value)}
					label='Напишите задачу'
				/>
				<Button variant='contained' onClick={handleAddTask}>
					Добавить задачу
				</Button>
			</div>

			<List>
				{tasks.map((task, index) => (
					<Card key={index} style={{ margin: '10px', padding: '10px' }}>
						<ListItem>
							<ListItemText primary={task} />
							<IconButton onClick={() => handleDeleteTask(index)}>
								<DeleteIcon />
							</IconButton>
						</ListItem>
					</Card>
				))}
			</List>
		</div>
	);
}
