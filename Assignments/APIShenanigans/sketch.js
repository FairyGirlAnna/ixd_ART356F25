let weather;
let monthName;

function setup() {
  createCanvas(600, 600);
  loadJSON("https://api.open-meteo.com/v1/forecast?latitude=37.7749&longitude=-122.4194&hourly=temperature_2m&current=temperature_2m&timezone=America%2FLos_Angeles&wind_speed_unit=mph&temperature_unit=fahrenheit", gotData);
  textAlign(CENTER, CENTER);
  textSize(32);
}

function gotData(data){
  weather = data;
  console.log("dude");
}

function draw() {
  background(220);
  

  if (weather){
    text("The current temperature is:",width/2,50); 
    text(weather.current.temperature_2m + weather.current_units.temperature_2m ,width/2,100); 
    text("in San Francisco",width/2,150); 

    text("Reported at:",width/2,250); 
    dudeIHateMonthNames(weather.current.time.slice(5,7));
    text(monthName + " " + weather.current.time.slice(8,10) + " " + weather.current.time.slice(0,4),width/2,300);
    
    if (parseInt(weather.current.time.slice(11,13)) > 12){
      text((parseInt(weather.current.time.slice(11,13)) - 12) + weather.current.time.slice(13) + " PM PST",width/2,350);
    } else {
      text(weather.current.time.slice(11) + " AM PST",width/2,350);
    }

  } else {
    text("Loading...",width/2,50); }

}

function dudeIHateMonthNames(month){
  if (month == 1){
    monthName = "January"
  } else if (month == 2){
    monthName = "Febuary"
  } else if (month == 3){
    monthName = "March"
  } else if (month == 4){
    monthName = "April"
  } else if (month == 5){
    monthName = "May"
  } else if (month == 6){
    monthName = "June"
  } else if (month == 7){
    monthName = "July"
  } else if (month == 8){
    monthName = "August"
  } else if (month == 9){
    monthName = "September"
  } else if (month == 10){
    monthName = "October"
  } else if (month == 11){
    monthName = "November"
  } else if (month == 12){
    monthName = "December"
  } else {
    monthName = "A Strange 13th Month"
  }
}