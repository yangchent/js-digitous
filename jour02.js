//exo1
var integer= 102;
var float= 13.9;
console.log(integer);
console.log(float);

//exo2
var basic=34;
var stringified= basic.toString();
console.log(stringified);

//exo3
var num=1.5;
var rounded=Math.round(num);
console.log(rounded);

//exo4
var test=12;
var bis= 5;
console.log(test + bis);//17
console.log(test - bis);//7
console.log(test * bis);//60
console.log(test/bis);//2.4
console.log(test % bis);//2
console.log(test** bis);//248832

//exo5
var test=143;
var bis=219;
console.log(test>bis);//false
console.log(test<bis);//true
console.log(test>=bis);//false
console.log(test<=bis);//true
console.log(test==bis);//false
console.log(test===bis);//false
console.log(test!=bis);//true
console.log(test!==bis);//true

//exo6
var limit= 50;
var score=  64;
if (score >= limit) { 
    console.log("ok good")
}
else {
    console.log("Oh nooo...")
    }

//exo7
var password= "azerty";
if (password.length>5) {
    console.log("The password is secure")
}

//exo8
if (score>= limit && password.length>5){
    console.log("Everything is good")
}
else if(score>=limit || password.length>5) {
    console.log("Something is good")
}
else {
    console.log("Nothing is good")
}