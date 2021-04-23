noseX = 0;
noseY = 0;
answer = [];
function preload(){
    boy = loadImage('https://i.postimg.cc/cCsYGZTh/BOY.png');
    girl = loadImage('https://i.postimg.cc/XJkzKfJv/lipstick.png');
}

function setup(){
    Canvas = createCanvas(300 , 300);
    Canvas.center()
    cam = createCapture(VIDEO);
    cam.size(300 , 300);
    cam.hide();
    PoseNet = ml5.poseNet(cam , loaded);
    PoseNet.on('pose' , gotPoses);
}

function loaded(){
    console.log("Pose Net Initialized!");
}

function draw(){
    image(cam , 0 , 0 , 300 , 300);
    opt = document.getElementById("drop1").value;
    if(opt == "BOY"){
        
        image(boy , noseX - 10 , noseY - 10, 70 , 40);
    }
    else{
        image(girl , noseX , noseY , 45 , 35);
    }
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        noseX = result[0].pose.nose.x - 20;
        noseY = result[0].pose.nose.y + 10;
    }
}

function save1(){
    save('filter.png');
}