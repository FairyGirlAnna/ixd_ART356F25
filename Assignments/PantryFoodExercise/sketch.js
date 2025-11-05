let data;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQa8r4TiMbVsOz2jtuGZEOAbOqF-8_3BPDyoSZRqq5yh09i56UqyOj0FoHZ4L6aDkvvYRQ6EuUOqFM-/pub?output=csv";
let datatype = "Unchosen";
let datatypes = ["Food", "Calories", "Total Fat", "Cholesterol", "Sodium", "Carbs", "Protein", "Short Name"];
let circlediameter = [];

function preload(){
  data = loadTable(url, "csv", "header");
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textWrap(WORD);
}

function draw() {
  background(10, 50, 30);
  print(mouseX, mouseY);
  textSize(12);
  for (let index = 0; index < datatypes.length-2; index++) {
    fill(0);
    rect(60 + (80*index), 100, 70, 50);
    fill(255);
    text(datatypes[index+1], 95 + (80*(index)), 125,);
    
  }

  //title
  textSize(32);
  if (datatype == "Unchosen"){

    text ("Choose an option!", width/2, 40); 

  } else{

    text (datatype +" in pantry items:", width/2, 40);


  textSize(16);
  if (data){
    let rowcount = data.rows.length;
    let names = data.getColumn("Food");
    let shortnames = data.getColumn("Short Name");
    let cal = data.getColumn(datatype);
    circlediameter.length = 0;
    // prep variables & clear array when finished

    for (let i = 0; i < datatypes.length-2; i++) {
      text(names[i-1], 100*i, 250, 1);
      text(cal[i-1], 100*i, 350, 1);
      fill(255);
      
      let modifier = 100/max(cal); 
      circlediameter.push(cal[i] * modifier);
      circle((100*i)+100, 450, circlediameter[i]);
      
  }
  
  }
  }





  //display bars
  // if (data){
  //   let rowcount = data.rows.length
  //   let names = data.getColumn("Food")
  //   let cal = data.getColumn(datatype)

  //   for (let i = 0; i < rowcount; i++) {
  //     textSize(24);
  //     text(names[i], 50, (60*i) + 90,)
  //     rect(50, (60*i) + 100, cal[i], 10)

  //     textSize(16);
  //     text(cal[i], (parseInt(cal[i])+25), 120+(60*i));
  //   }
  // }
}


function mousePressed(){
  if (((mouseX - 60) % 80) > 0 && 70 > ((mouseX - 60) % 80) && mouseX < 530){
    if (150 > mouseY && mouseY > 100){
      let tempselection = int((mouseX - 60) / 80); 
      datatype = datatypes[tempselection+1];
    }
  }
}