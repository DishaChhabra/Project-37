var canvas;
var contestantCount, allContestants, answer, database, question, form, contestant;
var gameState = 0;
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database()
  quiz = new Quiz()
  quiz.getState()
  quiz.start()
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    quiz.setState(1)
  }
  //console.log(allContestants)
  if(gameState === 1){
    clear()
    quiz.play()
  }
  
}
