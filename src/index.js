import { render } from 'melody-component';
import MelodyRouter from './components/router';
import './components/serviceworker';
import './base.scss';

import Home from './pages/home';
import Documentation from './pages/documentation';

const Router = MelodyRouter({
    ['/']: Home,
    ['/documentation']: Documentation,
});

render(document.getElementById('root'), Router);