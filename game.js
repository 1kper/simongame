
let gamePattern=[];
let userClickedPattern=[];
let currentScore=0;
const buttonColours = ["red","blue","green","yellow"];

function nextSequence(){
let randomNumber = Math.floor(((Math.random())*4));

$('h1').text("Level "+currentScore);

let randomColourChosen=buttonColours[randomNumber];
console.log( randomColourChosen);
gamePattern.push(randomColourChosen);

$('#'+ gamePattern[(gamePattern.length)-1]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

// return randomNumber;
}

 Array.from( $('[type="button"]')).forEach((button)=>{

   $(button).on("click",(evt)=>{


  userClickedPattern.push(evt.currentTarget.id);
 animatePress($('#'+evt.currentTarget.id));

  if(evt.currentTarget.id===gamePattern[(gamePattern.length)-1]){
         currentScore++;
          nextSequence();
    let audio = new Audio('sounds/'+evt.currentTarget.id+".mp3");
        audio.play();}
  else{ let audio = new Audio("sounds/wrong.mp3");
        audio.play();

       $("body").addClass("game-over");


       setTimeout(()=>{$("body").removeClass("game-over")},500);
      $('h1').text("Game Over  Press Any Key to Restart");
      startOver();
    }



})});



let started=true;
document.body.addEventListener("keydown",()=>{
  if(started){nextSequence( );

  i=false;}});

function  startOver(){
    started=true;
    gamePattern=[];
    currentScore=0;

  }

function animatePress(element){element.addClass("pressed");


     setTimeout(()=>{element.removeClass("pressed")},150);

  }
