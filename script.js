const ctx = document.getElementById('exemplo').getContext('2d');   

const centroX = 600;
const centroY = 300;
const orbt_sz = 250;       
const orbl_sz = 30;         
const sol_sz = 50;          
const lua_sz = 10;           
const terra_sz = 15;        
const tau = 2 * Math.PI;    
const t_terra = 30;         
const t_lua = 1;            

const sol = new Path2D();
const lua = new Path2D();
const terra = new Path2D();

function init() {
    sol.arc(0,0,sol_sz,0,6.29,false);
    lua.arc(0,0,lua_sz,0,6.29,false);
    terra.arc(0,0,terra_sz,0,6.29,false);
    window.requestAnimationFrame(draw);
}

function draw() {
    
    ctx.fillRect(0, 0, 1200, 600);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.save();

        // terra
        ctx.translate(centroX, centroY);   
        
        const time = new Date();
        ctx.rotate((tau/t_terra) * time.getSeconds() + (tau/(t_terra*1000)) * time.getMilliseconds());
        ctx.translate(250, 0);     
        ctx.fillStyle = 'azure';
        ctx.fill(terra); 

        // lua
        ctx.save();
            ctx.rotate((tau/t_lua) * time.getSeconds() + (tau/(t_lua*1000)) * time.getMilliseconds());
            ctx.translate(0, orbl_sz);
            ctx.fillStyle = 'blue';
            ctx.fill(lua);
  ctx.restore(); 
          ctx.save();
            ctx.rotate((tau/t_lua) * time.getSeconds() + (tau/(t_lua*1000)) * time.getMilliseconds());
            ctx.translate(40, orbl_sz);
            ctx.fillStyle = 'orange';
            ctx.fill(lua);
        ctx.restore(); 

    ctx.restore(); 
    // sol
    ctx.save();
        ctx.translate(centroX, centroY);
        ctx.fillStyle = 'red';
        ctx.fill(sol);
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#fd2';
        ctx.stroke(sol);
    ctx.restore();

    window.requestAnimationFrame(draw);
}

init();
