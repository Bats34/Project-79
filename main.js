pizza_array=[];
function display() {
    name1=document.getElementById("pizza1").value;
    name2=document.getElementById("pizza2").value;
    name3=document.getElementById("pizza3").value;
    name4=document.getElementById("pizza4").value;

    pizza_array.push(name1);
    pizza_array.push(name2);
    pizza_array.push(name3);
    pizza_array.push(name4);
    
    document.getElementById("display_name").innerHTML=pizza_array;
    console.log(pizza_array)
    document.getElementById("disk").style.display="none";
    document.getElementById("sorter").style.display="inline-block";
}
function sort() {
    pizza_array.sort();
    console.log(pizza_array);
    document.getElementById("display_name").innerHTML=pizza_array;
}