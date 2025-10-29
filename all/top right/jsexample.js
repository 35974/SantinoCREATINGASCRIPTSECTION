var boxOne = document.getElementsByClassName('box')[0];
var running = false;

var toggleTransition = function() {
  if(!running) 
  { 
    boxOne.classList.add('horizTranslate');
  } else {
    boxOne.classList.remove('horizTranslate'); 
  }  

  running = !running;
}




var boxOne3 = document.getElementsByClassName('box3')[0];
var running3 = false;

var toggleTransition = function() {
  if(!running3) 
  { 
    boxOne3.classList.add('horizTranslate');
  } else {
    boxOne3.classList.remove('horizTranslate'); 
  }  

  running3 = !running3;
}