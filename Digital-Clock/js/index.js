function clock(){
  var full_date = new Date();
  var hours = full_date.getHours();
  var mins = full_date.getMinutes();
  var secs = full_date.getSeconds();
  if(hours < 10){
    hours = '0'+hours;
  }
  if(mins < 10){
    mins = '0'+mins;
  }
  if(secs < 10){
    secs = '0'+secs;
  }
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = ':'+mins;
  document.getElementById('seconds').innerHTML = ':'+secs;
}

setInterval(clock, 1000);
