// Getting the size of the array to be generated (i.e no of bars) - RANDOM BASIS
var onNavBarSize = document.getElementById("navBarSize");
onNavBarSize.addEventListener("click", function(){

     var arraySize = document.getElementById('arraySize').value;
     if(arraySize == "notSelected"){
        alert('Please Select some size to generate the array');
    }
    else{
        arraySize = Number(arraySize);   // typecasting the array size from string to number (basically, an integer)

        let array = []; 
        for (let i = 0; i < arraySize; i++) {
            array.push(Math.floor(Math.random() * 100) + 1);
        }
        
        // passing the arraysize  and array generated  as a parameter to the 'createNewArray()' function
        createNewArray(arraySize,array); 

        onNavBarSize.disabled = true;
    }
});

// Getting the size of the array to be genearated (i.e no. of bars) - CUSTOM BASIS
var onCustomSize = document.getElementById('custom');
onCustomSize.addEventListener("click",function(){

    var arraySize = parseInt(document.getElementById('customArraySize').value);

    // If user enters size 0 or input is Not-a-Number(NaN)
    if(arraySize == 0 || Number.isNaN(arraySize)){
         alert('Size cannot Be blank or 0 ');
    }
    else{
        var customElements = document.getElementById('customElements').value;
        var elementsValue =  customElements.split(' ');
        let array = [];
        for(let i = 0;i < elementsValue.length;i++){
            if(elementsValue[i] != '') array.push(elementsValue[i]);
        }

        //If user enters array Size 10 and enters only 5 elements 
        if(array.length != arraySize){
            alert('ArraySize and number of array elements should be equal');
        }
        else{
            createNewArray(arraySize,array);
        }
    }
});

// To vary the speed as per our need
let speedDelay = document.querySelector('#speed_input');
speedDelay.addEventListener('input', function(){
    delay = 520 - parseInt(speedDelay.value); // 520 is the max speed
});

// A Helper funtion to delete the previous canva content
function deleteChild() {
    const bars = document.querySelector("#canva");
    bars.innerHTML = '';
}

function createNewArray(arraySize,array) {

    deleteChild();

    // Selecting the container to store all bars (i.e canva in our case)
    const bars = document.querySelector("#canva");

    // Creating no.of bars uptill count and also adding each a common class 'bar', 'flex-item' as well as each bar given a separate class.

    for (let i = 0; i < arraySize; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*5}px`; // Multiplying by 5 to make the height longer 
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Delay time for wait function
let delay = 1000;

// Async js function that takes a promise to complete the sorting in given milisec.
function wait(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

// Swap function for swappping of two bars taking element.style.height of two bars as parameters
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

// Checking the sorting algo to be executed.
function checkSortAlgo(){
    var sortAlgoName = parseInt(document.getElementById('sortname').value);
    const btn = document.querySelector('.newArray');

    if(sortAlgoName == 1) BubbleSort();

    if(sortAlgoName == 2) InsertionSort();
    
    if(sortAlgoName == 3) SelectionSort();
    
    if(sortAlgoName == 4){
        let ele = document.querySelectorAll('.bar');
        let l = 0;
        let h = ele.length - 1;
        MergeSort(ele, l, h);
    }
    
    if(sortAlgoName == 5){
        let ele = document.querySelectorAll('.bar');
        let l = 0; // low
        let h = ele.length - 1; // high
        QuickSort(ele, l, h);
    }
}

