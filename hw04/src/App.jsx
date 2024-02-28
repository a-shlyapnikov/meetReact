import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <HomePage />,
		},
		{
			path: '/about',
			element: <AboutPage />,
		},
		{
			path: '*',
			element: <NotFound />,
		},
	]);
	return (
		<RouterProvider router={router} />
		// <BrowserRouter>
		// 	<Routes>
		// 		<Route exact path='/' element={<HomePage />} />
		// 		<Route path='/about' element={<AboutPage />} />
		// 	</Routes>
		// </BrowserRouter>
	);
}

export default App;
