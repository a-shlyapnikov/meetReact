import { useState } from 'react';
import './CommentList.css';

export default function CommentsList(props) {
	const [comments, setComments] = useState([
		{ id: 1, text: 'Это первый комментарий' },
		{ id: 2, text: 'Это второй комментарий' },
		{ id: 3, text: 'Это третий комментарий' },
	]);
	const handleClick = id => {
		setComments(comments.filter(comment => comment.id !== id));
	};
	return (
		<ul>
			{comments.map(comment => (
				<li key={comment.id}>
					<p>{comment.text}</p>
					<button onClick={() => handleClick(comment.id)}>
						Удалить комментарий
					</button>
				</li>
			))}
		</ul>
	);
}
