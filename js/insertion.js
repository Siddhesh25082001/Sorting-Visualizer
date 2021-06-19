// Insertion Asynchronous Function
async function InsertionSort() {

    // selecting all bars with class 'bar'
    const all_bars= document.querySelectorAll(".bar");
    
    // Considering 1st element as sorted
    all_bars[0].style.backgroundColor = 'chartreuse';

    for(let i = 1; i < all_bars.length; i++)
    {
        var curr = parseInt(all_bars[i].style.height);
        
        let j = i - 1;
        
        //change current bars backgroung to cyan
        all_bars[i].style.backgroundColor = 'cyan';
        
        await wait(delay); // async/await function

        while(j >= 0 && parseInt(all_bars[j].style.height) > curr)
        {
            all_bars[j].style.background = 'cyan'; 
            all_bars[j+1].style.height = all_bars[j].style.height;
           
            j--;
            await wait(delay);
        }
        
        all_bars[j+1].style.height = String(curr) + 'px';
        
        for(let x = i ;x >= 0;x--){
            all_bars[x].style.background = 'chartreuse'; 
        }
        
        await wait(delay);
    }
    onNavBarSize.disabled = false;
    onCustomSize.disabled = false;
}
