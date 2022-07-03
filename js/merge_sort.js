

function Merge()
{
    c_delay=0;

    merge_partition(0,array_size-1);

    enable_buttons();
}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=div_sizes[q++];
            node_update(divs[q-1],div_sizes[q-1],col_red);//Color update
        }
        else if(q>end)
        {
            Arr[k++]=div_sizes[p++];
            node_update(divs[p-1],div_sizes[p-1],col_red);//Color update
        }
        else if(div_sizes[p]<div_sizes[q])
        {
            Arr[k++]=div_sizes[p++];
            node_update(divs[p-1],div_sizes[p-1],col_red);//Color update
        }
        else
        {
            Arr[k++]=div_sizes[q++];
            node_update(divs[q-1],div_sizes[q-1],col_red);//Color update
        }
    }

    for(var t=0;t<k;t++)
    {
        div_sizes[start++]=Arr[t];
        node_update(divs[start-1],div_sizes[start-1],col_green);//Color update
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        node_update(divs[mid],div_sizes[mid],col_yellow);//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}
