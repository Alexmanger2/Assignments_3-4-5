//1) Select the section with an id of container without using querySelector.

//let q1 = document.getElementById("container");
//console.log(q1);

//2) Select the section with an id of container using querySelector.

//let q2 = document.querySelector("#container");
//console.log(q2);

//3) Select all of the list items with a class of "second".

//let q3 = document.querySelectorAll('.second').forEach(function(a){
    //console.log(a)
//})
//print out nodes in list loop through the list

//this is better for q3 /*
//let q3 = document.querySelectorAll(".second").forEach( 
   //element => console.log(element));

//print out nodes in list loop through the list

//4) Select a list item with a class of third, but only the list item inside of the ol tag.

//let q4 = document.querySelector('ol.third');
//console.log(q4);

//5) Give the section with an id of container the text "Hello!".

//let q5 = document.getElementById('container');
//q5.innerText = 'Hello!';

//6) Add the class main to the div with a class of footer.

//let q6 = document.querySelector('div.footer');
//q6.classList.add('main');
//console.log(q6);

//7) Remove the class main on the div with a class of footer.

//let q7 = document.querySelector('div.footer');
//q7.classList.remove('main');
//console.log(q7);

//8) Create a new li element.

//let q8 = document.createElement('li');

//9) Give the li the text "four".

//q8.innerText = 'four';

//10) Append the li to the ul element.

//document.querySelector('ul').append(q8);

//12) Loop over all of the lis inside the ol tag and give them a background color of "green".

//let q12 = document.querySelectorAll('ol li');
//q12.forEach(post => {
//post.style.border = '5px solid green';
// })

//13) Remove the div with a class of footer.

//let q13 = document.querySelectorAll('.footer').forEach(function(a){
     //a.remove()
//})
