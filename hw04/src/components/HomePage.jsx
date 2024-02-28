import { Link } from 'react-router-dom';

export default function HomePage() {
	return (
		<>
			<h1>Главная страница</h1>
      <Link to='/about'>О нас</Link>
		</>
	);
}
