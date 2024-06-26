noseX=0;
noseY=0;



function preload() {    clown_nose = loadImage('')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    postNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log('poseNet is initialized')
}

function draw() {
    Image(video, 0, 0, 300, 300);
    Image(clown_nose, noseX, noseY, 30, 30);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("nose x = " + noseX);
      console.log("nose y = " + noseY);
    }
}


function draw () {
    Image(video, 0, 0, 300, 300);
    circle(noseX, noseY, 20);
}
function take_snapshot(){
    save('myFilterImage.png');
}




noseX=0;
noseY=0;