Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_format:90
})
camera = document.getElementById("webcam_html");

Webcam.attach('#webcam_html');
function take_snapshot(){
    Webcam.snap(function (Data_uri){
        document.getElementById("result").innerHTML = "<img id='img_captured' src='"+Data_uri+"'/>"
    });
}
console.log("Ml5 version :"+ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_huJD8F_n/model.json',modelloaded);