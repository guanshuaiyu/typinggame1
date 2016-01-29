window.onload = function(){
	//我的
	var zhe = document.getElementById('zhezhao');
	
	var kuang = document.getElementById('kuang');
	var shuliang =0;
	var ttt = setInterval(function(){
		var kuai = document.createElement('div');
		var x = Math.floor(Math.random()*123);
		kuai.setAttribute('class','duo');
		if(x>64&&x<91||x>96&&x<123){
			kuai.innerHTML=String.fromCharCode(x);
			kuang.appendChild(kuai);
			shuliang++;
		}
		if (shuliang==52) {clearInterval(ttt);}
	},20);
	var i=1;time=0,time1=0;
	var fen = document.getElementById('fen');
	var miao = document.getElementById('miao');
	fen.innerHTML='0'+time1+' '+':';
	miao.innerHTML=' '+'0'+time;
	var kaiguan=true;
	document.onkeydown = function(e){
		var duo = document.getElementsByClassName('duo');
		if (e.shiftKey) {
			if(String.fromCharCode(e.keyCode)==duo[0].innerHTML){
				duo[0].style.display='none';
			}
			if(duo[i-1].style.display=='none'&&(String.fromCharCode(e.keyCode)==duo[i].innerHTML)){
				duo[i].style.display='none'; i++;
			}
		}else{
			if (String.fromCharCode(e.keyCode+32)==duo[0].innerHTML){
				duo[0].style.display='none';
			}
	        if (duo[i-1].style.display=='none'&&(String.fromCharCode(e.keyCode+32)==duo[i].innerHTML)){
	        	duo[i].style.display='none';i++;
	        }
	    }
	    if(kaiguan){
	    	time=1;time1=1;
	    	setInterval(function(){
	    		if (time<10) {miao.innerHTML=' '+'0'+time;time++;}
	    		else if(time>=10){miao.innerHTML=' '+time;time++;}
			if(time==60){time=0;};
	    	},1000);
	    	setInterval(function(){
	    		if(time1<10){fen.innerHTML='0'+time1+':';time1++;}
	    		else{fen.innerHTML=time1+' '+':';time1++;}
	    	},60000);
	    	kaiguan=false;
	    }
        if(i==52){
        	zhe.style.display = 'block';
        	zhe.innerHTML = '游戏结束,您用时:'+fen.innerHTML+miao.innerHTML+'<button id="b1">再来一局</button>';
        	var b1 = document.getElementById('b1');
			zhe.style.zIndex = '100';
			b1.onclick = function(){window.location.reload();}
        }
	}

//老师的
// var sence = document.getElementById('sence'),el,
// 	code,time = 0,hasjishuqi = false,timeID,
// 	time1=document.getElementById('time');
// for (var i = 0; i < 52; i++) {
// 	code = 65 + Math.floor(Math.random()*(122-65));
// 	while(code>=90&&code<=96){
// 		code = 65 + Math.floor(Math.random()*(122-65));
// 	}
// 	el = document.createElement('div');
// 	el.setAttribute('class','key');
// 	el.innerHTML = String.fromCharCode(code);sence.appendChild(el);
// }
// 	var top = sence.firstElementChild;
// document.onkeydown = function(e){
// 	if(e.shiftKey){
// 		if (e.keyCode!==top.innerHTML.charCodeAt(e)) {return;}
// 		else{
// 			if (e.keyCode+32!==top.innerHTML.charCodeAt(e)) {return;}
// 		}
// 	}
// 	if (!hasjishuqi) {
// 		timeID = setInterval(function(){
// 			time++;
// 			time1.innerHTML = time;
// 		},1000);
// 		hasjishuqi = true;
// 	};
// 	top.style.background = '#ffffff';
// 	top = top.nextElementSibling;
// 	if (top==null) {
// 		clearInval(timeID);
// 		alert(time);
// 		location.reload();
// 	}
// }





}
