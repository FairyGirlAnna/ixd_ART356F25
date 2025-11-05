let data;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQa8r4TiMbVsOz2jtuGZEOAbOqF-8_3BPDyoSZRqq5yh09i56UqyOj0FoHZ4L6aDkvvYRQ6EuUOqFM-/pub?gid=0&single=true&output=csv";
let datatype = "Carbs"
//Food, Calories, Sugar, Carbs, Sodium, Protein

function preload(){
  data = loadTable(url, "csv", "header");
}

function setup() {
  createCanvas(600, 600);
  fill(255);
}

function draw() {
  background(10, 50, 30);

  //title
  textAlign(CENTER, CENTER);
  textSize(32);
  text (datatype +" in pantry items:", width/2, 40);
  textAlign(LEFT, CENTER);

  //display bars
  if (data){
    let rowcount = data.rows.length
    let names = data.getColumn("Food")
    let cal = data.getColumn(datatype)

    for (let i = 0; i < rowcount; i++) {
      textSize(24);
      text(names[i], 50, (60*i) + 90,)
      rect(50, (60*i) + 100, cal[i], 10)

      textSize(16);
      text(cal[i], (parseInt(cal[i])+25), 120+(60*i));
    }
  }
}
