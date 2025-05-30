let state = "home";
let characters = [
  "Ecological King",
  "Economical Businessman",
  "Cultural Diva",
  "Social Queen",
];
let selectedCharacter = null;

let hairOptions = ["1", "2", "3"];
let outfitOptions = ["1", "2", "3"];
let hairIndex = 0;
let outfitIndex = 0;

let characterImages = {};
let hairImages = [];
let outfitImages = [];

let fileCount = 12;
let optionsPerCharacter = 3;
let hairOffset = 0;


let fileCount2 = 12;
let optionsPerCharacter2 = 3;
let outfitOffset = 0;

function preload(){

  for (let i = 0; i < fileCount; i++) {
    let filename = "hair/hair" + (i + 1) + ".png";
    hairImages[i] = loadImage(filename);
  }
 
    for (let i = 0; i < fileCount; i++) {
    let filename = "outfit/outfit" + (i + 1) + ".png";
    outfitImages[i] = loadImage(filename);
  }
    characterImages["Ecological King"] = loadImage("character/character1.png");
    characterImages["Economical Businessman"] = loadImage("character/character2.png");
    characterImages["Cultural Diva"] = loadImage("character/character3.png");
    characterImages["Social Queen"] = loadImage("character/character4.png");
}

function setup() {
  createCanvas(400, 600);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);

  if (state === "home") {
    drawHomeScreen();
  } else if (state === "customise") {
    drawCustomizeScreen();
  }
}


function drawHomeScreen() {
  textSize(22);
  fill(0);
  text("Choose Your Character", width / 2, 60);

  for (let i = 0; i < characters.length; i++) {
    let y = 120 + i * 60;
    textSize(16);
    fill(255,224,1,50);
    rect(100, y, 200, 40,5);
    fill(0);
    text(characters[i], 200, y + 20);
  }
}


function drawCustomizeScreen() {
  textSize(22);
  fill(0);
  text("Customise " + selectedCharacter, width / 2, 60);


  let charImg = characterImages[selectedCharacter];
  if (charImg) {
    image(charImg, 5, 0, 380, 570);
  }
  let outfitImg = outfitImages[outfitIndex];
  if (outfitImg) {
    image(outfitImg, 5, 0, 380, 570);
  }
  let hairImg = hairImages[hairIndex];
  if (hairImg) {
    image(hairImg, 5, 0, 380, 570);
  }


  // Hair Section
  drawArrow(50, 110, "<");
  drawArrow(320, 110, ">");

  // Outfit Section
  drawArrow(50, 300, "<");
  drawArrow(320, 300, ">");

  // Back Button
  fill(255,224,1,50);
  rect(15, 15, 60, 30,5);
  fill(0);
  textSize(16);
  text("Back", 45, 30);

  //save button
  fill(255,224,1,50);
  rect(300, 500, 60, 30,5);
  fill(0);
  textSize(16);
  text("Save", 315,515, 30);
}

function drawArrow(x, y, label) {
  fill(255,224,1,50);
  rect(x, y, 30, 30,5);
  fill(0);
  textSize(18);
  text(label, x + 15, y + 15);
}

function mousePressed() {
  if (state === "home") {
    for (let i = 0; i < characters.length; i++) {
      let y = 120 + i * 60;
      if (mouseX > 100 && mouseX < 300 && mouseY > y && mouseY < y + 40) {
        selectedCharacter = characters[i];
        state = "customise";
        hairOffset = i * 3;
        hairIndex = hairOffset;
        outfitOffset = i * 3;
        outfitIndex = outfitOffset;
      }
    }
 
  } if (state === "customise") {
    // Back button
    if (mouseX > 20 && mouseX < 90 && mouseY > 20 && mouseY < 50) {
      state = "home";
      selectedCharacter = null;
    }


    // Hair arrows
    if (mouseX > 50 && mouseX < 80 && mouseY > 110 && mouseY < 140) {
      hairIndex--;
      if (hairIndex < hairOffset) {
        hairIndex = hairOffset + (optionsPerCharacter - 1);
      }
      console.log("previous hair");
    }
    if (mouseX > 320 && mouseX < 350 && mouseY > 110 && mouseY < 140) {
      hairIndex++;
      if (hairIndex > hairOffset + (optionsPerCharacter - 1) ) {
        hairIndex = hairOffset;
      }

      console.log("next hair");
    }

    // Outfit arrows
    if (mouseX > 50 && mouseX < 80 && mouseY > 300 && mouseY < 330) {
      outfitIndex--;
       console.log("prev outfit");
      if (outfitIndex < outfitOffset) {
        outfitIndex = outfitOffset + (optionsPerCharacter2 - 1);
     
      }
    }
    if (mouseX > 320 && mouseX < 350 && mouseY > 300 && mouseY < 330){  
      outfitIndex++;
      console.log("next outfit");
      if (outfitIndex > outfitOffset + (optionsPerCharacter2 - 1) ) {
       outfitIndex = outfitOffset;
      }
     }

    if (mouseX > 250 && mouseX < 350 && mouseY > 482 && mouseY < 518) {
    saveCanvas('myCharacter', 'png');
    }  
  }
}

