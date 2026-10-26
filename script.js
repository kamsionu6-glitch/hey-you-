var $=function(i){return document.getElementById(i)},cur='s0';
function go(id){$(cur).classList.remove('on');$(id).classList.add('on');$(id).scrollTop=0;cur=id;
 if(id==='s2')cards();if(id==='s3')nextQ(true)}
function start(){var n=$('nm').value.trim();if(n)document.querySelectorAll('.nmt').forEach(function(e){e.textContent=n+', '});go('s1')}
function cards(){var c=document.querySelectorAll('.card');$('b2').classList.add('hide');
 c.forEach(function(e,i){e.classList.remove('show');setTimeout(function(){e.classList.add('show')},700+i*1100)});
 setTimeout(function(){$('b2').classList.remove('hide')},700+c.length*1100)}
var Q=[['Which thing do I like most about you?',['Your smile','Your personality','Your laugh','Everything']],
['What do I think about most?',['Your voice','Our chats','Your messages','Everything']],
['What makes me smile the fastest?',['Your humor','Your eyes','Seeing your name','Everything']]],qi=-1,lv=3;
function hearts(){$('lives').textContent=['🖤 🖤 🖤','❤️ 🖤 🖤','❤️ ❤️ 🖤','❤️ ❤️ ❤️'][lv]}
function nextQ(r){if(r===true){qi=-1;lv=3}qi++;hearts();
 if(qi>=Q.length){go('s4');return}
 $('qa').classList.remove('hide');$('rv').classList.add('hide');$('q').textContent=Q[qi][0];
 var o=$('opts');o.innerHTML='';Q[qi][1].forEach(function(t){var b=document.createElement('button');b.className='btn';b.textContent=t;b.onclick=function(){pick(t)};o.appendChild(b)})}
function pick(t){var ok=t==='Everything';if(!ok)lv=Math.max(0,lv-1);hearts();
 $('qa').classList.add('hide');$('rv').classList.remove('hide');
 $('rt').textContent=ok?'You know me too well 😭':'Not quite 😭';
 $('ra').textContent=ok?'It was everything.':'The answer was: everything.';
 $('nx').textContent=qi===Q.length-1?'Okay, enough playing →':'Next →'}
setInterval(function(){var h=document.createElement('div');h.className='fh';h.textContent=['❤','💗','💕','🌸'][Math.random()*4|0];
 h.style.left=Math.random()*100+'%';h.style.fontSize=(14+Math.random()*20)+'px';h.style.animationDuration=(7+Math.random()*6)+'s';
 $('fx').appendChild(h);setTimeout(function(){h.remove()},13000)},900);
var cv=$('cf'),cx=cv.getContext('2d'),P=[],run=false;
function size(){cv.width=innerWidth;cv.height=innerHeight}size();addEventListener('resize',size);
function burst(){var E=['❤️','💗','💕','✨','🌸','🎉'];
 for(var i=0;i<90;i++)P.push({x:innerWidth/2,y:innerHeight*.45,vx:(Math.random()-.5)*16,vy:-Math.random()*15-4,e:E[i%6],s:18+Math.random()*16});
 if(!run){run=true;tick()}}
function tick(){cx.clearRect(0,0,cv.width,cv.height);P=P.filter(function(p){return p.y<innerHeight+40});
 P.forEach(function(p){p.vy+=.25;p.x+=p.vx;p.y+=p.vy;p.vx*=.99;cx.font=p.s+'px serif';cx.fillText(p.e,p.x,p.y)});
 if(P.length)requestAnimationFrame(tick);else run=false}
function yes(){go('s7');burst();setTimeout(burst,900);setTimeout(burst,1900)}
