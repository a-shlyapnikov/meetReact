import { Link } from 'react-router-dom';
export default function AboutPage() {
	return (
		<>
			<h1>О нас</h1>
			<p>Сидим вот на реакте чет пытаемся делать, роутер вот изуем</p>
			<Link to='/'>На главную</Link>
		</>
	);
}
