// Selection Sort Asnchronous Function
async function SelectionSort() {

    // selecting all bars with class 'bar'
    const ele = document.querySelectorAll(".bar");

    for(let i = 0; i < ele.length-1; i++)
    {
        let min_index = i;
        ele[min_index].style.background = 'red'; // main element

        for(let j = i + 1; j < ele.length; j++)
        {
            ele[j].style.background = 'cyan'; // adjacent element

            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height))
                min_index = j; 
        }

        await wait(delay); // async/await function
        swap(ele[min_index], ele[i]);  // swap function
        
        ele[min_index].style.background = 'orange';
        // ele[i].style.background = 'orange';
        ele[i].style.background = 'chartreuse';
    }

    // Last sorted element to make chartreuse as it is the only left at last.
    ele[ele.length - 1].style.background = 'chartreuse'; 
}
