async function partitionArray(ele, l, h){

    let i = l - 1;
    
    ele[h].style.background = 'red'; // pivot element
    
    for(let j = l; j <= h - 1; j++){
        
        ele[j].style.background = 'yellow'; // first element
        
        await wait(delay);

        // if the current element is less than the pivot element then incrementing it and swapping.
        if(parseInt(ele[j].style.height) < parseInt(ele[h].style.height)){ 

            i++;
            swap(ele[i], ele[j]);
            
            ele[i].style.background = 'orange';
            
            if(i != j) 
                ele[j].style.background = 'orange';
            
            await wait(delay);
        }
        else{
            
            // color if not less than pivot
            ele[j].style.background = 'cyan';
        }
    }
    i++; 
    
    await wait(delay);
    swap(ele[i], ele[h]); // swapping of elements
    
    
    ele[h].style.background = 'cyan';
    ele[i].style.background = 'chartreuse';

    // pauseChamp
    await wait(delay);
    
    
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'chartreuse')
            ele[k].style.background = 'orange';
    }

    return i; // returning the pivot position
}

async function QuickSort(ele, l, h){
    
    if(l < h){
        let pivot_index = await partitionArray(ele, l, h);
        await QuickSort(ele, l, pivot_index - 1);
        await QuickSort(ele, pivot_index + 1, h);
    }
    else{
        if(l >= 0 && h >= 0 && l <ele.length && h <ele.length){
            ele[h].style.background = 'chartreuse';
            ele[l].style.background = 'chartreuse';
        }
    }

    onNavBarSize.disabled = false;
    onCustomSize.disabled = false;
}


