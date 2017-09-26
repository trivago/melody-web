import { render } from 'melody-component';
import { initDevTools } from 'melody-devtools';

import MelodyRouter from './components/router';
import 'wicg-focus-ring';
import './components/serviceworker';
import './base.scss';

import Home from './pages/home';
import Documentation from './pages/documentation';

initDevTools();

const Router = MelodyRouter({
    ['/']: Home,
    ['/documentation']: Documentation,
});

render(document.getElementById('root'), Router);