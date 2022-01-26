img=""
staus=""

function preload(){
    img=loadImage("furit basket.jpg")
}
function setup(){
    Canvas=createCanvas(500,400)
    Canvas.center()
    
    Object_Detect=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("satus").innerHTML="Status detecting object"
    
    }
    function modelloaded(){
        console.log("model loaded")
        staus=true;
        Object_Detect.detect(img,gotresult)
    }
    function gotresult (error,result){
        if(error){
            console.log(error)
        }
    
    object=result
    console.log(object)
    }
    
    function back(){
        window.location="index.html"
    }
    
    
    function draw(){
        image(img,0,0,500,400)
    }