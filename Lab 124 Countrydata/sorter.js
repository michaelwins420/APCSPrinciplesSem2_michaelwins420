var data;
function preload(){
  loadJSON("data.json", loadingData);
}



function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for(var i = 0; i < num; i++){
  }
   bubbleSort();
 }

function bubbleSort(a){

   for (var i = data.length; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if([j-1]>[j]){
           var temp = [j-1];
           [j-1] = [j];
           [j] = temp;
        }
     }
		 console.log(a);
   }
}
