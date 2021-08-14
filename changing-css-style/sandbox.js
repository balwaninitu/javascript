const title = document.querySelector('h1');
//title.setAttribute('style', 'font:Bold');
//override second time 
//title.setAttribute('style', 'margin:20px');

console.log(title.style.color);

//change attribute directly without using setAttribute
title.style.margin = '50px';
//only overide color margin still there
title.style.color = 'red';
title.style.fontSize ='60px';
//to remove property just put empty string
title.style.margin = '';




