(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("L1EO"),n("c30e"),n("WB5j");var a=function(){function t(t){var e=t.selector,n=t.targetDate;this._selector=e,this._targetDate=n}var e=t.prototype;return e.getTimeLeft=function(){var t=Date.parse(this._targetDate)-Date.parse(new Date);return{total:t,days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),mins:Math.floor(t/1e3/60%60),secs:Math.floor(t/1e3%60)}},e.playClock=function(){var t=this,e=document.querySelector(this._selector),n=e.querySelector('.value[data-value="days"]'),a=e.querySelector('.value[data-value="hours"]'),o=e.querySelector('.value[data-value="mins"]'),r=e.querySelector('.value[data-value="secs"]'),c=setInterval((function(){var e=t.getTimeLeft(t._targetDate);e.total<0?clearInterval(c):(n.innerHTML=e.days,a.innerHTML=("0"+e.hours).slice(-2),o.innerHTML=("0"+e.mins).slice(-2),r.innerHTML=("0"+e.secs).slice(-2))}),1e3)},t}();document.addEventListener("DOMContentLoaded",(function(){new a({selector:"#timer-1",targetDate:new Date("Jul 17, 2021")}).playClock()}));n("JBxO"),n("FdtR");document.addEventListener("DOMContentLoaded",(function(){var t=function(t){return new Promise((function(e){setTimeout((function(){e(t)}),t)}))},e=function(t){return console.log("Resolved after "+t+"ms")};t(2e3).then(e),t(1e3).then(e),t(1500).then(e)}));n("lmye"),n("D/wG"),n("wCa+");document.addEventListener("DOMContentLoaded",(function(){var t=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],e=function(t,e){return new Promise((function(n){n(t.map((function(t){return t.name===e?Object.assign({},t,{active:!t.active}):t})))}))},n=function(t){return console.table(t)};e(t,"Mango").then(n),e(t,"Lux").then(n)})),document.addEventListener("DOMContentLoaded",(function(){var t=function(t){return new Promise((function(e,n){var a,o,r=(a=200,o=500,Math.floor(Math.random()*(o-a+1)+a));setTimeout((function(){Math.random()>.3?e({id:t.id,time:r}):n(t.id)}),r)}))},e=function(t){var e=t.id,n=t.time;console.log("Transaction "+e+" processed in "+n+"ms")},n=function(t){console.warn("Error processing transaction "+t+". Please try again later.")};t({id:70,amount:150}).then(e).catch(n),t({id:71,amount:230}).then(e).catch(n),t({id:72,amount:75}).then(e).catch(n),t({id:73,amount:100}).then(e).catch(n)}))},c30e:function(t,e){var n,a=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],o={startBtn:document.querySelector('button[data-action="start"]'),stopBtn:document.querySelector('button[data-action="stop"]')};setColor=function(){var t,e,n=a[(t=0,e=a.length-1,Math.floor(Math.random()*(e-t+1)+t))];document.body.style.backgroundColor=n},o.startBtn.addEventListener("click",(function(){n=setInterval((function(){return setColor()}),1e3),o.startBtn.disabled=!0})),o.stopBtn.addEventListener("click",(function(){clearInterval(n),o.startBtn.disabled=!1}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.677913f9e4e0ce20e574.js.map