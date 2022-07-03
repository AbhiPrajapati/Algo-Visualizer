//visualization Part.

//We only have to change background-color and height of the sorting element.

var speed=1000;

nodeSpeed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=nodeSpeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
}

var delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
var c_delay=0;//This is updated on every div change so that visualization is visible.

function node_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + ";background-image:"+ color +";border-radius:10px;";
    },c_delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<algo_btn.length;i++)
        {
            algo_btn[i].classList=[];
            algo_btn[i].classList.add("butt_unselected");

            algo_btn[i].disabled=false;
            nodeSize.disabled=false;
            nodeGenerate.disabled=false;
            nodeSpeed.disabled=false;
        }
    },c_delay+=delay_time);
}
