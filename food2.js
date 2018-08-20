var method = ["GRILL","SAUTEE","BAKED","COOKED","STIR FRY","DEEP FRIED","BARBEQUE"];

var food = ["SPAGHETTI","SEAFOOD","STEAK","HAMBURGER","CURRY","HOTDOG","CHICKEN","RICE","HUMAN","PORK","BREAD","POTATO"];

var choosemethod = (Math.floor(Math.random()*method.length));
var choosefood = (Math.floor(Math.random()*food.length));

window.alert(method[choosemethod] +" "+ food[choosefood] )