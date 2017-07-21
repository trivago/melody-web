import { render } from 'melody-component';
import MelodyRouter from './router';
import './index.scss';

import Home from './home';
import Documentation from './documentation';

const Router = MelodyRouter({
    ['/']: Home,
    ['/documentation']: Documentation,
});

render(document.getElementById('root'), Router);