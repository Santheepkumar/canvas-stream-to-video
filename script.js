
// References
// https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Manipulating_video_using_canvas
// https://flashphoner.com/a-how-to-guide-on-canvas-streaming-via-webrtc/

const canvas = document.getElementById("myCanvas");

const video = document.getElementById("myVideo");

const VIDEO_WIDTH = 600;
const VIDEO_HEIGHT = 300;

// Setting width on styles
canvas.style.width = VIDEO_WIDTH + "px";
canvas.style.height = VIDEO_HEIGHT + "px";

const scale = window.devicePixelRatio; 

// Increasing canvas width depending on device pixel ratio
canvas.width = Math.floor(VIDEO_WIDTH * scale);
canvas.height = Math.floor(VIDEO_HEIGHT * scale);

const ctx = canvas.getContext("2d");

// Normalize coordinate system to use css pixels.
ctx.scale(scale, scale);

// Stying canvas text
ctx.fillStyle = "white";
ctx.font = "60px Arial";
ctx.textAlign = "center";
let x = 0;

setInterval(() => {
  x++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText(`LOOPING ${x}`, 300, 150);
}, 1000);

// Capturing canvas stream and putting inside video source
const stream = canvas.captureStream(60);
video.srcObject = stream;

const playButton = document.getElementById("play");
playButton.addEventListener("click", () => video.play());
