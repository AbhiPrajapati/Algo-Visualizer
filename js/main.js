var nodeSize = document.getElementById('node_size');
var nodeSpeed = document.getElementById('node_speed');
var nodeGenerate = document.getElementById('node_generate');
var nodeCreate =document.getElementById('custom_node');



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

nodeCreate.addEventListener("click",createBar);


function createBar(){



    //to take input

    s=prompt("Enter Numbers");
     console.log(s);


    //to convert in array from string

    var a = new Array();
var i=0,j=0,r=0;
while(i<s.length) { //to convert string input as int array
    r=0;
 while(i<s.length  && (s[i] != ','))
    {
    r = r* 10;
    r = r + (s[i]-'0');
    i++;
    }
     a[j]=r;
  i++;
  j++;
 }

    //to arrange in a range

    var i=0;
var max=Math.max(...a); //to give maximum value of array

for(i=0; i<a.length; i++) //to balance all data in a range
    {
        a[i]= a[i] *380/max;
    }
console.log(a);



    //to create bars


    cont.innerHTML="";
    for(var i=0;i<a.length;i++)
    {
        div_sizes[i]=Math.floor(a[i]) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color: blue; width:" + (100/a.length-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "px;border-radius:10px;";
    }




     
}



function generate_array()
{

    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(nodeSize.max - nodeSize.min) );
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
    var end, start;




    this.classList.add("butt_selected");
    switch(this.innerHTML)  //Getting the innerHTML as Bubble,Selection.....
    {
        case "Bubble":start = new Date();
                      Bubble();
                      end = new Date();
                      console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');
                      document.getElementById("timecomplex").innerHTML=(end.getTime() - start.getTime()) + ' msec';
                      break;
        case "Selection":
                        start = new Date();
                        Selection_sort();
                        end = new Date();
                        console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');
                        document.getElementById("timecomplex").innerHTML=(end.getTime() - start.getTime()) + ' msec';
                        break;
        case "Insertion":
                        start = new Date();
                        Insertion();
                        end = new Date();
                        console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');
                        document.getElementById("timecomplex").innerHTML=(end.getTime() - start.getTime()) + ' msec';
                        break;
        case "Merge":
                    start = new Date();
                    Merge();
                    end = new Date();
                    console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');
                    document.getElementById("timecomplex").innerHTML=(end.getTime() - start.getTime()) + ' msec';
                    break;

        case "Quick":
                    start = new Date();
                    Quick();
                    end = new Date();
                    console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');
                    document.getElementById("timecomplex").innerHTML=(end.getTime() - start.getTime()) + ' msec';
                    break;
                
                
        case "Heap":
                    start = new Date();
                    Heap();
                    end = new Date();
                    console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');
                    document.getElementById("timecomplex").innerHTML=(end.getTime() - start.getTime()) + ' msec';
                    break;
                
                
    }
}


//Pop-up Function
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }