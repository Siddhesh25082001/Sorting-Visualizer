// Merge Sort Asynchronous function
async function Merge(ele, low, mid, high){

    const n1 = mid - low + 1;
    const n2 = high - mid;
    
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await wait(delay);

        ele[low + i].style.background = 'cyan';
        left[i] = ele[low + i].style.height;
    }

    for(let i = 0; i < n2; i++){
        await wait(delay);
        
        // color
        ele[mid + 1 + i].style.background = 'yellow';
        right[i] = ele[mid + 1 + i].style.height;
    }

    await wait(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){

        await wait(delay);
        
        // To add color for which two r being compared for merging
        if(parseInt(left[i]) <= parseInt(right[j])){

            if((n1 + n2) === ele.length){
                ele[k].style.background = 'chartreuse';
            }
            else{
                ele[k].style.background = 'lightgreen';
            }
            
            ele[k].style.height = left[i];
            i++;
            k++;
        }
        
        else{
            
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'chartreuse';
            }
            else{
                ele[k].style.background = 'lightgreen';
            } 
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }

    while(i < n1){
        await wait(delay);

        if((n1 + n2) === ele.length){
            ele[k].style.background = 'chartreuse';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }

    while(j < n2){
        await wait(delay);
        
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'chartreuse';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }

        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

async function MergeSort(ele, l, h){
    
    if(l >= h){
        return;
    }
    
    const m = l + Math.floor((h - l) / 2);

    await MergeSort(ele, l, m);
    await MergeSort(ele, m + 1, h);
    await Merge(ele, l, m, h);

    onNavBarSize.disabled = false;
    onCustomSize.disabled = false;
}

