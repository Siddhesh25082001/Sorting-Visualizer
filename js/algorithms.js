// Check function to know the entered size by the user for the array and also passing it as a parameter to RandomArray() function to generate size number of bars

function check(){

    var arraySize = document.getElementById('arraySize').value;
    var canvas = document.getElementById('canva');
    
    canvas.innerHTML = ""; // Clears the Canva
   
    if(arraySize == "notSelected"){
        alert('Please Select some size to generate the array');
        canvas.innerHTML = "<center><h3 style='color:white;'>Please Select Some Size To Generate The Array</h3></center>";
    }
    else{
        arraySize = Number(arraySize);
        randomArray(arraySize);
    }
}

// RandomArray function to generate a array of count 'num' with random values between 1-100
function randomArray(num){
    
    var canva = document.getElementById('canva');

    // Get The Width of the Canva
    var canvaWidth = document.getElementById('canva').clientWidth;
    
    // Calculation for the width of each bar 
    var barWidth = Math.floor((canvaWidth - num*2)/ num);

    for(var i = 0;i < num;i++){

        //Generate Value Between 1-100
        var val = Math.floor(Math.random()*100 + 1); // +1 to avoid a bar of value 0;
        
        //Create a div i.e a bar
        var barElement = document.createElement('div');
        
        //Add class bar to the div element created
        barElement.classList.add('bar');
        
        //total Height of Canvas is 500px so val*5 will give height of the bar in pixels i.e bar with value 100 will have 100*5 = 500 pixels
        var barHeight = String(val*5) + 'px';

        //add width to the bar 
        barElement.style.width = String(barWidth) + 'px';
        
        // add height to the bar
        barElement.style.height = (barHeight);
        
        //translating cursor for next bar position
        var translatePixels = (barWidth + 2) ;
        var trans = 'translateX(' + String(i*translatePixels) + 'px)';
        
        //adding translation to the bar
        barElement.style.transform = trans;
        barElement.innerHTML = "<p style='color:white;text-align:center;font-size:100%;'>" + String(val);

        if(num > 25)
            barElement.innerHTML = "<p style='color:white;text-align:center;>" + String(val);
        
        //append the bar to the canva
        canva.appendChild(barElement);
    } 
}
