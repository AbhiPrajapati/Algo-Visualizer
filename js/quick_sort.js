

function Quick()
{
    c_delay=0;

    quick_sort(0,array_size-1);

    enable_buttons();
}

function quick_partition (start, end)
{
    var i = start + 1;
    var piv = div_sizes[start] ;//make the first element as pivot element.
    node_update(divs[start],div_sizes[start],col_yellow);//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (div_sizes[ j ] < piv)
            {
                node_update(divs[j],div_sizes[j],col_yellow);//Color update

                node_update(divs[i],div_sizes[i],col_red);//Color update
                node_update(divs[j],div_sizes[j],col_red);//Color update

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;

                node_update(divs[i],div_sizes[i],col_red);//Height update
                node_update(divs[j],div_sizes[j],col_red);//Height update

                node_update(divs[i],div_sizes[i],col_blue);//Height update
                node_update(divs[j],div_sizes[j],col_blue);//Height update

                i += 1;
            }
    }
    node_update(divs[start],div_sizes[start],col_red);//Color update
    node_update(divs[i-1],div_sizes[i-1],col_red);//Color update
    
    var temp=div_sizes[start];//put the pivot element in its proper place.
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    node_update(divs[start],div_sizes[start],col_red);//Height update
    node_update(divs[i-1],div_sizes[i-1],col_red);//Height update

    for(var t=start;t<=i;t++)
    {
        node_update(divs[t],div_sizes[t],col_green);//Color update
    }

    return i-1;//return the position of the pivot
}

function quick_sort (start, end )
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
 }

