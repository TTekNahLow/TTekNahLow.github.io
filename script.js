const canvas = document.getElementById('canva-1');
const ctx = canvas.getContext('2d');

const centroX= 600;
const centroY= 300;
const orbt_sz=250;
const orbl_sz=30;
const sol_sz=50;
const lua_sz=5;
const terra_sz=15;

const tau = 2* Math.PI;
const tempo_terra = 30;
const tempo_lua = 3;

const sol = new Path2D();
const lua = new Path2D();
const terra = new Path2D();

function init(){
    sol.arc(0,0,sol_sz,0,tau,false);
    lua.arc(0,0,lua_sz,0,tau,false);
    terra.arc(0,0,terra_sz,0,tau,false);
    window.requestAnimationFrame(draw);

}

function draw(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, 1200, 600);

    ctx.save();
    ctx.translate(centroX, centroY);
    ctx.fillStyle = "orange";
    ctx.fill(sol);
    ctx.restore();

    ctx.save();
    ctx.translate(centroX, centroY);

    const time = new Date();
    ctx.rotate( (tau/tempo_terra) * time.getSeconds() + (tau/(tempo_terra*1000) * time.getMilliseconds()) );
    ctx.translate(orbt_sz,0);
    ctx.fillStyle="#7cf";
    ctx.fill(terra);
    ctx.restore();

    const time_ = new Date();
    ctx.rotate( (tau/tempo_lua) * time_.getSeconds() + (tau/(tempo_lua*100) * time_.getMilliseconds()) );
    ctx.translate(orbl_sz,0);
    ctx.fillStyle="gray";
    ctx.fill(lua);
    ctx.restore();


    window.requestAnimationFrame(draw);

}

init();     