import toolbox from 'sw-toolbox';

const bypassSW = false;
const DEBUG = false;

if(!bypassSW) {
    if(!DEBUG) {
        toolbox.options.debug = true;
    }

    toolbox.precache([
        '/',
        '/sw.js',
        'main.js',
        'main.css',
        'manifest.json'
    ]);

    toolbox.router.get('/(.*)', toolbox.fastest);
}