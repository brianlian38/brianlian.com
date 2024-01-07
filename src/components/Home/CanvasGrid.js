import React, { useRef, useEffect } from 'react';

const CanvasGrid = () => {
  const canvasRef = useRef(null);
  let ctx, cw, ch, lastX, lastY, dots, resizeTimer;

  const DOT_SMALL = 5;
  const DOT_LARGE = 28;
  const HOVER_RADIUS = 130;
  const DOT_DECAY = 0.3; //Higher -> faster decay
  const GROWTH_DELAY = 0.03;
  let NUM_ROWS, NUM_COLS, NUM_DOTS;

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx = canvas.getContext('2d');

    cw= window.innerWidth;
    ch = window.innerHeight;
    [lastX, lastY] = [null, null];
    dots = [];

    

    function Dot(radius, x, y, hue) {
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.hue = hue;
      this.inHoverRadius = false;
    }

    Dot.prototype.update = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.closePath();

      ctx.fillStyle = '#00be5a';
      ctx.fill();

      this.checkProximity();
      this.decayRadius();
    };

    Dot.prototype.checkProximity = function() {
      let dist = DOT_SMALL;

      if (lastX && lastY) {
        let dX = this.x - lastX;
        let dY = this.y - lastY;
        dist = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));

        if (dist >= HOVER_RADIUS) {
          this.radius = this.radius;
          this.inHoverRadius = false;
        } else {
          this.radius = (DOT_SMALL / 1 + (DOT_LARGE * 1.5 - (DOT_LARGE * dist) / HOVER_RADIUS)) ;
          //this.radius = (DOT_SMALL / 1 + (DOT_LARGE * 1.5 - (DOT_LARGE * dist) / HOVER_RADIUS)) * (dist*GROWTH_DELAY);
          this.inHoverRadius = true;
        }
      } else {
        this.inHoverRadius = false;
      }
    };

    Dot.prototype.decayRadius = function() {
      if (!this.inHoverRadius && this.radius > DOT_SMALL) {
        this.radius = this.radius - DOT_DECAY;
      }
    };

    function addDot(radius, x, y, hue) {
      radius = radius || DOT_SMALL / 2;
      x = x;
      y = y;
      hue = hue || Math.floor(Math.random() * (360 - 1 + 1)) + 1;
      let dot = new Dot(radius, x, y, hue);
      dots.push(dot);
    }

    function init() {
      dots = [];
      for (let row = DOT_LARGE; row <= ch; row += DOT_LARGE * 2) {
        for (let col = DOT_LARGE; col <= cw; col += DOT_LARGE * 2) {
          addDot(DOT_SMALL, col, row);
        }
      }
      draw();
    }

    function draw() {
      ctx.clearRect(0, 0, cw, ch);
      for (let i = 0; i < dots.length; i++) {
        dots[i].update();
      }
      requestAnimationFrame(draw);
    }


    //FIX THE HEIGHT HERE
    function resizeCanvas() {
        cw= window.innerWidth;
        ch = window.innerHeight / 1.7;
      [canvas.width, canvas.height] = [cw, ch];
      NUM_ROWS = Math.min(Math.ceil(ch / (DOT_LARGE * 2)) + 1)
      NUM_COLS = Math.ceil(cw / (DOT_LARGE * 2));
      NUM_DOTS = NUM_ROWS * NUM_COLS;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        init();
      }, 250);
    }

    canvas.addEventListener('mousemove', (e) => {
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mouseout', () => {
      [lastX, lastY] = [null, null];
    });

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    init();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default CanvasGrid;
