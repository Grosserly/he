!function(t){function o(t){var o=(t=(t=(t=t.replace(/left|top/g,"0px")).replace(/right|bottom/g,"100%")).replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2")).match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);return[parseFloat(o[1],10),o[2],parseFloat(o[3],10),o[4]]}if(!document.defaultView||!document.defaultView.getComputedStyle){var n=jQuery.curCSS;jQuery.curCSS=function(t,o,i){if("background-position"===o&&(o="backgroundPosition"),"backgroundPosition"!==o||!t.currentStyle||t.currentStyle[o])return n.apply(this,arguments);var r=t.style;return!i&&r&&r[o]?r[o]:n(t,"backgroundPositionX",i)+" "+n(t,"backgroundPositionY",i)}}var i=t.fn.animate;t.fn.animate=function(t){return"background-position"in t&&(t.backgroundPosition=t["background-position"],delete t["background-position"]),"backgroundPosition"in t&&(t.backgroundPosition="("+t.backgroundPosition),i.apply(this,arguments)},t.fx.step.backgroundPosition=function(n){if(!n.bgPosReady){var i=t.curCSS(n.elem,"backgroundPosition");i||(i="0px 0px"),i=o(i),n.start=[i[0],i[2]];var r=o(n.options.curAnim.backgroundPosition);n.end=[r[0],r[2]],n.unit=[r[1],r[3]],n.bgPosReady=!0}var e=[];e[0]=(n.end[0]-n.start[0])*n.pos+n.start[0]+n.unit[0],e[1]=(n.end[1]-n.start[1])*n.pos+n.start[1]+n.unit[1],n.elem.style.backgroundPosition=e[0]+" "+e[1]}}(jQuery);