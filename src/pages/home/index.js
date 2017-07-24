import { createComponent, RECEIVE_PROPS } from 'melody-component';
import { bindEvents, lifecycle, compose } from 'melody-hoc';
import template from './index.twig';

const initialState = {
    navFixed: false,
};

const stateReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case RECEIVE_PROPS:
            return Object.assign(
                {},
                state,
                {changeRoute: payload.changeRoute}
            );
        case 'FIX_NAV':
            return Object.assign(
                {},
                state,
                {navFixed: true}
            );
        case 'UNFIX_NAV':
            return Object.assign(
                {},
                state,
                {navFixed: false}
            );
        default:
            return state;
    }
};

const events = bindEvents({
    
});

const mountCanvas = lifecycle({
    componentDidMount() {
        createMeteoriteShower(this.refs.canvasContainer);
        console.log(this.refs.nav);
        this.scroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
            const canvasBottom = this.refs.canvasContainer.clientHeight - 54;
            if(scrollTop >= canvasBottom && !this.navFixed) {
                this.navFixed = true;
                this.dispatch({type:'FIX_NAV'});
            } else if(scrollTop < canvasBottom && this.navFixed) {
                this.navFixed = false;
                this.dispatch({type:'UNFIX_NAV'});
            }
        }
        window.addEventListener('scroll', this.scroll);
    },
    componentDidUpdate(prevProps, prevState) {
        const {navFixed} = this.getState();
        if(prevState.navFixed && !navFixed) {
            createMeteoriteShower(this.refs.canvasContainer);
        }
    },
    shouldComponentUpdate() {
        console.log('should update');
        return false;
    },
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll);
    }
});

const enhance = compose(events, mountCanvas);

export default enhance(createComponent(template, stateReducer));

function createMeteoriteShower(canvasContainer) {
    if(!canvasContainer) {
        return;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let canvasHeight = canvasContainer.clientHeight;
    let canvasWidth = canvasContainer.clientWidth;
    let shouldAnimate = canvasWidth >= 800;
    let animating;

    const numberOfMeteorites = Math.round(canvasWidth / 12);
    const colours = ['#6eceb2', '#272361'];
    const showerAngle = Math.PI / 3.5;

    canvas.style.position = 'absolute';
    canvas.style.left = canvas.style.top = '0';

    const onResize = () => {
        canvasHeight = canvasContainer.clientHeight;
        canvasWidth = canvasContainer.clientWidth;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        shouldAnimate = canvasWidth >= 800;
        if(!animating) {
            requestAnimationFrame(animate);
        }
    };

    class Meteorite {
        constructor() {
            this.h = 20 + Math.random() * 25;
            this.x = Math.random() * canvasWidth * 1.5;
            this.y = Math.random() * canvasHeight * 1.5;
            this.vx = -1.5;
            this.vy = 1.5;
            this.colour = colours[Math.round(Math.random())];
            this.isCircle = Math.random() < 0.35;
        }

        reset() {
            this.x = Math.random() * canvasWidth * 1.5;
            this.y = -(Math.random() * canvasHeight);
            this.h = 20 + Math.random() * 25;
            this.colour = colours[Math.round(Math.random())];
            this.isCircle = Math.random() < 0.35;
        };
    };

    const meteorites = Array.from({length: numberOfMeteorites}, () => new Meteorite());

    const createLine = (ctx, x, y, h) => {
        const angle = showerAngle * h;
        ctx.beginPath();
        ctx.moveTo(x+2.5, y);
        ctx.arcTo(x+5, y, x+5, y+h, 2.5);
        ctx.arcTo(x+5-angle, y+h, x-angle, y+h, 2.5);
        ctx.arcTo(x-angle, y+h, x-angle, y, 2.5);
        ctx.arcTo(x, y, x+5, y, 2.5);
        ctx.closePath();
    };
    const createCircle = (ctx, x, y, r) => {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 50, false);
        ctx.closePath();
    };

    const animate = () => {
        animating = true;
        ctx.globalAlpha = 0.3;
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        meteorites.forEach(meteorite => {
            meteorite.x += meteorite.vx;
            meteorite.y += meteorite.vy;
            if(meteorite.isCircle === true) {
                createCircle(ctx, meteorite.x, meteorite.y, meteorite.h / 2.5);
            } else {
                createLine(ctx, meteorite.x, meteorite.y, meteorite.h);
            }
            ctx.fillStyle = meteorite.colour;
            ctx.fill();
            if(meteorite.x < -meteorite.h || meteorite.y > canvasHeight + meteorite.h) {
                meteorite.reset();
            }
        });
        if (shouldAnimate === true) {
            requestAnimationFrame(animate);
        } else {
            animating = false;
        }
    };

    onResize();
    window.addEventListener('resize', onResize);
    canvasContainer.appendChild(canvas);
};
