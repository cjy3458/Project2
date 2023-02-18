let Links = {
  setColor:function(color){
    let alist = document.querySelectorAll('a');
    let i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}
let Body = {
  setColor:function (color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
function nightDayHandler(self){
  let target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('darkgray');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('white');
  } else {
    Body.setBackgroundColor('#eaeaea');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('black');
  }
}