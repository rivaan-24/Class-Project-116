noseX = 0;
noseY = 0;
function preload() {
    clown_nose = loadImage("https://i.postimg.cc/SNrfXnSD/Clown-nose-large.webp");
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 70, 70);
}
function snapshot() {
    save("realtime_filter.png");
}
function modelLoaded() {
    console.log("PoseNet is initialized.");
}
function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);

        noseX = result[0].pose.nose.x - 35;
        noseY = result[0].pose.nose.y - 35;
        console.log(noseX);
        console.log(noseY);
    }
    else {
        console.error("Error found. There are no values/empty in the array.");
    }
}