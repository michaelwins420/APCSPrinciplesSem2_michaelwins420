//Michael Costantini
//Lab 215 PopulationSort
//2/15/19


var data; //data golbal variable
var barHeight; //height of bar global variable

function preload(){ //preloads population
    loadJSON("population.json", gotData); //loads the json file
}


function setup(){ //setup function
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30); //position of canvas
  background(20);//background color
  barHeight=500;//height of bar

}
function draw(){
  if(keyCode===UP_ARROW){//color changes when up arrow pressed
    insertionSort();
    for(i=0;i<data.countrydata.length;i++){
      fill(255,0,0)
      rect(i,5,300,data.countrydata[i].males/10)
      strokeWeight(.05);
      stroke(90,10,200) //stroke of males
    }
}
if(keyCode===DOWN_ARROW){ //color changes when down arrow pressed
  BubbleSort();
  for(i=0;i<data.countrydata.length;i++){
    fill(25,176,250)
    rect(i,5,300,data.countrydata[i].females/10)
    strokeWeight(.05);
    stroke(20,120,50) //stroke of females
  }
}
}


function gotData(dataNew){ //gotData function
  data = dataNew;

}

function insertionSort(){
  for(var i = 1; i<data.countrydata.length;i++){
    for(var j = i; j>0;j--){
      if(data.countrydata[j].females<data.countrydata[j-1].females){
        var temp = data.countrydata[j];
        data.countrydata[j]=data.countrydata[j-1];
        data.countrydata[j-1]=temp;
      }
    }

  }
  console.log("insertionSort")
  console.log(data)
}

function BubbleSort(){
  var length = data.countrydata.length;
  for(var i = length - 1; i >= 0; i-- ){
    for(var j = 0; j < i; j++ ){
      if (data.countrydata[i].males < data.countrydata[j].males){
        var temp = data.countrydata[i];
        data.countrydata[i] = data.countrydata[j];
        data.countrydata[j] = temp
    }
  }
  console.log("BubbleSort")
  console.log(data);
}
  }
