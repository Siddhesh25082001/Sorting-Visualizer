// BubbleSort Asynchronous Function
async function BubbleSort() {

    // selecting all bars with class 'bar'
    const ele = document.querySelectorAll(".bar");

    for(let i = 0; i < ele.length-1; i++)
    {
        for(let j = 0; j < ele.length-i-1; j++)
        {
            ele[j].style.background = 'cyan'; // main element
            ele[j+1].style.background = 'red'; // adjacent element

            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height))
            {
                await wait(delay); // async/await function
                swap(ele[j], ele[j+1]);  // swap function 
            }
            ele[j].style.background = 'orange';
            ele[j+1].style.background = 'orange';
        }
        ele[ele.length-1-i].style.background = 'lightgreen'; // Last soted element becoming lightgreen
    }
    ele[0].style.background = 'lightgreen'; // first soted element to make lightgreen as it is the only left at last.
}

function checkSortAlgo(){
    var sortAlgoName = parseInt(document.getElementById('sortname').value);
    if(sortAlgoName == 1) BubbleSort();

}

// // Selecting Bubble Sort by targeting its classname
// const bubble = document.querySelector(".bubbleSort");
// bubble.addEventListener('click', async function(){
//     await BubbleSort(); // Calling BubbleSort Function
// });

