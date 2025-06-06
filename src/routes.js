import Home from './Home';
import ProjectDetail from './ProjectDetail';
import Resume from './Resume';

const routes = [
    { path: "/", element: <Home /> },
    { path: "/projects/:projectName", element: <ProjectDetail /> }, // Dynamic route
    { path: "/resume", element: <Resume />}
];

export default routes;