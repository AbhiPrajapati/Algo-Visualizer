var nodeSize = document.getElementById('node_size');
var nodeSpeed = document.getElementById('node_speed');
var nodeGenerate = document.getElementById('node_generate');


var arraySize = nodeSize.value;


var algo_btn=document.querySelectorAll(".algo button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

//Array generation and updation.

nodeGenerate.addEventListener("click",generate_array);
nodeSize.addEventListener("input",update_array_size);

function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(nodeSize.max - nodeSize.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color: blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;border-radius:10px;";
    }
}

function update_array_size()
{
    array_size=nodeSize.value;
    generate_array();
}

window.onload=update_array_size();

//Running the appropriate algorithm.
for(var i=0;i<algo_btn.length;i++)
{
    algo_btn[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<algo_btn.length;i++)
    {
        algo_btn[i].classList=[];
        algo_btn[i].classList.add("butt_locked");

        algo_btn[i].disabled=true;
        nodeSize.disabled=true;
        nodeGenerate.disabled=true;
        nodeSpeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)  //Getting the innerHTML as Bubble,Selection.....
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}

