import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import AboutPage from '../pages/AboutPage';
import Contact from '../pages/Contact';
import Register from '../pages/Register';
import Gallery from '../pages/Gallery';
import Achievements from '../pages/Achievements';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/contact',
                element: <AboutPage />,
            },
           
        ],
    },
]);

export default router;
