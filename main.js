Webcam.set
({
    width: 300,
    height: 350,
    image_format:'png',
    png_qualtiy:'90'
});

camera = document.getElementById("webcam");

Webcam.attach(camera);

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='recognized_image' src='"+data_uri+"'>"
    });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8jDSUMWnU/model.json", modelLoaded);