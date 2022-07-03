

function Insertion()
{
    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        node_update(divs[j],div_sizes[j],col_yellow);//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            node_update(divs[i],div_sizes[i],col_red);//Color update
            node_update(divs[i+1],div_sizes[i+1],col_red);//Color update

            div_sizes[i+1]=div_sizes[i];

            node_update(divs[i],div_sizes[i],col_red);//Height update
            node_update(divs[i+1],div_sizes[i+1],col_red);//Height update
    
            node_update(divs[i],div_sizes[i],col_blue);//Color update
            if(i==(j-1))
            {
                node_update(divs[i+1],div_sizes[i+1],col_yellow);//Color update
            }
            else
            {
                node_update(divs[i+1],div_sizes[i+1],col_blue);//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            node_update(divs[t],div_sizes[t],col_green);//Color update
        }
    }
    node_update(divs[j-1],div_sizes[j-1],col_green);//Color update

    enable_buttons();
}
