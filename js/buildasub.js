let sandwichOrder = [];

makeSandwich = () =>{
    let sandwichTotal = 0;

    let sandwichName = document.getElementById("sandwichName").value;
    let size = document.getElementById("size").value;

    if(size === "Small"){
        sandwichTotal = sandwichTotal + 20;
    } else if(size === "Medium"){
       sandwichTotal = sandwichTotal + 40;
    } else if(size === "Large"){
        sandwichTotal = sandwichTotal + 60;
    }

    console.log(sandwichOrder)
}