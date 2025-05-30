        // GLOBAL VIARIABLES!

let particles=[];
const num= 5;
const noiseScale= 0.001;

let questionsAmount = 6;
let questionNumber = 0;
  
let scoreSocial = 0;
let scoreEcological = 0;
let scoreCultural = 0;
let scoreEconomical = 0;

let characterCreatorButton;


        // QUESTIONS!

  let questionContent = [
    
    "1/6 What is sustainable to you?", 
    
    "2/6 Why would you use public transport?", 
    
    "3/6 Why should we have bike-friendly cities?",
  
    "4/6 What does a sustainable future look like?",
  
    "5/6 What is most important to you?",
  
    "6/6 What would you want in a partner?"];


        // ANSWERS!

        // The first answer in each variable is for the first question, the second answer in each variable is for the second question and so on.

  let answerOneContent = [
    
    "When everyone can take part in society, and get access to what they need.", 
    
    "To spend time with other people", 
    
    "To get equal access to transportation for all social groups.",
  
    "A future where everyone is seen and taken care of.",
  
    "Friends",
  
    "That they are kind to people they do not know."];
  let answerOne;

  let answerTwoContent = [
    
    "Taking care of the planet and our natural resources.", 
    
    "To save resources and decrease the use of fossil fuels.", 
    
    "To reduce air pollution and reliance on fossil fuels",
  
    "A future in which we are mindful of environmental impact.",
  
    "Nature",
  
    "That they know how to garden."];
  let answerTwo;

  let answerThreeContent = [
    
    "Taking care of, and remembering, our shared history and culture.", 
    
    "To experience local ways of living.", 
    
    "To encourage people to get to know each other.",
  
    "A future where we can create and listen to others creations.",
  
    "Art",
  
    "That they are creative."];
  let answerThree;

  let answerFourContent = [
    
    "Taking care to grow wealth and opportunities responsibly.", 
    
    "To save money and resources.", 
    
    "To have people see, and go into, local businesses that they pass by.",
  
    "A future where everyone has equal opportunities economically.",
  
    "Money",
  
    "That they're rich."];
  let answerFour;



        // 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(217, 217, 100);
  rectMode(CENTER);
  
  for(let i = 0; i < num; i++){
  particles.push(createVector(random(width), random(height)));
  }
  
  textFont('Noto Sans');
  textSize(25);
  textAlign(CENTER);
  
  setupQuestions();
}

function setupQuestions() {
    if (questionNumber < questionsAmount) {
    answerOne = createButton(answerOneContent[questionNumber]);
    answerTwo = createButton(answerTwoContent[questionNumber]);
    answerThree = createButton(answerThreeContent[questionNumber]);
    answerFour = createButton(answerFourContent[questionNumber]);
  }
}

function draw() {
  background(217, 217, 100, 255);
  noStroke();
  fill(0);
  
  for(let i = 0; i < num; i++){
  let p= particles[i];
  circle(p.x, p.y, 100);
  let n= noise (p.x * noiseScale, p.y * noiseScale);
  p.x += cos(n);
  p.y +=sin(n);
  if(!onScreen(p)){
    p.x= -100;
    p.y= random(100, height-100);
    }
  }
  
  fill(255);
  stroke(0, 255);
  strokeWeight(4);
  
  if (questionNumber < questionsAmount) {

  text(questionContent[questionNumber], width/2, height*0.1, width*0.9);
  
  answerOne.position(width/2, height*0.25);
  answerOne.mousePressed(socialAnswer);
  answerTwo.position(width/2, height*0.45);
  answerTwo.mousePressed(ecologicalAnswer);
  answerThree.position(width/2, height*0.65);
  answerThree.mousePressed(culturalAnswer);
  answerFour.position(width/2, height*0.85);
  answerFour.mousePressed(economicalAnswer);
  } else {
    text("You scored:", width/2, height*0.1);
    text("🙌 " + scoreSocial + " social points! 🙌", width/2, height*0.2);
    text("🌿 " + scoreEcological + " ecological points! 🌿", width/2, height*0.3);
    text("🎭 " + scoreCultural + " cultural points! 🎭", width/2, height*0.4);
    text("💸 " + scoreEconomical + " economical points! 💸", width/2, height*0.5);
    
    if (scoreSocial > scoreEcological && scoreSocial > scoreCultural && scoreSocial > scoreEconomical) {
      characterCreatorButton = createButton("🙌 SOCIAL KING >>");
      characterCreatorButton.style("font-family", "Rock Salt");
      characterCreatorButton.style("font-size", "40");
      characterCreatorButton.position(width/2, height*0.7);
      characterCreatorButton.mousePressed(gotoLink);
    } else if (scoreEcological > scoreSocial && scoreEcological > scoreCultural && scoreEcological > scoreEconomical) {
      characterCreatorButton = createButton("🌿 ECOLOGICAL QUEEN >>");
      characterCreatorButton.style("font-family", "Rock Salt");
      characterCreatorButton.style("font-size", "40");
      characterCreatorButton.position(width/2, height*0.7);
      characterCreatorButton.mousePressed(gotoLink);
    } else if (scoreCultural > scoreSocial && scoreCultural > scoreEcological && scoreCultural > scoreEconomical) {
      characterCreatorButton = createButton("🎭 CULTURAL DIVA >>");
      characterCreatorButton.style("font-family", "Rock Salt");
      characterCreatorButton.style("font-size", "40");
      characterCreatorButton.position(width/2, height*0.7);
      characterCreatorButton.mousePressed(gotoLink);
    } else if (scoreEconomical > scoreSocial && scoreEconomical > scoreEcological && scoreEconomical > scoreCultural) {
      characterCreatorButton = createButton("💸 ECONOMICAL BUSINESS MAN >>");
      characterCreatorButton.style("font-family", "Rock Salt");
      characterCreatorButton.style("font-size", "40");
      characterCreatorButton.position(width/2, height*0.7);
      characterCreatorButton.mousePressed(gotoLink);
    } else {
      characterCreatorButton = createButton("⚖️ BALANCED PRINCE >>");
      characterCreatorButton.style("font-family", "Rock Salt");
      characterCreatorButton.style("font-size", "40");
      characterCreatorButton.position(width/2, height*0.7);
      characterCreatorButton.mousePressed(gotoLink);
    }
    
    answerOne.hide();
    answerTwo.hide();
    answerThree.hide();
  }
  

}

function socialAnswer() {
  scoreSocial++;
  increaseQuestion();
}

function ecologicalAnswer() {
  scoreEcological++;
  increaseQuestion();
}

function culturalAnswer() {
  scoreCultural++;
  increaseQuestion();
}

function economicalAnswer() {
  scoreEconomical++;
  increaseQuestion();
}

function increaseQuestion() {
  //clear();

  answerOne.remove();
  answerTwo.remove();
  answerThree.remove();
  answerFour.remove();

  questionNumber++;
  
  setupQuestions();
  
}

function onScreen(v){
  return v.x >= -110 && v.x <= width+100 && v.y >= -110 && v.y <= height+100

}

function gotolink() {
	window.open('https://fw222rc.github.io/fw222rc/chargen.html');
}