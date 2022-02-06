
var song = "";
var song2 = "";

rightWristX= 0;
rightWristY= 0;
leftWristX= 0;
leftWristY = 0;
scorerightWrist = 0;
scoreleftWrist = 0;
function preload(){
song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 500);
    video.hide()

    poseNet = mlf.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}

function modelLoaded(){
  console.log("posenet is open")
}

function gotPoses(){
  if(results.lenght > 0)
{
  console.log(results);
scoreRightWrist  = results[0].pose.keypoint[10].score;
scoreLeftWrist  = results[0].pose.keypoint[19].score;
console.log("right score" + scoreRightWrist + "left score" + scoreLeftWrist);


rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log( "x wrist right" + rightWristX + "y wrist right" + rightWristY);

leftWristX = results[0].pose.lefttWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log( "x wrist right" + leftWristX + "y wrist right" + leftWristY);
}}


function draw(){
  image(video, 0, 0, 600, 500);

  song1_status = song1.isPlaying();
  song2_status = song2.isPlaying();
  
  fill("#FF0000");
  stroke("#FF0000");

  if(scorerightWrist > 0.2){
      circle(rightWristX, rightWristY, 20);
      song2.stop();
     
      if(song1_status == false){
          song1.play();
          document.getElementById("song").innerHTML = "playing xxxxxxxxxx";

      }
  }


  if(scoreleftWrist > 0.2){
      circle(leftWristX, leftWristY, 20);
      song1.stop();
     
      if(song2_status == false){
          song2.play();
          document.getElementById("song").innerHTML = "playing xxxxxxxxxx";
          
      }
  }


}

function play(){
song.play();
}

