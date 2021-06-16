// Check function to know the entered size by the user for the array and also passing it as a parameter to RandomArray() function to generate size number of bars
function check(){

    // Getting the size of the array i.e no. of bars
    var arraySize = document.getElementById('arraySize').value;
   
    // If size is not selected, prompt the user to enter a size for the array
    if(arraySize == "notSelected"){
        alert('Please Select some size to generate the array');
    }
    else{
        arraySize = Number(arraySize); // typecasting the array size from string to number (basically, an integer) 
        createNewArray(arraySize); // passing the arraysize as a parameter to the 'createNewArray()' function
    }
}

// Selecting the newArray upon clicking of Generate New Array button
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    createNewArray(arraySize.value);
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

// Declaring a empty local variable type array to hold all array elements i.e all bars
let array = [];

// Calling the createNewArray funtion
createNewArray(arraySize);

// Function to create a new array based on the arraySize
function createNewArray(arraySize) {

    // Calling helper function to clear the previous canva content
    deleteChild();

    // Creating a random array of elements between 1 and 100 (both inclusive)
    array = [];
    for (let i = 0; i < arraySize; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    // console.log(array); // only for displaying the size of the array object in console tab

    // Selecting the container to store all bars (i.e canva in our case)
    const bars = document.querySelector("#canva");

    // create multiple element div using loop and adding class 'bar col'
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

// Delay time for rukomereliye function
let delay = 1000;

// Async js function that takes a promise to complete the sorting in given milisec.
function rukomereliye(milisec) { 
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







