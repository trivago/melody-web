export function createMeteoriteShower(canvasContainer) {
  if (!canvasContainer) return;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  let canvasHeight = canvasContainer.clientHeight;
  let canvasWidth = canvasContainer.clientWidth;
  let shouldAnimate = canvasWidth >= 900;
  let animating;

  const numberOfMeteorites = Math.round(canvasWidth / 25);
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
    if (!animating) {
      requestAnimationFrame(animate);
    }
  };

  class Meteorite {
    constructor() {
      this.h = 25 + Math.random() * 25;
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
      this.isCircle = Math.random() < 0.15;
    };
  };

  const meteorites = Array.from({ length: numberOfMeteorites }, () => new Meteorite);

  const createLine = (ctx, x, y, h) => {
    const angle = showerAngle * h;
    ctx.beginPath();
    ctx.moveTo(x + 5, y);
    ctx.arcTo(x + 10, y, x + 10, y + h, 5);
    ctx.arcTo(x + 10 - angle, y + h, x - angle, y + h, 5);
    ctx.arcTo(x - angle, y + h, x - angle, y, 5);
    ctx.arcTo(x, y, x + 10, y, 5);
    ctx.closePath();
  };
  const createCircle = (ctx, x, y, r) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 80, false);
    ctx.closePath();
  };

  const animate = () => {
    animating = true;
    ctx.globalAlpha = 0.3;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    meteorites.forEach(meteorite => {
      meteorite.x += meteorite.vx;
      meteorite.y += meteorite.vy;
      if (meteorite.isCircle) {
        createCircle(ctx, meteorite.x, meteorite.y, meteorite.h / 1.8);
      } else {
        createLine(ctx, meteorite.x, meteorite.y, meteorite.h);
      }
      ctx.fillStyle = meteorite.colour;
      ctx.fill();
      if (meteorite.x < -meteorite.h || meteorite.y > canvasHeight + meteorite.h) {
        meteorite.reset();
      }
    });
    if (shouldAnimate) {
      requestAnimationFrame(animate);
    } else {
      animating = false;
    }
  };

  onResize();
  window.addEventListener('resize', onResize);
  canvasContainer.appendChild(canvas);
};