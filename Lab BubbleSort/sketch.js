var i = [3,5,1,2,4,7.6];
var j = [3,5,1,2,4,7.6];


//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  mySort();
  bubbleSort();

}

//  The draw function is called @ 30 fps
function draw() {

}




function bubbleSort(){
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }

   function insertionSort(){
     var temp;
        for (var  i = 1; i < arr.length; i++)
 {
              for(var  j = i ; j > 0 ; j--)
              {
                 if(arr[j] < arr[j-1]){
                    temp = arr[j];
                    arr[j] = arr[j-1];
                    arr[j-1] = temp;
                  }
              }
         }
       }
