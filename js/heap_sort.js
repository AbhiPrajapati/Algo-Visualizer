

function Heap()
{
    c_delay=0;

    heap_sort();
    
    enable_buttons();
}

function swap(i,j)
{
    node_update(divs[i],div_sizes[i],col_red);//Color update
    node_update(divs[j],div_sizes[j],col_red);//Color update

    var temp=div_sizes[i];
    div_sizes[i]=div_sizes[j];
    div_sizes[j]=temp;

    node_update(divs[i],div_sizes[i],col_red);//Height update
    node_update(divs[j],div_sizes[j],col_red);//Height update

    node_update(divs[i],div_sizes[i],col_blue);//Color update
    node_update(divs[j],div_sizes[j],col_blue);//Color update
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && div_sizes[l]>div_sizes[largest])
    {
        if(largest!=i)
        {
            node_update(divs[largest],div_sizes[largest],col_blue);//Color update
        }

        largest=l;

        node_update(divs[largest],div_sizes[largest],col_red);//Color update
    }

    if(r<n && div_sizes[r]>div_sizes[largest])
    {
        if(largest!=i)
        {
            node_update(divs[largest],div_sizes[largest],col_blue);//Color update
        }

        largest=r;

        node_update(divs[largest],div_sizes[largest],col_red);//Color update
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        node_update(divs[i],div_sizes[i],col_green);//Color update
        node_update(divs[i],div_sizes[i],col_yellow);//Color update

        max_heapify(i,0);

        node_update(divs[i],div_sizes[i],col_blue);//Color update
        node_update(divs[i],div_sizes[i],col_green);//Color update
    }
    node_update(divs[i],div_sizes[i],col_green);//Color update
}

