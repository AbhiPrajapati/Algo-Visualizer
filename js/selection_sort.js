

function Selection_sort()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        node_update(divs[i],div_sizes[i],col_red);//Color update

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            node_update(divs[j],div_sizes[j],col_yellow);//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    node_update(divs[index_min],div_sizes[index_min],col_blue);//Color update
                }
                index_min=j;
                node_update(divs[index_min],div_sizes[index_min],col_red);//Color update
            }
            else
            {
                node_update(divs[j],div_sizes[j],col_blue);//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            node_update(divs[index_min],div_sizes[index_min],col_red);//Height update
            node_update(divs[i],div_sizes[i],col_red);//Height update
            node_update(divs[index_min],div_sizes[index_min],col_blue);//Color update
        }
        node_update(divs[i],div_sizes[i],col_green);//Color update
    }
    node_update(divs[i],div_sizes[i],col_green);//Color update

    enable_buttons();
}

