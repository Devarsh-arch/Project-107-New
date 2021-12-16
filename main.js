var dog= 0;
var cat= 0;
var tiger= 0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/saMH1mVS_/model.json", modelLoaded);
}
function modelLoaded(){
    classifier.classify(gotResults);
}
function gotResults(error, result){
    if(error){
        console.error("error");
    }
    else{
    console.log(result);
    red= Math.floor(Math.random()* 255)+1;
    green= Math.floor(Math.random()* 255)+1;
    blue= Math.floor(Math.random()* 255)+1;
    document.getElementById("NOTSP").innerHTML= "No Of Dog Sounds Detected = " + dog + ", No Of Times Cat Sounds Detected = " + cat + ", No Of Times Tiger Sounds Detected = " + tiger + ".";
    document.getElementById("NOTSP").style.color= "rgb("+ red +"," + green + "," + blue + ")";
    document.getElementById("name_of_audio").style.color= "rgb("+ red +"," + green + "," + blue + ")";

    if(result[0].label == "Cat"){
        document.getElementById("image_of_animal").src= "Cat.jpg";
        document.getElementById("name_of_audio").innerHTML= "Detected Sound Of Meowing";
        cat= cat + 1;
    }
    else if(result[0].label == "Dog"){
        document.getElementById("image_of_animal").src= "Dog.png";
        document.getElementById("name_of_audio").innerHTML= "Detected Sound Of Barking";
        dog= dog + 1;
    }
    else if(result[0].label == "Roar"){
        document.getElementById("image_of_animal").src= "Tiger.jpg";
        document.getElementById("name_of_audio").innerHTML= "Detected Sound Of Roaring";
        tiger= tiger + 1;
    }
    else{
        document.getElementById("image_of_animal").src= "Ear.png";
    }
    }
}