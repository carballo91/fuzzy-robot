(function() {
      function changeBackground() {
        var date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            timer,
            shadow = document.getElementById('main'); 
        
        if (seconds < 10) {
          seconds = "0" + seconds
        }
        if (minutes < 10) {
          minutes = "0" + minutes
        }
          
        var background = '#' + hours + minutes + seconds;
        var shadowColor = "15px " + "15px " + "40px " + background;
          shadow.style.borderColor = background;
          shadow.style.boxShadow = shadowColor;
        }
  timer = setInterval(changeBackground, 1000);
}())