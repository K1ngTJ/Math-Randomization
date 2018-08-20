var words = ["DUMB","IGNORANT" ,"CONCEITED","DISTURBING"];

var ask = prompt("what is your Name?");

var choose =(Math.floor(Math.random()* words.length));

window.alert(ask+" "+"IS"+" "+words[choose]);