const col_yellow = "linear-gradient(90deg, rgba(245,252,75,1) 0%, rgba(255,76,0,0.8883928571428571) 100%)";
const col_red = "linear-gradient(90deg, rgba(245,5,5,1) 0%, rgba(121,9,9,1) 54%, rgba(255,0,168,1) 100%)";
const col_blue = "linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)";
const col_green = "linear-gradient(90deg, rgba(4,57,10,1) 0%, rgba(39,186,6,0.8883928571428571) 100%)";

function Bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            node_update(divs[j],div_sizes[j],col_yellow);//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                node_update(divs[j],div_sizes[j], col_red);//Color update
                node_update(divs[j+1],div_sizes[j+1], col_red);//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                node_update(divs[j],div_sizes[j], col_red);//Height update
                node_update(divs[j+1],div_sizes[j+1],col_red);//Height update
            }
            node_update(divs[j],div_sizes[j], col_blue);//Color updat
        }
        node_update(divs[j],div_sizes[j], col_green);//Color update
    }
    node_update(divs[0],div_sizes[0], col_green);//Color update

    enable_buttons();
}
