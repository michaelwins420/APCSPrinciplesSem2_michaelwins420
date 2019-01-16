var num = 100
var a = []

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for(var i = 0; i < num; i++){
    a[i] = round(random(num))
  }
   mySort(a); //doesnt work, I tried
   bubbleSort(a);
   selectionSort(a);
	 insertionSort(a);
 }

 function mySort(a){ //doesnt work, I tried
	 var temp;
	 for (var i = a.length; i>=0; i--){
		for(var j = 1; j<=i; j++){
			if(a[j] < a[j-1]){
        temp = a[j];
        a[j] = a[j-1];
        a[j-1] = temp;
			}
		}
		console.log(a);
	}
	return a;
}

function bubbleSort(a){

   for (var i = a.length; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(a[j-1]>a[j]){
           var temp = a[j-1];
           a[j-1] = a[j];
           a[j] = temp;
        }
     }
		 console.log(a);
   }
	 return a;
}

function selectionSort(a) {
for (var i = 0; i < a.length - 1; i++){
        		var index = i;
            for (var j = i + 1; j < a.length; j++){
    				if (a[j] < a[index]){
       index = j;
    }
  }
	    var smallerNumber = a[index];
      a[index] = a[i];
      a[i] = smallerNumber;
			console.log(a);
    }
		return a;
	}

function insertionSort(a) {
	var temp;
			 for (var  i = 1; i < a.length; i++) {
						 for(var  j = i ; j > 0 ; j--)
						 {
								if(a[j] < a[j-1]){
									 temp = a[j];
									 a[j] = a[j-1];
									 a[j-1] = temp;
								 }
						 }
						 console.log(a);
				}
				return a;
			}
