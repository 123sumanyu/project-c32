const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var datetime,hour;
var sum;

var bg ;

function preload() {
   // backgroundImg=loadImage("sunrise1.png");
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);

    engine = Engine.create();
    world = engine.world;

}

function draw(){

    

if(backgroundImg)
     background(backgroundImg);
        

    Engine.update(engine);
    getBackgroundImg();

    textSize(32);
    text("TIME: ",77,112);

    if(hour-12<0 || hour===12){
        text(hour + " " + "AM",170,112);
    }
    else{
        text(sum + " " + "PM",170,112);
        sum=hour-12;
    }

    //console.log(mouseX,mouseY);

  // drawSprites();
}

//async function getBackgroundImg(){

    // write code to fetch time from API
  //  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  //  var responseJSON=await response.json();

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

//}
async function getBackgroundImg(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
   // console.log(responseJSON.datetime);
    datetime=responseJSON.datetime;
    hour=datetime.slice(11,13);
    
    
   if(hour>=00 && hour<=05){
       bg="sunrise1.png";
   }
   else if(hour>05 && hour<=06){
       bg="sunrise2.png";
   }
   else if(hour>06 && hour<=07){
       bg="sunrise3.png";
   }
   else if(hour>07 && hour<=09){
       bg="sunrise4.png";
    }
    else if(hour>09 && hour<=11){
        bg="sunrise5.png";
    }
    else if(hour>11 && hour<=16){
        bg="sunrise6.png";
    }
    else if(hour>16 && hour<=17){
        bg="sunset7.png";
    }
    else if(hour>17 && hour<=19){
        bg="sunset8.png";
    }
    else if(hour>19 && hour<=20){
        bg="sunset9.png";
    }
    else if(hour>21 && hour<=22){
        bg="sunset10.png";
    }
    else if(hour>22 && hour<=23){
        bg="sunset11.png";
    }
    else if(hour>23 && hour<=24){
        bg="sunset12.png";
    }

    backgroundImg=loadImage(bg);
  
}
