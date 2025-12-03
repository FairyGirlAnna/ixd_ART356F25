let api = "";
let data = "";
let storeddata = "";
let searchquery = "ryan+gosling"

let title = "Pick a category!";
let titles = ["Dog", "Cat", "Spongebob", "Simpsons", "Halloween", "Christmas"];

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textWrap(WORD);
  
}

function search(temptitle){
  api = "http://api.giphy.com/v1/gifs/search?q=" + temptitle + "&api_key=dR9yt211Fo9YH2cZRGeELLyKLGKWLh0W&limit=5";
  console.log(temptitle);
  loadJSON(api, gotData);
  api.done(gotData(data));
  //createImg(storeddata.data[int(random(0,4))].images.original.url);
  
}

function gotData(data){
  let storeddata = data;
  createImg(storeddata.data[int(random(0,4))].images.original.url, 40, 40);
}

function draw() {
  background(10, 50, 30);
  textSize(12);
  for (let index = 0; index < titles.length; index++) {
    fill(0);
    rect(60 + (80*index), 100, 70, 50);
    fill(255);
    text(titles[index] , 95 + (80*(index)), 125,);
    
  }

  textSize(32);
  if (title == "Pick a category!"){
    text (title, width/2, 40); 
  } else{
    text (title + " GIFS", width/2, 40); 
  }
  textSize(16);
  text ("GIF API supplied by Giphy!", width/2, 75); 



//   switch (title) {
//     case "Dog":
      
//       text ("Top tags for " + title + " GIFS:", width/2, 450);
//       break;
    
//     case "Cat":
      
//       text ("Top tags for " + title + " GIFS:", width/2, 450);
//       break;

//     case "Spongebob":
      
//       text ("Top tags for " + title + " GIFS:", width/2, 450);
//       break;

//     case "Simpsons":
      
//       text ("Top tags for " + title + " GIFS:", width/2, 450);
//       break;
    
//     case "Halloween":
      
//       text ("Top tags for " + title + " GIFS:", width/2, 450);
//       break;

//     case "Christmas":
      
//       text ("Top tags for " + title + " GIFS:", width/2, 450);
//       break;

//     default:
//       break;
//   }
}


function mousePressed(){
  if (((mouseX - 60) % 80) > 0 && 70 > ((mouseX - 60) % 80) && mouseX < 530){
    if (150 > mouseY && mouseY > 100){
      let tempselection = int((mouseX - 60) / 80); 
      title = titles[tempselection];
    }
  }
  search(title);
}